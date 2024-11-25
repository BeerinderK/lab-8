var i;
var sum =0;

for (i =1; i<=5; i++){

    console.log("i ="+1);
    console.log("sum ="+sum);
    sum = sum+i;
}

var again;
/* the again var repeats this proccess over n over til uer says no */

do{

var miles;
var gallons;

do{
    miles =parseInt(prompt("emter miles driven"));
    gallons =parseInt(prompt("emter gallons used"));
}while(isNaN(miles) || miles <0); isNaN(miles) || gallons <0;


again = prompt("do you want to do it again", "y");
}while(again =="y");

document.write(`<p> The miles per gallons are: </p> ${miles/gallons}`)

/* use backtick literal (under esc key) not ' ^^^^^^ */
