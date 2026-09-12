fetch("words.json")
.then(data => data.json())
.then(json => {

  // console.log(json.words);

  var sorted = json.words.sort((a,b) =>  a.numVal[0] - b.numVal[0]);
  for (var i = 0; i < 35; i++){
    var table = document.getElementById(String(i));
    sorted.forEach(entry =>{
      // console.log(entry.entry+", "+entry.speechPart.key)
      if (entry.numVal[0] == i){
        table.innerHTML += "<td class='entry'>"+entry.entry+"</td>";
      }
    })
  }
})
