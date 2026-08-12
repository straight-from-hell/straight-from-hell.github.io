// get the <p> text, split at slashes, create tables
var list = document.getElementById("list");
var start = 0;
var end = 0;
var loopSize = (list.innerHTML.match(new RegExp("<p>", "g")) || []).length;
var lastIndex = 0;

// console.log((list.innerHTML.match(new RegExp("<p>", "g")) || []).length);

for (var j = 0; j < loopSize; j++){
  start = list.innerHTML.indexOf("<p>");
  end = list.innerHTML.indexOf("</p>");
  
  for (var i = start; i < end; i++){
    console.log(list[i]);
    if (list.innerHTML[i] == "/"){
      console.log(i);
    }
  }
}
