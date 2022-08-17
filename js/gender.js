var name1 = prompt("enter the name");
var gender =prompt("please mention your gender"); 

if(gender == male)
{
    document.getElementById("main").innerHTML.value = `("mr." +name1)`;
    //document.write("mr."+ name1);
}
else{
    document.getElementById("main").innerHTML.value = `("mrs."+name1)`;
    //document.write("mrs."+name1);
}