fetch("words.json")
.then(data => data.json())
.then(json => {

  console.log(json);

  var sorted = json.sort((a,b) =>  a.numVal[0] - b.numVal[0]);
  sorted.forEach(entry =>{
    console.log(entry.entry+", "+entry.speechPart.key)
  })
})
