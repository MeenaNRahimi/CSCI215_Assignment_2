//function for randomPic.html
function randomPic(){
    var randNum = Math.floor(Math.random() * 10);
    var name = "puppy" + randNum + ".jpg";
    document.getElementById("randomPic").src = "../img/" + name;
}


///////////////////////////////////////////////////////////////////////////////////////////////

//functions for mathFun.html
function promptUser(){
    var counter = 0;
    var array = [];
    var continueValid = false;
    do {
        var num = parseInt(prompt("Enter a positive number. Enter -1, if you are finished", "Positive number"));
        if (num >= 0){
            array[counter] = num;
            counter ++;
            continueValid = false;}
        else {
            continueValid = true;}
    }while (!continueValid);

    var body = document.getElementsByTagName("body")[0];

    mathTable = document.createElement("table");
    mathTablebody = document.createElement("tbody");


        var row1 = document.createElement("tr");
        var row2 = document.createElement("tr");
        var row3 = document.createElement("tr");
        var row4 = document.createElement("tr");
        var row5 = document.createElement("tr");
        var row6 = document.createElement("tr");
        var row7 = document.createElement("tr");
        var row8 = document.createElement("tr");
        var row9 = document.createElement("tr");


        var cell1 = document.createElement("td");
        var cell2 = document.createElement("td");
        var cell3 = document.createElement("td");
        var cell4 = document.createElement("td");
        var cell5 = document.createElement("td");
        var cell6 = document.createElement("td");
        var cell7 = document.createElement("td");
        var cell8 = document.createElement("td");
        var cell9 = document.createElement("td");
        var cell10 = document.createElement("td");
        var cell11 = document.createElement("td");
        var cell12 = document.createElement("td");
        var cell13 = document.createElement("td");
        var cell14 = document.createElement("td");
        var cell15 = document.createElement("td");
        var cell16 = document.createElement("td");
        var cell17 = document.createElement("td");
        var cell18 = document.createElement("td");


        var head1 = document.createTextNode("Function");
        cell1.appendChild(head1);
        row1.appendChild(cell1);
        var head2 = document.createTextNode("Answer");
        cell2.appendChild(head2);
        row1.appendChild(cell2);

        var f1 = document.createTextNode("Maximum Element");
        cell3.appendChild(f1);
        row2.appendChild(cell3);
        var f2 = document.createTextNode((max(array).toString()));
        cell4.appendChild(f2);
        row2.appendChild(cell4);

        var f3 = document.createTextNode("Minimum Element");
        cell5.appendChild(f3);
        row3.appendChild(cell5);
        var f4 = document.createTextNode((min(array).toString()));
        cell6.appendChild(f4);
        row3.appendChild(cell6);

        var f6 = document.createTextNode("Mean");
        cell7.appendChild(f6);
        row4.appendChild(cell7);
        var f7 = document.createTextNode((mean(array).toString()));
        cell8.appendChild(f7);
        row4.appendChild(cell8);

        var f8 = document.createTextNode("Median");
        cell9.appendChild(f8);
        row5.appendChild(cell9);
        var f9 = document.createTextNode((median(array).toString()));
        cell10.appendChild(f9);
        row5.appendChild(cell10);

        var f10 = document.createTextNode("Number of Even");
        cell11.appendChild(f10);
        row6.appendChild(cell11);
        var f11 = document.createTextNode((even(array).toString()));
        cell12.appendChild(f11);
        row6.appendChild(cell12);

        var f12 = document.createTextNode("Number of Odd");
        cell13.appendChild(f12);
        row7.appendChild(cell13);
        var f13 = document.createTextNode((odd(array).toString()));
        cell14.appendChild(f13);
        row7.appendChild(cell14);

        var f14 = document.createTextNode("Number of Prime");
        cell15.appendChild(f14);
        row8.appendChild(cell15);
        var f15 = document.createTextNode((prime(array).toString()));
        cell16.appendChild(f15);
        row8.appendChild(cell16);

        var f16 = document.createTextNode("Number of Power of 2");
        cell17.appendChild(f16);
        row9.appendChild(cell17);
        var f17 = document.createTextNode((powOfTwo(array).toString()));
        cell18.appendChild(f17);
        row9.appendChild(cell18);

        mathTablebody.appendChild(row1);
        mathTablebody.appendChild(row2);
        mathTablebody.appendChild(row3);
        mathTablebody.appendChild(row4);
        mathTablebody.appendChild(row5);
        mathTablebody.appendChild(row6);
        mathTablebody.appendChild(row7);
        mathTablebody.appendChild(row8);




    mathTable.appendChild(mathTablebody);
    body.appendChild(mathTable);
    mathTable.setAttribute("border","2");
    mathTable.setAttribute("id", "mathTable");

}//promptUser


function max(arr){
    var max= Math.max(...arr);
    return max;
}//max

function min(arr){
    var min = Math.min(...arr);
    return min;
}//min

function mean(array){
    var sum = 0;
    for (var i in array) {
        sum = sum + array[i]; }
    mean = sum / array.length;
    return mean;
}//mean

function median(array) {
    var median = 0;
    if (array.length % 2 == 0){
        median = (array[array.length / 2 - 1] + array[array.length / 2]) / 2;}
    else{
        median = array[array.length - 1 / 2 ];}
    return median;
}//median

function even(array){
    var counter = 0;
    for (var i in array){
        if(array[i] % 2 == 0){
            counter++;}}
    return counter;
}//even

function odd(array){
    var counter = 0;
    for (var i in array){
        if(array[i] % 2 != 0){
            counter++;}}
    return counter;
}//odd

function powOfTwo(array){
    var counter = 0;
    for (var i in array) {
        if ((i && (i & (i - 1)) === 0)){
            counter ++;}}
    return counter;
}//powOfTwo

function isPrime(element){
    if (element <= 1){
        return false;}
    for (var i = 2; i < element; i++){
        if (element % i == 0){
            return false;}}

    return true;
}//isPrime

function prime(array){
    var counter = 0;
    for (var i in array){
        if (isPrime(i) == true){
            counter++;}}
    return counter;
}//prime


//////////////////////////////////////////////////////////////////////////////////////////

//functions for Morse Code

function convert(){

    var code = {"a": ".-",    "b": "-...",  "c": "-.-.", "d": "-..",
                "e": ".",     "f": "..-.",  "g": "--.",  "h": "....",
                "i": "..",    "j": ".---",  "k": "-.-",  "l": ".-..",
                "m": "--",    "n": "-.",    "o": "---",  "p": ".--.",
                "q": "--.-",  "r": ".-.",   "s": "...",  "t": "-",
                "u": "..-",   "v": "...-",  "w": ".--",  "x": "-..-",
                "y": "-.--",  "z": "--..", };

    var input = document.getElementById("input");
    var output = document.getElementById("output");

        var text = input.value;
        text = text.toLowerCase();
        text = text.split("");
        for (var i = 0; i < text.length; i++) {
            text[i] = code[text[i]];
        }
        text = text.join(" ");
        console.log(text);
        output.innerHTML = text;
    }//convert

/////////////////////////////////////////////////////////////////////////////////////////////////////////