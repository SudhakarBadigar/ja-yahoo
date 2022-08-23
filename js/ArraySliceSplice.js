// slice method 
var fname =["sachin","vinod","Bret","saurav","tendulkar","kambli","Lee","ganguly","dravid"];
console.log(fname.slice(0,3));
console.log(fname.slice(0,2));
console.log(fname.slice(2));
console.log(fname.slice(-2));//negative indexes starts from last like -4 -3 -2 -1 
console.log(fname.slice(-4,-2));
console.log("..................");
 
//splice method syntax: filename.splice(index,how many to delete,"new value");
var lname = ["lara","rampaul","pointing","donald","polock","virat","rohit"];
console.log(lname);
console.log(lname.splice(2,0,"ricky"));

