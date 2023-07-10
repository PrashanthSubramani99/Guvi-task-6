// fix 2
alert("I'm invoked!");

// fix 3
alert("I'm JavaScript!");
alert("Hello"); // this line is not having semicolon
alert(`World`);
alert(3 + 1 + 2); //

// fix 4
let admin = 9,
  fname = "Guvi";
lname = "geek";
admin = fname + " " + lname;
alert(admin); // "Guvi geek"

// fix 5
fname = "Guvi";
lname = "geek";
let name = fname + lname;
alert(`hello ${name}`);

// fix 6
let a = +prompt("First number?");
let b = +prompt("Second number?");
alert(a + b);

// fix 7
var c = 2 > 12;
// first the condition should be number and id the the 1st number is greater than 12 the code will diffused.
if (c) {
  console.log("Code is Blasted");
} else {
  console.log("Diffused");
}

// fix 8
let e = +prompt("Enter a number?");
if (e) {
  console.log("Success");
} else {
  console.log("OMG it works for any number inc 0");
}

// fix 9
let value = +prompt("How many runs you scored in this ball");
if (value === 4) {
  console.log("You hit a Four");
} else if (value === 6) {
  console.log("You hit a Six");
} else {
  console.log("I couldn't figure out");
}

// fix 10
let login = "Employee";
let message = login == "Employee" ? "Welcome Employee" : "No login";
console.log(message);

// fix 11
// You cant change the value of the msg
let msg;
if (null || 2 || undefined) {
  let msg = "welcome boss";
} else {
  let msg = "Go away";
}
console.log(message);

// fix 12
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
console.log(numsArr.join())


// fix 13
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
console.log(numsArr.reverse.join(" "));

// fix 14
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
console.log(numsArr.reverse().join(" "));

// fix 15
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
for (var i = 0; i <=numsArr.length; i++) {
 if(numsArr[i] %2 == 0 )
 {
    numsArr[i] = 'Even'
 }
}
console.log(numsArr);


// fix 16
aa = (f,s,t) => {
  console.log(f,s,t);
  if(f>s &&f>t){
  console.log(f)}
  else if(s>f && s>t){
  console.log(s)}
  else{
  console.log(t)}
 }
 aa(1,2,3);


//  fix 17
let n = [1,2,3];
console.log(add(n));
function add(n)
{
let sum = 10;
for(var i=0;i<n.length;i++){
 sum +=n[i]
 }
 return sum;
}

// fix 18
var arr =[9,8,5,6,4,3,2,1] ;
(function(arr) {
let sum = 10;
for(var i=0;i<arr.length;i++){
 sum +=arr[i]
 }
 console.log(sum);
})(arr);





