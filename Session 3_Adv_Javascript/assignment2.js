function calculator(x,y){
    var z;
    this.x=x;
    this.y=y;
    
    this.add=function(){
        z=x+y;
        this.showResult();
    };
    this.sub=function(){
        z=x-y;
    };
    this.multiply= function(){
        z=x*y;
    };
    this.divide=function(){
        z=x/y;
        return z;
    };
    this.showResult=function(){
        console.log("Result: " + z);
    };
}

var cal1 = new calculator(60,6);
cal1.add();
cal1.sub();
cal1.showResult();
cal1.multiply();
cal1.showResult();
alert(cal1.divide());