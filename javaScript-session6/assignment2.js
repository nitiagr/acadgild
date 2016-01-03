function multiples(){
    for(var i=1; i<=100;i++){
        if(i%3==0 && i%5==0){
             console.log("number: FizzBuzz");
        }
        else if(i%3==0){
            console.log("number: Fizz");
        }
        else if(i%5==0){
            console.log("number: Buzz");
        }else{
            console.log("number: "+ i);
        }
    }
    console.log("test");
}

multiples();