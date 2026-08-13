// get the <p> text, split at slashes, create tables
var list = document.getElementById("list");
var start = 0;
var end = 0;
var loopSize = (list.innerHTML.match(new RegExp("<p>", "g")) || []).length;
var lastIndex = 0;

// console.log((list.innerHTML.match(new RegExp("<p>", "g")) || []).length);

for (var j = 0; j < loopSize; j++){
  // start = list.innerHTML.indexOf("<p>");
  // end = list.innerHTML.indexOf("</p>");

  list.innerHTML = list.innerHTML.replace("<p>", "<table><td>");
  start = list.innerHTML.indexOf("<td>") + 4;
  
  for (var i = start; i < end; i++){ // while loop ?
    console.log(list.innerHTML[i]);
    if (list.innerHTML[i] == "/"){
      // console.log(i);
      list.innerHTML = list.innerHTML.replace("/", "</td><td>");
      end = list.innerHTML.indexOf("</p>"); // or just change it here :/
    }
  }

  list.innerHTML = list.innerHTML.replace("</p>", "</td></table>");

  // end = list.innerHTML.indexOf("</p>");
}
