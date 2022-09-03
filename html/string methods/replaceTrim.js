var movie = "the best movie i have ever seen is spiderman"
film = movie.replace("spiderman","Up");
console.log(film);
console.log("................");
var place = "     $%%^&&      Bangalore         has a lot of places to see near by.           ";
console.log(place);
console.log(place.trim());//removes blank space front and back
console.log(".............");
console.log(movie.charAt(1));//returns the letter that is in the given index
console.log(".................");
console.log(movie.charCodeAt(4));//returns tha Ascii value of the given index.
console.log(".....................");
console.log(String.fromCharCode(65));//returns the Ascii value of the index.
console.log("..................");
var a = "film";
var b = "city";
var studio = b.concat(" "+a);//first give which string ypou want first and then give concat and the second string that you want to concat
console.log(studio);
studio=a.concat( " "+b+ ", -----------"+ movie + ",...................."+place);
console.log(studio);
console.log("...................................");

