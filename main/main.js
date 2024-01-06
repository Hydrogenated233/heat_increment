var get = 1
var t = 0
buyed = [0,0]
up1price = 10;
function update(){
    document.getElementById("t").innerHTML = "你面前的这块物体现在有"+ t +"K";
    document.getElementById("get").innerHTML = "增加"+ get +"K";
}
function addt(){
    t = t + get;
    update();
    console.log(buyed);
}
function up1(){
    if (buyed[0] < 11){
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
            function myFunction() {
                addt();
                update();
              }
              setInterval(myFunction, 1000);
        }
    }
}  
