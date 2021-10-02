//Set myNumber to 42. Set myName to your name. Now swap myNumber into myName & vice versa.
var myNumber = 42;
var myName = "Diamond";

var swap = myNumber;
myNumber = myName;
myName = swap; 
console.log(myName);
console.log(myNumber);

//Print integers from -52 to 1066 using a FOR loop.

for (var num = -52 ; num <= 1066 ; num++  ){
    console.log(num)
}

//Create beCheerful(). Within it, console.log string "good morning!" Call it 98 times.

function beCheerful (){
    console.log("good morning!")
}

for (var num = 1 ; num <= 98 ; num++  ){
    beCheerful()
}

//Using FOR, print multiples of 3 from -300 to 0. Skip -3 and -6.

for (var num = -300; num <= 0; num++){

	if(num == -3)
    {
        continue; 
    }
    else if (num == -6)
    {
        continue; 
    }
    
    var index = num *3;
    console.log(index);
}

//Print integers from 2000 to 5280, using a WHILE.

var num = 2000;

while(num <= 5280) {

    console.log(num);
    num++

}

//If 2 given numbers represent your birth month and day in either order,
// log "How did you know?", else log "Just another day...." 

function birthday(bday, bMonth)
{
    if (bday == 5 || bMonth == 9)
    {
        console.log("How did you know?")
    }
    else 
    {
        console.log("Just another day....")
    }

}

birthday(5, 9);
birthday(3, 6);

//Write a function that determines whether a given year is a leap year. 
//If a year is divisible by four, it is a leap year, 
//unless it is divisible by 100. However, if it is divisible by 400, then it is.

function leapYear(year)
{
    if(year % 4 == 0)
    {
        if(year % 100 == 0)
        {
            if (year % 400 == 0)
            {
                console.log("It is a leap year!") 
            }
            else
            {
                console.log("It is a not a leap year")
            }
        }
        else
        {
            console.log("It is a leap year!") 
        }
    }
}

leapYear(4000);

//Print all integer multiples of 5, from 512 to 4096. Afterward, also log how many there were.
for (var num = 512; num <= 4096; num++){

    var index = num *5;
    console.log(index);
}

//Print multiples of 6 up to 60,000, using a WHILE.
var num = 0;
while (num <= 60000){
    var index = num *6;
    console.log(index);
    num++
}

//Print integers 1 to 100. If divisible by 5, print "Coding" instead. If by 10, also print " Dojo".
for(var i = 1; i <= 100; i++)
{
    if(i % 5 == 0)
    {
        console.log("Coding");
        if(i % 10 == 0)
        {
            console.log("Dojo");
        }
    }
    else
    {
        console.log(i);
    }
    
}

//Your function will be given an input parameter incoming. Please console.log this value.
function message(incoming){
        console.log(incoming);
}

message("Hello World!");

//Add odd integers from -300,000 to 300,000, and console.log the final sum. Is there a shortcut?
var sum = 0;
for (var i = -300000; i <= 300000; i++  )
{
    if (i % 2 !==0)
    {
        sum += i
    }
    
}

console.log(sum)

//Log positive numbers starting at 2016, counting down by fours (exclude 0), without a FOR loop
function countdown(num){

    while(num > 1)
{
    console.log(num);
    num = num - 4;
}

}

countdown(2016);

//Based on earlier “Countdown by Fours”, given lowNum, highNum, mult, print multiples 
//of mult from highNum down to lowNum, using a
// FOR. For (2,9,3), print 9 6 3 (on successive lines).

function countMult(lowNum, highNum, mult)
{
    for(highNum; lowNum <= highNum; highNum--){

        if(highNum % mult == 0){
            console.log(highNum);
        }

    }
}

countMult(2,9,3);

//This is based on “Flexible Countdown”. The parameter names are not as helpful, 
//but the problem is essentially identical; don’t be thrown off! 
//Given 4 parameters (param1,param2,param3,param4), print the multiples of param1, 
//starting at param2 and extending to param3. One exception: if a multiple is equal to param4, 
//then skip (don’t print) it. Do this using a WHILE. Given (3,5,17,9), 
//print 6,12,15 (which are all of the multiples of 3 between 5 and 17, and excluding the value 9).

function finalCountDown(param1, param2, param3, param4)
{
    while(param2 < param3)
    {
        param2 = param2 +1 
        if(param2 % param1 == 0){
            if(param2 == param4)
            {
                continue;
            }
            console.log(param2);
        }

    }
}

finalCountDown(3,5,17,9);
