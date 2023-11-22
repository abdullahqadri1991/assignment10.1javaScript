// Question # 1
document.write("<h1>Question # 1</h1>")

var emtyArr = [ [], [] ,[] ,[] ]
document.write(emtyArr)


// Question # 2
document.write("<h1>Question # 2</h1>")

var emtyArr = [ ["0123"], ["1012"] ,["2101"]  ]
document.write(emtyArr[0] + "<br>")
document.write(emtyArr[1] + "<br>")
document.write(emtyArr[2] + "<br>")


// Question # 3 
document.write("<h1>Question # 3</h1>")

for (i = 1 ; i <= 10 ; i++)

document.write(i + "<br>")


// Question # 4
document.write("<h1>Question # 4</h1>")

var tableNumber = prompt("Enter a Number for multiplication table");
var startingNumber = prompt("enter start table number");
var endingNumber = prompt("Enter lenght for multiplication table Number");

for(var i = startingNumber ; i <= endingNumber ; i++ ){
   document.write(tableNumber + "x" + i+ "=" + tableNumber * i + "<br>");
}


// Question # 5
document.write("<h1>Question # 5</h1>")

var fruits = ["apple", "banana", "mango", "orange", "strawberry"]
    
document.write(fruits [0] + "<br>")
document.write(fruits [1] + "<br>")
document.write(fruits [2] + "<br>")
document.write(fruits [3] + "<br>")
document.write(fruits [4] + "<br>" + "<br>")


// // Question # 6 
document.write("<h1>Question # 6</h1>")



// // Question # 7 
document.write("<h1>Question # 7</h1>")

var bakkeryItems = ["cake", "apple pie", "cookie", "chips", "patties"]
var useritem = prompt(`Welcome to A bakery. What do you want to buy?`)
var flag = false
for ( var a = 0; a < bakkeryItems.length; a++){
    if (useritem==bakkeryItems[a]) {
        flag = true
        alert (`${useritem} is available at index ${bakkeryItems.indexOf(useritem)} in our bakery.`)
        break
    }
}
    if (flag==false) {
        alert (`We are sorry. ${useritem} is not availale in our bakery.`)
    }



// // Question # 8 
document.write("<h1>Question # 8 </h1>")

var numbers = [24, 53, 78, 91, 12]
document.write ("Array Item:" +" "," " +  numbers + "<br>")

if (numbers[0]>numbers[1] && numbers[0]>numbers[2] && numbers[0]>numbers[3] && numbers[0]>numbers[4]) {
   document.write (`The largest number is: ${numbers[0]}`)
}
else if (numbers[1]>numbers[0] && numbers[1]>numbers[2] && numbers[1]>numbers[3] && numbers[1]>numbers[4]) {
   document.write (`The largest number is: ${numbers[1]}`)
}
else if (numbers[2]>numbers[0] && numbers[2]>numbers[1] && numbers[2]>numbers[3] && numbers[2]>numbers[4]) {
   document.write (`The largest number is: ${numbers[2]}`)
}
else if (numbers[3]>numbers[0] && numbers[3]>numbers[2] && numbers[3]>numbers[1] && numbers[3]>numbers[4]) {
   document.write (`The largest number is: ${numbers[3]}`)
}
else if (numbers[4]>numbers[0] && numbers[4]>numbers[2] && numbers[4]>numbers[3] && numbers[4]>numbers[1]) {
   document.write (`The largest number is: ${numbers[4]}`)
}

// // Question # 9 
document.write("<h1>Question # 9</h1>")

var numbers = [24, 53, 78, 91, 12]
document.write ("Array Item:" +" "," " +  numbers + "<br>")


if (numbers[0]<numbers[1] && numbers[0]<numbers[2] && numbers[0]<numbers[3] && numbers[0]<numbers[4]) {
   document.write (`The smallest number is: ${numbers[0]}`)
}
if (numbers[0]<numbers[1] && numbers[0]<numbers[2] && numbers[0]<numbers[3] && numbers[0]<numbers[4]) {
   document.write (`The smallest number is: ${numbers[0]}`)
}
else if (numbers[1]<numbers[0] && numbers[1]<numbers[2] && numbers[1]<numbers[3] && numbers[1]<numbers[4]) {
   document.write (`The smallest number is: ${numbers[1]}`)
}
else if (numbers[2]<numbers[0] && numbers[2]<numbers[1] && numbers[2]<numbers[3] && numbers[2]<numbers[4]) {
   document.write (`The smallest number is: ${numbers[2]}`)
}
else if (numbers[3]<numbers[0] && numbers[3]<numbers[2] && numbers[3]<numbers[1] && numbers[3]<numbers[4]) {
   document.write (`The smallest number is: ${numbers[3]}`)
}
else if (numbers[4]<numbers[0] && numbers[4]<numbers[2] && numbers[4]<numbers[3] && numbers[4]<numbers[1]) {
   document.write (`The smallest number is: ${numbers[4]}`)
}



// // Question # 10 
document.write("<h1>Question # 10</h1>")

 for (var i = 5 ;i <= 100; i+=5){
   document.write(i + " ")
}

