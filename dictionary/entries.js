fetch("words.json")
.then(data => data.json())
.then(json => {

  // console.log(json.words);

  var sorted = json.words.sort((a,b) =>  a.numVal[0] - b.numVal[0]);
  for (var i = 0; i < 35; i++){
    var table = document.getElementById(String(i));
    var section = [];

    sorted.forEach(entry => {
      if (entry.numVal[0] == i){
        section.push(entry);
      }
    });

    section = section.sort((a,b) => a.numVal[1] - b.numVal[1]);
    makeTable(section, table);

    // section.forEach(entry => {
    //   table.innerHTML += "<td class='entry'>"+entry.entry+"</td>";
    // });
    
  }
});

function makeTable(arr, place){
  var indexEntry = 0;
  var indexInfo = 0;

  while (indexInfo < arr.length){
    place.innerHTML += "<tr class='entry'>";
    for (var i = 0; i < 3; i++){
      place.innerHTML += "<td>"+arr[i].entry+"</td>";
      indexEntry++;
    }
    place.innerHTML += "</tr><tr>";
    for (var i = 0; i < 3; i++){
      place.innerHTML += "<td>"+arr[i].speechPart.key+". "+arr.desc+"</td>";
      indexInfo++;
    }
    place.innerHTML += "</tr>";
  }
}
