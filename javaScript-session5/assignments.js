function calcCircleArea(r){
    var area;
    area= 3.14159 *r*r;
    console.log(area);
}
calcCircleArea(7);
calcCircleArea(1.5);
calcCircleArea(20);

function currentTime(){
    var time = new Date();
    console.log("Current time is " + time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds());
}

currentTime();

function remainder(x,y){
    console.log("Remainder of " + x + " divided by " + y +" is " + x%y);
}

remainder(15,9);

function createElement(){
    var btn = document.createElement("BUTTON");        // Create a <button> element
    var t = document.createTextNode("CLICK ME");       // Create a text node
    btn.appendChild(t);                                // Append the text to <button>
    document.body.appendChild(btn);
}

createElement();