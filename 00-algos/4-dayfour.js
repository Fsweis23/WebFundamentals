function greetSean(){
    //inside the body of the function
    console.log("hello Sean!");
}

//invoking (or calling/executing) the function greeSomeone
//greetSean();



function greetSomeone(){ //person_name is a PARAMETER. Parameter is a placeholder variable for any data taht the function needs to run
    console.log("Hello " + person_name + "!");
}



// greetSomeone("Colin"); //the info that we feed to the function when we call the function-> this is called an ARGUMENT
// greetSomeone("Lazaro");
// greetSomeone("Robert");
// greetSomeone("Sean");



var x = 5;

function setX(newValue) {
    x = newValue;
}


// console.log(x);
// setX(15);
// console.log(x);


//function addNums(num1, num2){
    //console.log(num1+num2); //console.log just prints something to the console/terminal

    //return num1 + num2; //return outputs (or give us back) some data. It will also exit the function after the return statement

    //console.log("I am after the return");
//}


//let newNum = addNums(5,2) + 100

//console.log('newNum is this' + newNum)

//THE VALUE OF A FUNCTION CALL IS WHATEVER THAT FUNCTION CALL RETURNS!!!




function isPal(arr) { //function called isPal which will accept an array as an input (arr is the parameter)
    for(var left=0; left<arr.length/2; left++) { //keep running for loop as long as left is < 2.5
        var right = arr.length-1-left; //calculate the opposite index
        if(arr[left] != arr[right]) { //if the corresponding opposite calues are not equal, its not a palindrome
            return "Not a pal-indrome!";
        }
    }
    return "Pal-indrome!";
}

var result1 = isPal( [1, 1, 2, 2, 1] );
//                    0  1  2  3  4
console.log(result1);

// var result2 = isPal( [3, 2, 1, 1, 2, 3] );
// console.log(result2);
