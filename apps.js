//Q1 output greather number

var num1 = +prompt("Please enter 1st number")
var num2 = +prompt("Please enter 2nd number")

if(num1>num2){
    alert("Number 1 is greater : " +num1)
}
else if(num2>num1){
    alert("Number 2 is greater : " +num2)
}
else if(num1==num2){
    alert("Both numbers are  Equal")
}





//Q2 output negative or positive integer

var q2Num = +prompt("Please enter a number")


if(q2Num>0){
    alert("Number is positive" )
}
else if(q2Num<0){
    alert("Number is negative" )
}
else if(q2Num===0){
    alert("Number is = 0" )
}




//Q3 output if letter is vowel

var q3Letter = prompt("Please enter a letter")


if((q3Letter==="A")||(q3Letter==="a")){
    alert("True" )
}
else if((q3Letter==="E")||(q3Letter==="e")){
    alert("True" )
}
else if((q3Letter==="I")||(q3Letter==="i")){
    alert("True" )
}
else if((q3Letter==="O")||(q3Letter==="o")){
    alert("True" )
}
else if((q3Letter==="U")||(q3Letter==="u")){
    alert("True" )
}
else{
    alert("False")
}





//Q5 Password Validation

var q4Pass = "abcd"
var q4InputPass=prompt("Please enter the password")

if(q4InputPass=q4Pass){
    alert("Correct! The password you entered matched the original password." )
}

//this condition is not working
else if(q4InputPass===""){
    alert("Please enter your password" )
}
// ---- x ---- x ---- x

else{
    alert("Incorrect password" )
}





//Q6 correct the code
var greeting
var hour = 13

if(hour< 18){
    greeting = "Good day"
    document.write(greeting)
}
else{
    greeting = "Good evening"
    document.write(greeting)
}





//Q7 clock format

var internationalClockFormat = +prompt("Please enter time in 24-hour format")
var timeNormal = ((internationalClockFormat - 1200)/100)

if(internationalClockFormat > 1200){
    alert("-"+timeNormal+" PM")
}
else{
    alert(timeNormal+" AM")
}