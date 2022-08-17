function sum(phy,che,mat,bio){
    var total = phy+che+mat+bio;
    return total;
}
function percentage(p){
    per= (p / 400) * 100;
    return per;
}
var marks = sum(67,98,77,83);
document.write("total marks = " + marks);
var percent = percentage(marks);
document.write("</br>");
document.write("Total percentage = " + percent);