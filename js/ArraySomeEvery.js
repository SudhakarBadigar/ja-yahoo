var ages=[20,22,24,27,30,33,35,40];
console.log(ages);
var b = ages.some(checkAdult);
console.log(b);
function checkAdult(age){
    return age>=38;
}

console.log("......................");
var emp=[22,24,26,29,30,32]
console.log(emp);
var Eage = emp.every(checkA);
console.log(Eage);
function checkA(check){
    return check <= 33;

}