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

    var wordList = [];
    var keyList = [];
    var descList = [];
    section.forEach(entry => {
      wordList.push(entry.entry);
      keyList.push(entry.speechPart.key);
      descList.push(entry.desc);
    })
    
    makeTable(wordList, keyList, descList, table);

    // section.forEach(entry => {
    //   table.innerHTML += "<td class='entry'>"+entry.entry+"</td>";
    // });
    
  }
});

function makeTable(arrE, arrK, arrD, place){
  var indexEntry = 0;
  var indexInfo = 0;
  place.innerHTML += "<tbody>";

  while (indexInfo < arrE.length){
    place.innerHTML += "<tr class='entry'>";
    for (var i = indexEntry; i < 3+indexEntry; i++){
      place.innerHTML += "<td>"+arrE[i]+"</td>";
      indexEntry++;
      console.log(arrE[indexEntry]);
    }
    place.innerHTML += "</tr><tr>";
    for (var i = indexInfo; i < 3+indexInfo; i++){
      place.innerHTML += "<td>"+arrK[i]+". "+arrD[i]+"</td>";
      indexInfo++;
    }
    place.innerHTML += "</tr>";
  }

  place.innerHTML += "</tbody>";
}
