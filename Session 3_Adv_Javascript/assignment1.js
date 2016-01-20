function car(make,model,year){
    this.make = make;
    this.model = model;
    this.year = year;
    this.getCarDetails = function(){
        alert(this.make +" :"+ this.year);
    }
}

var car1= new car('make1','model1',1111);
var car2 = new car('make2','model2',2222);
alert(car1.make+","+car1.model+","+car1.year);
alert(car2.make+","+car2.model+","+car2.year);
car1.getCarDetails();
