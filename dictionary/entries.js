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
        letterList.push(entry);
      }
    });

    section = section.sort((a,b) => a.numVal[1] - b.numVal[1]);

    section.forEach(entry => {
      table.innerHTML += "<td class='entry'>"+entry.entry+"</td>";
    });
    // var sectionSorted;

    // for (var x = 0; x <= 3; x++){
    //   sectionSort = sorted.sort((a,b) => a.numVal[x] - b.numVal[x]);
    // }
    // sectionSort.forEach(entry =>{ // just gotta figure out how to do the row thing
    //   if (entry.numVal[0] == i){
    //     table.innerHTML += "<td class='entry'>"+entry.entry+"</td>";
    //   }
    // })
  }
});
