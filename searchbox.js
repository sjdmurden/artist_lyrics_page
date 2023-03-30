
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
  'Langundo' : '2_langundo.html',
  'Make You Pay' : '2_myp.html',
  'Rivers' : '2_rivers.html',
  'Holy City' : '2_holycity.html',
  'Peacemaker' : '2_peacemaker.html',
  'The Wire' : '2_thewire.html',
  'Fortune Favours the Brave' : '2_fftb.html',
  'The Prince' : '2_theprince.html',
  'Precious Stone' : '2_ps.html',
  'In the Zone' : '2_itz.html',
  "Let's Get Rocked" : '2_lgr.html',
  'More or Less' : '2_mol.html',
  'Prologue' : '3_prologue.html',
  'Between the Eyes' : '3_bte.html',
  'Iron Cross' : '3_ironcross.html',
  'Otherside' : '3_otherside.html',
  'Take It Or Leave It' : '3_tioli.html',
  'Peace of Mind' : '3_pom.html',
  'Bring the Rain' : '3_btr.html',
  'Fading Before the Sun' : '3_fbts.html',
  'Two Worlds' : '3_twoworlds.html',
  'Believe' : '3_believe.html',
  'Aching Hearts' : '3_achinghearts.html',
  'New Dawn' : '3_newdawn.html',
  'Green Eyes' : '4_greeneyes.html',
  'Wake Up' : '4_wakeup.html',
  'One Track Mind' : '4_otm.html',
  'How Many Times' : '4_hmt.html',
  'Fight the Fire' : '4_ftf.html',
  'On the Run' : '4_otr.html',
  'Circles' : '4_circles.html',
  'Fade Out' : '4_fadeout.html',
  "I'm Not the Only One" : '4_intoo.html',
  'Deadliest Sin' : '4_deadliest.html',
  "I Didn't Know" : '4_idk.html',
  'The Cure' : '4_thecure.html',
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







/* PREVIOUS CODE
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


