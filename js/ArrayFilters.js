var a = [10,18,20,30,44,32,34,9];
console.log(a);
var b = a.filter(checkAvailability);
console.log(b);
function checkAvailability(age){
    return age<=20;
}
