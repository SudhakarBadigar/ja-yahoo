var ary=new Array();
for(var g=0;g<=ary.length-1;g++){
    ary[g] = prompt("enter the value");
}

function data(){
let rows = "";
for(pl of players){
    rows = rows + `<tr>
            <td>${pl.Name}</td>
            <td>${pl.Role}</td>
            <td>${pl.Age}</td>
            </tr>`
}

}