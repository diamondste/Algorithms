//Print 1-255
//Print all the integers from 1 to 255
function print1to255()
{
    for(var num = 1; num <= 255; num++)
    {
        console.log(num);
    }

}
//Print sum 0-255
//Print integers from 0 to 255, and with each integer print the sum so far.
function printSum0to255()
{
    var sum = 0;
    for(var num = 0; num <= 255; num++)
    {
        sum = sum + num;
    }
    console.log(sum);

}


//Find and Print Max
//Given an array, find and print its largest element.

function findMax (arr)
{
    var max = 0;
    for(var num = 0 ; num <= arr.length; num++)
    {
    
        if(arr[num] > max)
        {
            max = arr[num];
        }
    }
    console.log(max);
}

findMax([30,80,100]);

//Array with Odds
//Create an array with all the odd integers between 1 and 255 (inclusive).
function oddArray1to255()
{
    var newArr = [];
    for(var num = 1; num <= 255; num++)
    {
        if(num % 2 !== 0)
        {
            newArr.push(num);
        }
    }
    console.log(newArr);
}

//or

function oddArray1to255()
{
    var newArr = [];
    for(var num = 1; num <= 255; num += 2)
    {
            newArr.push(num);
        
    }
    console.log(newArr);
}

//Greater Than Y 
//Given an array and a value Y, count and print the number of array values greater than Y
function greaterThanY(arr, y)
{
    var sum = 0;
    for(var i = 0; i <= arr.length; i++)
    {
        if(arr[i] > y)
        {
            sum = sum + 1
        }
    }

    return sum;
}

//Max,Min, Average
//Given an array, print the max, min and average values for that array.

function MaxMinAvg(arr)
{
    var max = 0;
    var min = arr[0];
    var sum = 0;
    for(var num = 0; num < arr.length; num++)
    {
        sum = sum + arr[num];

        if (arr[num] > max)
        {
            max = arr[num];
        }
        else if(arr[num] < min)
        {
            min = arr[num];
        }
    }
    
    var avg = sum / arr.length;

    console.log("Max: " + max);
    console.log("Min: " + min);
    console.log("Avg: " + avg);
}
