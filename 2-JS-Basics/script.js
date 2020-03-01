/*Lecture : Variables1;


//Dynamic Typing :JS selfidentifying dataType nature 
//alert();
//console.log();
//document.getElementById("").innerHTml=varName;




var name = "arun kumar",
test ;   //this will show undefined;can define variable in next line
console.log(test);
 //alert(name);


var lastName = 'kumar';
 console.log(lastName);

var age = 22;
 console.log(age);
 

 var fullAge = true;
 console.log(fullAge);

 var gender = "male";
console.log(gender);

document.getElementById("demo").innerHTML=fullAge;
*/






//Lecture : Variables2;


//TypeMutation & type coercion:automatic changes the type of varriable from number to string through ddynamic typing
 


var name = 'Arun' ,lname = 'Kumar',
 age = 22;
 console.log(name +' '+ lname +'' + age);
 //alert(name+ "" +lname +""+age);
 age = "twenty two"; //type changed
 console.log(name+lname+age);

 var id,password;
id = prompt("Enter the id!");
password = prompt("Enter the password!");
console.log('Your ID is :'+ id+"\nYour Password is :" +password);