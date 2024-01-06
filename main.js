var get = 1
var t = 0
var rebirth_point = 0
buyed = [0,0,0,0,0,0]
up1price = 10;
function auto_re(){
    rebirth_point = Math.round(Math.floor(t**0.09) * 0.8) + rebirth_point;
}
function auto_click() {
                addt();
                update();
              }
function update(){
    document.getElementById("t").innerHTML = "你面前的这块物体现在有"+ t +"K";
    document.getElementById("get").innerHTML = "增加"+ get +"K";
    document.getElementById("re").innerHTML = "吸收热量并获得" + Math.floor(t**0.09) + "个科技点";
    document.getElementById("ret").innerHTML = "你有" + rebirth_point + "科技点"
}
function addt(){
    t = t + get;
    update();
    console.log(buyed);
}
function up1(){
    if (buyed[0] < 10){
        if (t > up1price || t == up1price){
            t = t - up1price;
            get = get + 2;
            up1price = up1price * 2
            buyed[0] = buyed[0] + 1;
            document.getElementById("up1").innerHTML="升级1<br>"+up1price+"K<br>点一次加2K<br>已购买"+buyed[0]+"/10";
        }
    }else{
        document.getElementById("up1").innerHTML="已购买"+buyed[0]+"/10";
    }
    update();
}
function up2(){
    if (buyed[1] == 0){
        self.price = 100;
        if (t > self.price || t == self.price){
            t = t - self.price;
            buyed[1] = 1;
            document.getElementById("up2").innerHTML="已购买";
            up2e = setInterval(auto_click, 1000);
        }
    }
    update();
}  
function up3(){
    if (buyed[2] == 0){
        self.price = 1000;
        if (t > self.price || t == self.price){
            t = t - self.price;
            buyed[2] = 1;
            document.getElementById("up3").innerHTML="已购买";
            clearInterval(up2e);
            setInterval(auto_click, 500);
        }
    }
    update();
}
function re(){
    rebirth_point = rebirth_point + Math.floor(t**0.09);
    t = 0;
    if (buyed[4] == 1){
        get = get + Math.floor(rebirth_point**0.6+1)
    }
    if (buyed[4] == 1){
        get = get + Math.floor(rebirth_point**1.1)
    }
    document.getElementById("ret").innerHTML="你有" + rebirth_point + "科技点"
    update();
}
function reup1(){
    if (buyed[3] == 0){
        self.price = 1;
        if (rebirth_point > self.price || rebirth_point == self.price){
            rebirth_point = rebirth_point - self.price;
            buyed[3] = 1;
            document.getElementById("reup1").innerHTML="已购买";
            reup1e = setInterval(auto_re,1000);
        }
    }
    update();
}
function reup2(){
    if (buyed[4] == 0){
        self.price = 3;
        if (rebirth_point > self.price || rebirth_point == self.price){
            rebirth_point = rebirth_point - self.price;
            buyed[4] = 1;
            document.getElementById("reup2").innerHTML="已购买";
        }
    }
    update();
} 
function reup3(){
    if (buyed[5] == 0){
        self.price = 10;
        if (rebirth_point > self.price || rebirth_point == self.price){
            rebirth_point = rebirth_point - self.price;
            buyed[5] = 1;
            document.getElementById("reup3").innerHTML="已购买";
        }
    }
    update();
}  