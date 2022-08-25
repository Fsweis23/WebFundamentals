var fruit1 = "apples";
var fruit2 = "oranges";


// one way to swap is using a temp variable

// var temp = fruit2 // saving fruit2 into a temp variable so we don't lose oranges
// fruit2 = fruit1;
// fruit1 = temp;


// destructure swap
[fruit1, fruit2] = [fruit2, fruit1]


// console.log("fruit 1 is:", fruit1);
// console.log("fruit 2 is:", fruit2)


// for(var i = 0; i<=12; i++){
//     console.log(i)
// }

// console.log(i)

// let i = 0;
// while(i<=12){
//     console.log(i);
//     i++;
// }



// var start = 0;
// var end = 12;

// while(start < end) {
//     console.log("start: " + start + ", end: " + end);
//     start += 2;
//     end -=2;
// }

let topArtists = ["Nipsey Hussle", "Drake", "Lupe", "Ray Charles", "Sam Cooke", "Elvis", "Red Hot Chili Peppers"]
//                    0              1         2            3           4           5           6


//updatng topArtists at index 3 to equal "Jamie Fox";
// topArtists[3] = "jamie Fox";



function reverseArray(arr){
    //left = 0
var left = 0;
//right = last index of the array --> calculated by doing the array.length -1
var right = arr.length -1
//while left is less than right do this:
while(left<right){
    console.log("in while loop");
    //0 swap with 6
    //1 swap with 5
    //2 swap with 4
    (arr[left], arr[right]) = [arr[right], arr[left]]; //swap index left with index right
    left++;
    right--;
}

console.log(topArtists)
}


reverseArray(topArtists);
reverseArray([1,2,3,4,5,6,7]);




// var temperature = 60 // let's assume this is degrees Fahrenheight
// var isRaining = false;

// if(temperature >= 50 && lisRaining) {
//     console.log("This is a good day to go for a walk!");
// }



//if(true && true)



//the module operator (%) will give us the remainder of diving two numbers together

for(let i = 1; i<100; i++){
    //if the number (i) is divisible by 7, print "seventh heaven" INSTEAD of the number
    if(i%7 ===0){
        console.log("seventh heaven---> getting family fomo");
    }else{
        //OTHERWISE print the number
        console.log(i)
    }
}


