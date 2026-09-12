fetch("words.json")
.then(data => data.json())
.then(json => {

  // console.log(json.words);

  var sorted = json.words.sort((a,b) =>  a.numVal[0] - b.numVal[0]);
  for (var i = 0; i < 35; i++){
    var table = document.getElementById(String(i));

    for (var x = 0; x <= 3; x++){
      var sectionSort = sorted.sort((a,b) => a.numVal[x] - b.numVal[x]);
    }
    sectionSort.forEach(entry =>{
      if (entry.numVal[0] == i){
        table.innerHTML += "<td class='entry'>"+entry.entry+"</td>";
      }
    })
  }
})
