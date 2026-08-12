// get the <p> text, split at slashes, create tables
var list = document.getElementById("list");

console.log((list.innerHTML.match(new RegExp("<p>", "g")) || []).length);
