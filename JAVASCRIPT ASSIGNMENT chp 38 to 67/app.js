//  Assignment # 38-44



// Write a custom function power ( a, b ), to calculate the value of
// a raised to b.

// function power(a, b){
//  var result = 1;
// for(let i = b; i>=1; i--){
// Result=result*b;
// }

// Result=result*a;
// }


// 2. Any year is entered through the keyboard. Write a function to
// determine whether the year is a leap year or not.
// Leap years ..., 2012, 2016, 2020, …

// function leapyear() {
//     var year =+prompt("Enter year?");
//         if (year%4 ===0)
//         {
//             alert("Leap year")
//         }
//             else
//             {
//             alert("Not leap year")
//             }
//      }

// 3. If the lengths of the sides of a triangle are denoted by a, b, and
// c, then area of triangle is given by
// area = S(S − a)(S − b)(S − c)
// where, S = ( a + b + c ) / 2
// Calculate area of triangle using 2 functions

 
//JS Code

// function TriangleArea() {
//     var a = Number(document.getElementById("a").value);
//     var b = Number(document.getElementById("b").value);
//     var c = Number(document.getElementById("c").value);
//     var S=CalculateS(a,b,c);
//     var area = S*(S - a)*(S - b)*(S - c);
//     document.getElementById("areaResult").innerHTML ="Area of triangle: " + area ;
// }
// function CalculateS(a,b,c) {
//     var s = (a+b+c) / 2;    
//     return s;
// } 


// 4. Write a function that receives marks received by a student in 3
// subjects and returns the average and percentage of these
// marks. there should be 3 functions one is the mainFunction
// and other are for average and percentage. Call those functions
// from mainFunction and display result in mainFunction.

// var a = +prompt("Enter your marks in english out of 50");
// var b = +prompt("Enter your marks in maths out of 50");
// var c = +prompt("Enter your marks in science out of 50");
// var total = a+b+c; 

// function average(){
//     var ave = total/3
//     alert ("your average marks is " + ave)
// }
// function percentage(){
// var per = (total/150)*100 
// alert ("your percentage is " + per + "%")
// }
// function main(){
// percentage()
// average()
// }
// main()


// 5. You have learned the function indexOf. Code your own custom
// function that will perform the same functionality. You can code
// for single character as of now.

// var a="Hamza"
// var b="h"
// function find(){
// for(var i=0;i<a.length;i++){
// 	if (a[i]==b) {
// 		alert("The Index of "+b+" is "+i)
// 	}
// }
// }
// find()

// 6. Write a function to delete all vowels from a sentence. Assume
// that the sentence is not more than 25 characters long.

// var a="Hello World"
// function remove(){
// 	var b=a.replace(/[aeiou]/gi,"")
// 	document.write(b)
// }
// remove()

// 7. Write a function with switch statement to count the number of
// occurrences of any two vowels in succession in a line of text.
// // For example, in the sentence
// “Pleases read this application and give me gratuity”
// Such occurrences are ea, ea, ui.

// function vowel(){
   // 	var send="Pleases read this application and give me gratuity"
   // 	var find =0;
   // 	    switch (send) {
   //         case 'a':
   //             find++;
   //         case 'A':
   //             find++
   //         case 'e':
   //         case 'E':
   //         case 'i':
   //         case 'I':
   //         case 'o':
   //         case 'O':
   //         case 'u':
   //         case 'U':
   //             return 1;
   //         default:
   //             return 0;
   //     }
   // }
   // document.write(vowel())

// 8. The distance between two cities (in km.) is input through the
// keyboard. Write four functions to convert and print this
// distance in meters, feet, inches and centimeters.

// NOT DONE

// 9. Write a program to calculate overtime pay of employees.
// Overtime is paid at the rate of Rs. 12.00 per hour for every hour
// worked above 40 hours. Assume that employees do not work
// for fractional part of an hour.

// var a = +prompt('Overtime hours')
     // function overtime(){
     // 	return a*12
     // }       
     //  document.write('Your over time pay is ' + overtime())

// 10. A cashier has currency notes of denominations 10, 50 and 100. 
// If the amount to be withdrawn is input through the
// keyboard in hundreds, find the total number of currency notes
// of each denomination the cashier will have to give to the
// withdrawer.

// var a=+prompt("Enter amount to withdraw:")
// var b=a/100
// var c=(a%100)/50
// var d=((a%100)%50)/10
// var e=Math.floor(b)
// var f=Math.floor(c)
// var g=Math.floor(d)
// document.write("You will have "+e+" notes of 100 and "+f+" notes of 50 and "+g+" notes of 10")


// Assignment # 43-48

// 1. Show an alert box on click on a link.

// var a="Welcome"
// function hello() {
// 	alert(a)
// }

// 2. Display some Mobile images in browser. On click on an
// image Show the message in alert to user.

// var a="Thanks for purchasing a phone from us"
// function foo() {
// 	alert(a)
// }

// 3. Display 10 student records in table and each row should contain a delete
// button. If you click on a button to delete a record, entire row should be
// deleted. 

// NOT DONE


// 4. Display an image in browser. Change the picture on mouseover and set the
// first picture on mouseout.

// function changeimg1(){
// 	var a=document.getElementById('imgchng')
// 	a.src='https://cdn.shopify.com/s/files/1/0075/6036/4129/products/c87dfdc9754c943cc0aa5264317c3141_700x.jpg?v=1561107200'
// }
// function changeimg2(){
// 	var a=document.getElementById('imgchng')
// 	a.src='https://cdn.shopify.com/s/files/1/0075/6036/4129/products/9_ee62cfbf-0c91-43c5-9f93-71804adc5ed3_700x.jpg?v=1553264641'
// }

// 5. Show a counter in browser. Counter should increase on click on increase
// button and decrease on click on decrease button. And show updated counter
// value in browser.

// var num=0
// function increase(){
// 	var a=document.getElementById('0')
// 	num++
// 	a.innerHTML=num
// }
// function decrease(){
// 	var a=document.getElementById('0')
// 	num--
// 	a.innerHTML=num
// }

                 //  Assignment # 49-52

 // 1. Create a signup form and display form data in your web
// page on submission.

// function signup(){
// 	var a=document.getElementById('name').value
// 	var b=document.getElementById('email').value
// 	var c=document.getElementById('cn').value
// 	var d=document.getElementById('pass').value
// 	document.write("<h4>Name:</h4> "+a+"<br>"+"<h4>Email:</h4> "+b+"<br>"+"<h4>Contact Number</h4> "+c+"<br>"+"<h4>Password:</h4> "+d)
// }

                 // 2. Suppose in your webpage there is content area in which
                    // you have entered your item details, but user can only see
                    // some details on first look. When user clicks on “Read
                    // more” button, full detail of that particular item will be
                    // displayed.

//  var a='Dummy text is text that is used in the publishing industry or by web designers to occupy the space which will later be filled with real content. This is required when, for example, the final text is not yet available. Dummy text is also known as fill text'
//  function readmore() {
//  	document.getElementById('lorem').innerHTML=a
//  }

                    // 3. In previous assignment you have created a tabular data
                    // using javascript. Let’s modify that. Create a form which
                    // takes student’s details and show each student detail in
                    // table. Each row of table must contain a delete button and
                    // an edit button. On click on delete button entire row should
                    // be deleted. On click on edit button, a hidden form will
                    // appear with the values of that row.               


                  //   NOT DONE

                  // Assignment # 58-67

                  // Task 1
   // i)
// var a=document.getElementById('main-content')
// // ii)
// var a=document.getElementById('main-content')
// console.log(a.childNodes)
// // iii)
// var a=document.getElementsByClassName('hello')
// for(var i=0;i<a.length;i++){
// 	var b=a[i]
// 	console.log(b.innerHTML)
// }
// // iv)
// var a=document.getElementById('first-name').value='Hamza'
// // v)
//  var a=document.getElementById('last-name').value='Ali'
//  var a=document.getElementById('email').value='hamzaalii7865@outlook.com'


// TASK 2

// NOT DONE

