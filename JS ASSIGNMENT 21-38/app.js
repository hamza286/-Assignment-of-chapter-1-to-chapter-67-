// Chapter 21 to 25

// Q1 Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.

// TASK 1

// var firstname = prompt("Enter User First name");
// var lastname = prompt("Enter User Last name");
// var fullname = firstname + "" +lastname;
// document.write("<h1> Welcome " + fullname);

// Q2 Write a program to take a user input about his favorite
// mobile phone model. Find and display the length of user
// input in your browser

// TASK 2

// var mobile = prompt(" Enter your favorite mobile phone model")

// document.write("My faviourite phone is : " +mobile)
// document.write("<br> Length of string "+ mobile.length)

// Q3  Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser 


// TASK 3

// var word = "Pakistani";
    


//     document.write("<h1> String: "+word );
    

//     document.write("<br> Index of 'n': " + word.indexOf("n"))



// Q4 Write a program to find the last index of letter “l” in the
// word “Hello World” and display the result in your browser.

// TASK 4


// var word = "HELLO WORLD";
    


//     document.write("<h1> String: "+word );
    

//     document.write("<br> Last Index of 'l': " + word.lastIndexOf("L"))


// Q5 Write a program to find the character at 3rd index in the
// word “Pakistani” and display the result in your browser.


// TASK 5


// var word = "Pakistani";
    


//     document.write("<h1> String: " +word )
    

//     document.write("<br> Character at index 3: " + (word.charAt(5)))

// Q6 Q1 Write a program that takes two user inputs for first and
// // last name using prompt and merge them in a new variable
// // titled fullName. Greet the user using his full name.

// Repeat Q1 using string concat() method.

// TASK 6



    // var firstName=prompt("Enter First Name!");
    // var lastName = prompt("Enter Last Name!");
    // var fullName=firstName.concat(lastName);
    // document.write("<h1> Welcome " + fullName);

// Q7 Write a program to replace the “Hyder” to “Islam” in the
// word “Hyderabad” and display the result in your browser.

// TASK 7


// var city = "Hayderabad";

// var city = city.replace ("Hayderabad","Islamabad")
// document.write(" <h1> City: " + "Hayderabad")
// document.write(" <h1> <br> After Replacement: " + city)

// Q8 Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.
// var message = “Ali and Sami are best friends. They play cricket and
// football together.”;


// TASK 8


// var message = "Ali and Sami are best friends. They play cricket and football together.";
//     var replace = message.replace(/and/g, "&");
//     document.write("<h1> Actual string: " + message +"<br> After replacement: " + replace);

// agr apko global koi word change karna hai to // is ka andar apna word or phir jo replace
// karna hai woh word 

// Q9 Write a program that converts a string “472” to a number
// 472. Display the values & types in your browser

//  TASK 9

// var string = "472"
// var number = parseInt(string)

// document.write("<h1> Value: "+string + "<br> Type: string");
// document.write("<h1> <br> Value: "+ number + "<br> Type: number");

// Q10 Write a program that takes user input. Convert and
// show the input in capital letters.

//  TASK 10

// var userinput = "peanuts"
// userinput = userinput.toUpperCase();

// document.write("<h1> UserInput : peanuts" + "<br>");
// document.write("<h1> UpperCase :" + userinput);

// <---------------------------------------------------------------------------->

// Q11 Write a program that takes user input. Convert and
// show the input in title case

//   TASK 11

// var str=prompt("Enter any text!");
   
//     document.write("<h1> User input: " + str);

//     str = str.toLowerCase();   
//     str = str.split(' ');
 
//     for (var i = 0; i < str.length; i++) {
//       str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 

//     }
//     str.join(' '); 
    
    
//     document.write("<br>Title case: "+ str);
    
// 

// Q12 Write a program that converts the variable num to
// string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.

// TASK 12

// var number = 35.36 ;
// var firstnum = number.toString()
// var secnum=firstnum.slice(0,2)
// var thirdnum=firstnum.slice(3,5)
// document.write("Number:"+number+"<br>"+"Result:"+secnum+thirdnum)

//    Q13 Write a program to take user input and store username
//    in a variable. If the username contains any special symbol
//    among [@ . , !], prompt the user to enter a valid username.
//    For character codes of [@ .

    // TASK 13


    // var userName=prompt("Enter Username!");

    // var specialsymbol =0

    // for (var i=0; i<=userName.length; i++){
    //     if (userName[i] === '@' || userName[i] === '.' || userName[i] === ',' || userName[i] === '!')
    //         {
               
    //             specialsymbol = 1;
    //             break;
    //         }
    //     }
    // if (specialsymbol)
    // document.write("Please enter a valid username!");
    // else
    // document.write("Thank you! you entered a valid username");

//   Q14 You have an array
//   A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
//   Write a program to enable “search by user input” in an
//   array. After searching, prompt the user whether the given
//   item is found in the list or not.
//   Note: Perform case insensitive search. Whether the user
//   enters cookie, Cookie, COOKIE or coOkIE, program
//   should inform about its availability. Example:

    // TASK 14

//     var a =  ["cake", "apple pie", "cookie","chips", "patties"]
//     var order = prompt("Welcome to ABC Bakery. What do you want to order Sir/Ma'am?")
//     var  order = order.toLowerCase()
//     var found =0;
//     for(i=0; i<a.length;i++){

//         if (a[i]===order){

//         found=1;
//              break;
//         }
//     }
//     if (found){
//         alert(order+" is available at index " + (i+1) + " in our bakery")
           
//     } 
        
// else{
//     alert("We are sorry. "+ order +" is not available in our bakery.")
// }

// Q15 Write a program to take password as an input from
// user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII
// table at the end of this document.


// TASK 15

// var a=prompt("Enter your password:")
// var b = a.split(' ')
// for (var i=0;i<a.length;i++){
//     if(a.length>=6||a.length<6){
//     if(a.length<6){
//         alert("It must be 6 Character long")
//     }   
//     else if(a.slice(0,1)>=0){
//         alert("Must start with a letter")
//     } 
//     else if(a[i]>="a" ||a[i]>=0&& a[i]<="z"||a[i]>="A" && a[i]<="Z") {
//         alert("Valid password")
//     }
// }break
// }

// Q16 Write a program to convert the following string to an
// array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser.

// TASK 16

// var string = "University of Karachi"
// string = string.split('');
// for(var i =0; i<string.length; i++)
// document.write("<h1>" +string[i]+ "<br>")

// Q17 Write a program to display the last character of a user
// input.

// TASK 17

//  var user = "Pakistan"
//  document.write(" <h1> USER INPUT : " + user)
//  document.write("<br> <h1> LAST CHARACTER: "+ user[user.length-1])

// Q18 You have a string “The quick brown fox jumps over the
// lazy dog”. Write a program to count number of
// occurrences of word “the” in given string.

//TASK 18

// var a="The quick brown fox jumps over the lazy dog"
// document.write("<h1>" + "Text:"+a+"<br>"+"There are "+a.match(/the/gi).length+" occurence(s) of word 'the'")


// Chapter 26    to 30

// Q1 Write a program that takes a positive integer from user &
// display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

// TASK 1

// var user = prompt("Enter any positive integer?")
// document.write("<h1 number :" + user )
// document.write("<br> <h1> ROUND OFF VALUE " + Math.round(user))
// document.write("<br> <h1> Floor value " + Math.floor(user))
// document.write("<br> <h1> CEIL value " + Math.ceil(user))

// Q2 Write a program that takes a negative floating point
// number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

// TASK 2

// var user = prompt("Enter any negative integer?")
// document.write("<h1 number :" + user )
// document.write("<br> <h1> ROUND OFF VALUE " + Math.round(user))
// document.write("<br> <h1> Floor value " + Math.floor(user))
// document.write("<br> <h1> CEIL value " + Math.ceil(user))

// Q3 Write a program that displays the absolute value of a
// number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5

// TASK 3

// var user = prompt("Enter any  absolute value of a number")
//  document.write("<h1> The absolute value of " + user + " is " + Math.abs(user));

// Q4 Write a program that simulates a dice using random()
// method of JS Math class. Display the value of dice in your
// browser.:

// TASK 4

// var random = Math.floor((Math.random() * 6) + 1);
// document.write("<h1>" + "random dice value:"+random)

// Q5 Write a program that simulates a coin toss using random()
// method of JS Math class. Display the value of coin in your
// browser


// Task 5

// var a="Heads"
// var b="Tails"
// var c=Math.floor((Math.random() * 2) + 1);
// if(c==2){
// 	document.write(c+"<br>random coin value:"+a)
// }
// else if(c==1){
// 	document.write(c+"<br>random coin value:"+b)
// }



// Q6 Write a program that shows a random number between 1
// and 100 in your browser.

// TASK 6


// var number = Math.random();
//     var secnum = (number * 100) + 1; 
//     var thirdnum = Math.floor(secnum);
//     document.write("<h1> random number between 1 and 100: " +  thirdnum);

// Q7 Write a program that asks the user about his weight. Parse
// the user input and display his weight in your browser.
// Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms

// TASK 7

// var weight =prompt("Enter your weight in kilograms?");
//     var userweight = parseFloat(weight);
//     document.write("<h1> The weight of user is "+ userweight +" kilograms");
 
// Q8 Write a program that stores a random secret number from
// 1 to 10 in a variable. Ask the user to input a number
// between 1 and 10. If the user input equals the secret
// number, congratulate the user

// TASK 8

// var a = 7
// var b = +prompt("Enter a number between 1 and 10")

// if (a==b) {
// 	alert("Congrats!You chose the right number!")	
// }
// else {
// 	alert("Try again")	
// }

// Chapter 31to 34

// Q1 Write a program that displays current date and time in
// your browser.

// TASK 1


// var currentdate = new Date();
// document.write("<h1>" + currentdate)

// Q2 Write a program that alerts the current month in words.
// For example December

// TASK 2

// var MonthsNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// var rightNow= new Date();
// var Month= rightNow.getMonth()
// document.write("<h1> Current month: "+ MonthsNames[Month]);

// Q3 Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show
// Sun.

// TASK 3

    // var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    // var now = new Date();
    // var theDay = now.getDay();
    // var nameOfToday = dayNames[theDay];
    // document.write("<h1> Today is "+ nameOfToday);
    
//   Q4 Write a program that displays a message “It’s Fun day” if
//   its Saturday or Sunday today.

    // TASK 4

    // var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    // var now = new Date();
    // var theDay = now.getDay();
    // var nameOfToday = dayNames[theDay];
    // if (theDay === 0 || theDay === 6)
    //     document.write("<h1> its Fun Day ");
    // else 
    //     document.write("<h1> Its working Day ");

    // Q5 Write a program that shows the message “First fifteen
    // days of the month” if the date is less than 16th of the month
    // else shows “Last days of the month”.

// TASK 5

// var now = new Date();
//     var theDate = now.getDate();
//     if (theDate < 15 )
//         document.write("<h1> First fifteen days of the month.");
//     else 
//         document.write("<h1> Last days of the month ");
    
// Q6 Write a program that determines the minutes since
// midnight, Jan. 1, 1970 and assigns it to a variable that
// hasn't been declared beforehand. Use any variable you like
// to represent the Date object.

// TASK 6

// var a=new Date()
// var b=new Date('1970-01-02')
// var c=a.getTime();
// document.write("<h1>" + "Current Date:"+a+"<br>Elapsed milliseconds since January 1,1970:"+c+"<br>Elapsed minutes since January 1,1970:"+c/60000)

// Q7 Write a program that tests whether it's before noon and
// alert “Its AM” else “its PM”.

// TASK 7

// var now = new Date();
//     var theHours = now.getHours;
//     if (theHours >= 12 )
//         document.write("<h1> It's PM.");
//     else 
//         document.write("<h1> It's AM ");

//  Q8 Write a program that creates a Date object for the last day
//  of the last month of 2020 and assigns it to variable named
//  laterDate.

// TASK 8

// var laterDate = new Date("Dec 31, 2020");
//     document.write("<h1> Later date: " + laterDate)

// Q9 Create a date object of the starting date of this Ramadan
// and alert the number of days past since 1st Ramadan?
// Note: 1st Ramadan was on June 18, 2015

// TASK 9

// var a=new Date()
// var b=new Date("April 24,2020")
// var c=a.getTime()-b.getTime()
// var d = c/(1000*60*60*24)
// var e=Math.floor(d)
// document.write("<h1>" + e+" days have passed since 1st Ramadan,2020.")

// Q10 Write a program that displays in your browser the
// seconds that elapsed between the reference date and the
// beginning of 2015

// TASK 10

 var a=new Date("Jan 01 2015 00:00:00 GMT+0500(PKT)")
var b=new Date("Sat Dec 05 2015 22:50:16 GMT+0500(PKT)")
var c=b.getTime()-a.getTime()
var d=Math.floor(c/(1000*60))
document.write("<h1>" +"On reference date "+b+"<br>"+d+" seconds had passed since beginning of 2015 ")

// Q11 Create a Date object for the current date and time.
// Extract the hours, reset the date object an hour ahead and
// finally display the date object in your browser.

// TASK 11

// var today = new Date()
// var onehourago = new Date()
// onehourago.setHours(today.getHours() - 1);
//     document.write("<h1> Current date: " + today );
//     document.write("<br> 1 hour ago, it was " + onehourago);

// Q12 Write a program that creates a date object and show the
// date in an alert box that is reset to 100 years back?

//  TASK 12

// var today = new Date();
//     var hundredyearsago =  new Date();   
//     hundredyearsago.setFullYear(today.getFullYear() - 100);
//     alert("Current date: " + today + "\n100 years back, it was " + hundredyearsago);

// Q13 Write a program to ask the user about his age. Calculate
// and show his birth year in your browser.

// TASK 13

// var age = prompt("Enter your age");
//     var birthYear = new Date();
//     birthYear.setFullYear(birthYear.getFullYear() - age);

//     document.write("<h1> Your age is " + age );
//     document.write("<br> Your birth year is " + birthYear.getFullYear());

// Q14 Write a program to generate your K-Electric bill in your
// browser. All the amounts should be rounded off to 2
// decimal places. Display the following fields:
// a. Customer Name
// b. Current Month
// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date)
// Where,
// Net Amount Payable (within Due Date) = Number of units * Charges per unit
// & Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge

// TASK 14

// var monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
//     var name="ABC Customer";
//     var currentDate = new Date();
//     var month=currentDate.getMonth();
//     var consumedUnit=410;
//     var pricePerUnit=16;
//     var surcharge=350;
//     var netAmount=consumedUnit*pricePerUnit;
//     var grossAmount=netAmount+surcharge;

//     document.write("<h1> K-Electric Bill </h1>");
//     document.write("<h2> <br>  Customer Name: " + name);
//     document.write("<br> Month: " + monthName[month]);
//     document.write("<br> Number of units: " + consumedUnit);
//     document.write("<br> Charges per unit: " + pricePerUnit);
//     document.write("<br><br> Net Amount Payable (within Due Date): " + netAmount );
//     document.write("<br> Late payment surcharge: " + surcharge);
//     document.write("<br> Gross Amount Payable (after Due Date): " + grossAmount );

// Chapter 35 to 38

// Q1 Write a function that displays current date & time in your
// browser


// TASK 1

    // var now= new Date();
    // document.write("<h1>" + now);
    
//  Q2 Write a function that takes first & last name and then it
//  greets the user using his full name.

    // TASK 2
  
    //     var fullName=firstName+lastName;
    // document.write("<h1> Welcome " +fullName);
 
    // Q3 Write a function that adds two numbers (input by user)
    // and returns the sum of two numbers

    // TASK 3
//     var a =+prompt("Enter first number?");
//     var b = +prompt("Enter 2nd number?");
//     var c=0;
//     c=add(a,b);
//     document.write("<h1>Sum: " +c);

// function add(num1,num2){
//     return(num1 +num2);
// }

// Q4 Calculator:
// Write a function that takes three arguments num1, num2
// & operator & compute the desired operation. Return and
// show the desired result in your browser.

        // TASK 4

        // var a = + prompt("Enter first number");
        // var operator =prompt("Enter operator for operation");
        // var b = +prompt("Enter 2nd number");
        // var c  = 0;
        // c = calc(a,operator,b);
        // document.write("<h1> Result: " +c);

        // function calc(num1,operator, num2){
        //     switch(operator){
        //         case "+" :
        //             return(num1+num2);
        //             break;
        //         case "-" :
        //             return(num1-num2);
        //             break;
        //         case "*" :
        //             return(num1*num2);
        //             break;
        //         case "/" :
        //             return(num1/num2);
        //             break;
        //         case "%" :
        //             return(num1%num2*100);
        //             break;
        //         default :
        //             return("invalid");
        //     }
        // }

        // Q5 Write a function that squares its argument

        // // TASK 5
        // function square(number){
        //     return  number*number
        //   }
        //   document.write(square(5))

        // Q6 Write a function that computes factorial of a number.


        // TASK 6

    // NOT DONE

//    Q7 Write a function that take start and end number as inputs
// & display counting in your browser.

    // TASK 7

//     function counting(){
// 	var a=+prompt("Enter starting number:")
// 	var b=+prompt("Enter end number:")
// 	for(i=a;i<=b;i++){
// 		document.write(i+"<br>")
// 	}
// }
// counting()
    
// Q8  Write a nested function that computes hypotenuse of a
// right angle triangle.
// Hypotenuse2 = Base2 + Perpendicular2
// Take base and perpendicular as inputs.
// Outer function : calculateHypotenuse()
// Inner function: calculateSquare()

    
// Task 8
// function calculateHypotenuse(){
// 	function calculateSquare(b,p){
// 		var b=+prompt("Enter Base")
// 		var p=+prompt("Enter perpendicular")
// 		return b*b+p*p
// 		}return calculateSquare()
// 	}
// document.write("The hypotenuse is "+calculateHypotenuse())

// Q9 Write a function that calculates the area of a rectangle.
// A = width * height
// Pass width and height in following manner:
// i. Arguments as value
// ii. Arguments as variables

// Task 9

// NOT DONE

// Q10 Write a JavaScript function that checks whether a passed
// string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as
// forward, e.g., madam.

// Task No.10

// function palindrome(str) {
//     var lengths = str.length;
//     var mid = Math.floor(lengths/2);
//     for ( var i = 0; i < mid; i++ ) {
//         if (str[i] !== str[lengths - 1 - i]) {
//             return false;
//         }
//     }
//     return true;
// }

//     var str=prompt("Enter any string for Palindrome check?");
//     if (palindrome(str))
//         {
//             document.write("<h1> The string " + str +" is palindrome.")
//         }
//     else
//         document.write("<h1> The string " + str +" is not palindrome.")

// Q11 Write a JavaScript function that accepts a string as a
// parameter and converts the first letter of each word of the
// string in upper case.
// EXAMPLE STRING : 'the quick brown fox'
// EXPECTED OUTPUT : 'The Quick Brown Fox'

///-----Task No.11

// var a="the quick brown fox"
// function uppercase(){
// 	var b=a.split(" ")
// 	for(var i=0,x=b.length;i<x;i++){
// 		b[i]=b[i][0].toUpperCase()+b[i].substr(1)
// 	}
// 	return b.join(" ")
// }
// document.write("<h1>" + "EXAMPLE STRING :"+a+"<br>EXPECTED OUTPUT :"+uppercase(a))

// Q12 Write a JavaScript function that accepts a string as a
// parameter and find the longest word within the string.
// EXAMPLE STRING : 'Web Development Tutorial'
// EXPECTED OUTPUT : 'Development'

// TASK 12

// not done

