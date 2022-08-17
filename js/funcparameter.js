function gender(a,b,c,d){
    console.log(a+b+c+d);
}
gender(60,20,40,10);
gender(100,20,3,0);
gender(100,30,2,4);
gender(100,40,3);

function emp(fname,lname){
    console.log("Hello " +fname+ " " +lname);
}
emp("ram","gopal");
console.log(".....................................");
function fullname(fname="sudhakar",lname=""){
    var n = (fname + " - " + lname);
    return n;
}
var fn = fullname("ram","gopala");
console.log(fn);