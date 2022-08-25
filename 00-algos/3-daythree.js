var favFoods = ("Calamari", "Pho", "Pizza", "Sushi", "Medium-rare steak", "Tacos", "Korean BBQ", "Chipotle"); //elements are the variables in the array
//                  0         1       2       3             4                5          6             7


//print each and every value in this array of favFoods

// for(var i = 0; i< favFoods.length; i++){
    //if the current food item (favFoods[i]) is Sushi, then print "inflation doe". Otherwise, you can print the food item
//    if(favFoods[i] == "Sushi" ){
//        console.log("Inflation doe for " + favFoods[i])
//    }else if(favFoods[i] == "Chipotle"){
//        console.log("Great deal for that " + favFoods[i])
//    }
//    else{
//        console.log(favFoods[i]);
//    }
// }



// var isSunny = true;
// var temperature = 45; // let's assume degrees Fahrenheit
// var isRaining = false;
// var whatToBring = "I should bring: ";

// (isSunny == true) {
//     whatToBring = whatToBring + "sunglasses, ";
//    whatToBring += "sunglasses, ";
// }
// if(temperature < 50) {
    whatToBring += "a coat, ";
// }
// if(isRaining == true) {
//    whatToBring += "an umbrella, ";
// }

// whatToBring += "and a smile!";

// console.log(whatToBring);



var countPositives = 0;
var numbers = [3, 4, -2, 7, 16, -8, 0];
//             0  1  2   3  4   5   6


for(var i = 0; i<numbers.length; i++){ // loop through every index starting at index 0 until the last index in the numbers array
    if(numbers[i] > 0){ //if the current element at the current index (numbers[1]) is greater than 0 -> this means its positive
        countPositives += 1; //increases the count of positives
    }
}

console.log("there are " + countPositives + " positive values");