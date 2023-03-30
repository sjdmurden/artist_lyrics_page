
/*
const songs = [
  { name: "Soldiers of Rock", url: "1_soldiers.html" },
  { name: "Dead From the Waist Down", url: "1_dftwd.html" },
  { name: "No Lies", url: "1_no_lies.html" },
  { name: "Massacre", url: "1_massacre.html" },
  { name: "Going Away", url: "1_going_away.html" },
  { name: "Weapon", url: "1_weapon.html" },
];

const inputBox = document.getElementById("input-box");
const resultsBox = document.querySelector(".result-box");

inputBox.addEventListener("keyup", () => {
  const inputValue = inputBox.value.toLowerCase().trim();
  const filteredSongs = songs.filter((song) =>
    song.name.toLowerCase().includes(inputValue)
  );
  const content = filteredSongs.map(
    (song) =>
      `<li><a href="${song.url}">${song.name}</a></li>`
  );
  resultsBox.innerHTML = `<ul>${content.join("")}</ul>`;
});
*/





// WORKING CHATGPT CODE!!!!!!
var dict ={
  'Soldiers of Rock' : '1_soldiers.html',
  'Dead From the Waist Down' : '1_dftwd.html',
  'No Lies' : '1_no_lies.html',
  'Massacre' : '1_massacre.html',
  'Going Away' : '1_going_away.html',
  'Weapon' : '1_weapon.html',
  'Touch of Death' : '1_tod.html',
  'Frustration' : '1_frustration.html',
  'Hold Me Down' : '1_hmd.html',
  'Revealing' : '1_revealing.html',
}

const resultsBox = document.querySelector(".result-box");
const inputBox = document.getElementById("input-box");

inputBox.onkeyup = function() {
  let results = [];
  let input = inputBox.value.toLowerCase();
  if (input.length) {
    results = Object.keys(dict).filter(function(key) {
      return key.toLowerCase().includes(input);
    });
  }
  display(results);
  if (!results.length) {
    resultsBox.innerHTML = '';
  }
};

function display(results) {
  const content = results.map(function(key) {
    return '<li onclick="selectInput(this)" data-href="' + dict[key] + '">' + key + '</li>';
  });
  resultsBox.innerHTML = '<ul>' + content.join('') + '</ul>';
}

function selectInput(list){
  const selectedSong = list.innerHTML;
  inputBox.value = selectedSong;
  resultsBox.innerHTML = '';
  window.location.href = dict[selectedSong];
}







/* MY CODE
let availableKeywords = [
  'Soldiers of Rock',
  'Dead From the Waist Down',
  'No Lies',
  'Massacre',
  'Going Away',
  'Weapon',
];

var dict ={
  'Soldiers of Rock' : <a href="1_soldiers.html"></a>,
  'Dead From the Waist Down' : <a href="1_dftwd.html"></a>,
  'No Lies' : <a href="1_no_lies.html"></a>,
  'Massacre' : <a href="1_massacre.html"></a>,
  'Going Away' : <a href="1_going_away.html"></a>,
  'Weapon' : <a href="1_weapon.html"></a>,
}

const resultsBox = document.querySelector(".result-box");
const inputBox = document.getElementById("input-box");
//the inputBox constant now has the value of what the user has 
//typed in the search box
inputBox.onkeyup = function(){
  let result = [];
  //the user's input will filter the availableKeywords and store them in the array
  let input = inputBox.value;
  if (input.length){
    result = availableKeywords.filter((keyword)=>{
      return keyword.toLowerCase().includes(input.toLowerCase());
    });
    console.log(result);
  }
  display(result);

  if (!result.length){
    resultsBox.innerHTML = '';
  }
}

function display(result){
  const content = result.map((list)=>{
    return "<li onclick=selectInput(this)>" + list + "</li>";
  });

  resultsBox.innerHTML = "<ul>" + content.join('') + "</ul>";
}

function selectInput(list){
  inputBox.value = list.innerHTML;
  resultsBox.innerHTML = '';
}

function searchSong(){
  
}
*/


