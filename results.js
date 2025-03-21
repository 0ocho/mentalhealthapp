
let popup = document.getElementById('popup')
var elements = document.getElementsByClassName('btn');
var calBtns = document.getElementsByClassName('calBtns');
var outputTooth = document.getElementsByClassName('resToothBtn');
var colsmileys = document.querySelectorAll('.coloredsmileys');
 
function openPopup(){
 
  for(var i = 0; i < colsmileys.length; i++){
    colsmileys[i].style.visibility = "visible";}

  popup.classList.add('open-popup')
 
  for(var i = 0; i < colsmileys.length; i++){
    colsmileys[i].style.opacity = "0";
}
}
 
function closePopup(){
popup.classList.remove('open-popup');
 
for(var i = 0; i < colsmileys.length; i++){
    colsmileys[i].style.visibility = "hidden";
}
;
 
}
   
   
   
  let calbtns = document.getElementById('calbtns')
   
 
    function calDeac(){
 
      for(var i = 0; i < elements.length; i++){
        elements[i].style.visibility = "visible";
      }
     
      for(var i = 0; i < outputTooth.length; i++){
        outputTooth[i].style.visibility = "visible";
      }
   
      for(var i = 0; i < calBtns.length; i++){
        calBtns[i].style.visibility = "hidden";
      }
   
    }
 
 
function changeActiveButtonColor(smileyId) {
  if (activeButton) {
    let colorMap = {
      "colsmiley1": "#217cb6",  
      "colsmiley2": "#ef6e57",  
      "colsmiley3": "#e6d49f",  
      "colsmiley4": "#bacfb1",  
      "colsmiley5": "#7fab6c"  
    };
 
    let newColor = colorMap[smileyId];
    activeButton.style.backgroundColor = newColor;
  }
}
 
function visibility(exception) {
  let exceptionsmiley = document.getElementById(exception);
 
  for (var i = 0; i < colsmileys.length; i++) {
    colsmileys[i].style.opacity = "0";
  }
 
    exceptionsmiley.style.opacity = "1";

}
 
 
let eColors = {};  
let activeButton = null;

// Function um Farbe zu speichern und es auf den aktiven button zu sehen
function changeActiveButtonColor(smileyId) {
    if (activeButton) { 
      
        let colorMap = {
            "colsmiley1": "#217cb6",
            "colsmiley2": "#ef6e57",
            "colsmiley3": "#e6d49f",
            "colsmiley4": "#bacfb1",
            "colsmiley5": "#7fab6c"
        };

       
       let newColor = colorMap[smileyId];
        // Speichert die Farbe für den aktiven Button
        eColors[activeButton.id] = newColor;

        // Wende die Farbe an
        activeButton.style.backgroundColor = newColor;
    }
}

// Setzt den aktiven Button, aber behält gespeicherte Farben für andere Buttons bei
function setActiveButton(buttonId) {
    activeButton = document.getElementById(buttonId);

    // Falls eine Farbe bereits gespeichert wurde, stelle sie wieder her
    if (eColors[buttonId]) {
        activeButton.style.backgroundColor = eColors[buttonId];
    }
}

// Aktivierung hehe RESPAGE 1
document.getElementById("e1").addEventListener("click", function() {
    setActiveButton("e1");
});
document.getElementById("e2").addEventListener("click", function() {
    setActiveButton("e2");
});
document.getElementById("e3").addEventListener("click", function() {
    setActiveButton("e3");
});
document.getElementById("e4").addEventListener("click", function() {
    setActiveButton("e4");
});
document.getElementById("e5").addEventListener("click", function() {
    setActiveButton("e5");
});

// Aktivierung hehe RESPAGE 2
document.getElementById("e6").addEventListener("click", function() {
  setActiveButton("e6");
});
document.getElementById("e7").addEventListener("click", function() {
  setActiveButton("e7");
});
document.getElementById("e8").addEventListener("click", function() {
  setActiveButton("e8");
});
document.getElementById("e9").addEventListener("click", function() {
  setActiveButton("e9");
});
document.getElementById("e10").addEventListener("click", function() {
  setActiveButton("e10");
});
 
// Aktivierung hehe RESPAGE 3
document.getElementById("e11").addEventListener("click", function() {
  setActiveButton("e11");
});
document.getElementById("e12").addEventListener("click", function() {
  setActiveButton("e12");
});
document.getElementById("e13").addEventListener("click", function() {
  setActiveButton("e13");
});
document.getElementById("e14").addEventListener("click", function() {
  setActiveButton("e14");
});
document.getElementById("e15").addEventListener("click", function() {
  setActiveButton("e15");
});
 
// Aktivierung hehe RESPAGE 4
document.getElementById("e16").addEventListener("click", function() {
  setActiveButton("e16");
});
document.getElementById("e17").addEventListener("click", function() {
  setActiveButton("e17");
});
document.getElementById("e18").addEventListener("click", function() {
  setActiveButton("e18");
});
document.getElementById("e19").addEventListener("click", function() {
  setActiveButton("e19");
});
document.getElementById("e20").addEventListener("click", function() {
  setActiveButton("e20");
});
 
// Aktivierung hehe RESPAGE 5
document.getElementById("e21").addEventListener("click", function() {
  setActiveButton("e21");
});
document.getElementById("e22").addEventListener("click", function() {
  setActiveButton("e22");
});
document.getElementById("e23").addEventListener("click", function() {
  setActiveButton("e23");
});
document.getElementById("e24").addEventListener("click", function() {
  setActiveButton("e24");
});
document.getElementById("e25").addEventListener("click", function() {
  setActiveButton("e25");
});
 
// Aktivierung hehe RESPAGE 6
document.getElementById("e26").addEventListener("click", function() {
  setActiveButton("e26");
});
document.getElementById("e27").addEventListener("click", function() {
  setActiveButton("e27");
});
document.getElementById("e28").addEventListener("click", function() {
  setActiveButton("e28");
});
document.getElementById("e29").addEventListener("click", function() {
  setActiveButton("e29");
});
document.getElementById("e30").addEventListener("click", function() {
  setActiveButton("e30");
});
 
////////////////////////////////////////////////////////////

document.getElementById("colsmiley1").addEventListener("click", function() {
    changeActiveButtonColor("colsmiley1"); visibility("colsmiley1");
});
document.getElementById("colsmiley2").addEventListener("click", function() {
    changeActiveButtonColor("colsmiley2"); visibility("colsmiley2");
});
document.getElementById("colsmiley3").addEventListener("click", function() {
    changeActiveButtonColor("colsmiley3"); visibility("colsmiley3");
});
document.getElementById("colsmiley4").addEventListener("click", function() {
    changeActiveButtonColor("colsmiley4"); visibility("colsmiley4");
});
document.getElementById("colsmiley5").addEventListener("click", function() {
    changeActiveButtonColor("colsmiley5"); visibility("colsmiley5");
});