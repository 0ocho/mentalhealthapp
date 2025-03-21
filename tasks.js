 
////////////////////////////////// WATER FUNCTION /////////////////////////////////////
  
    let val = 0;
    
    function increase()
      {  
          val += 0.5;
          zahl = val + ' ';
          document.getElementById('numberField').innerHTML = zahl
      }

    function decrease()
      {
        if (val > 0 ) {
            val -= 0.5;
        zahl = val + ' ';
        document.getElementById('numberField').innerHTML = zahl
        } else {
            val = 0;
        zahl = val + ' ';
        document.getElementById('numberField').innerHTML = zahl
        }
        
      }
   
/////////////////////////////// TOOTHBRUSH FUNCTION /////////////////////////////////// 

let btnMorgen = document.querySelector('#morgen');
let btnAbend = document.querySelector('#abend');
 
let btnMorgenAn = false
let btnAbendAn = false
 
btnMorgen.addEventListener('click', () => {
   
    if (btnMorgenAn) {
        btnMorgen.style.backgroundColor= '#e4e4e4'
    } else {
        btnMorgen.style.backgroundColor= '#b599b6'
    }
    btnMorgenAn = !btnMorgenAn;
})
 
btnAbend.addEventListener('click', () => {
   
    if (btnAbendAn) {
        btnAbend.style.backgroundColor= '#e4e4e4'
    } else {
        btnAbend.style.backgroundColor= '#b599b6'
    }
    btnAbendAn = !btnAbendAn;
})
   
 

////////////////////////////// MEDITATION FUNCTION //////////////////////////////////// 

function formatTime(value) {
    return `${value}`.padStart(2, '0');
}

let minutes = 0;
let hours = 0;

document.getElementById('meditationmins').innerHTML = formatTime(minutes);
document.getElementById('meditationhours').innerHTML = formatTime(hours);

function increase2() {  

    minutes += 10;

    if (minutes >= 60) {
        hours++;
        minutes -= 60;
    }

    document.getElementById('meditationmins').innerHTML = formatTime(minutes);
    document.getElementById('meditationhours').innerHTML = formatTime(hours);
}

function decrease2() {

    if (hours <= 0 && minutes <= 0) {
        hours = 0;
        minutes = 0;
    } else {
        minutes -= 10;

        if (minutes < 0) {
            hours--;
            minutes += 60;
        }
    }

    document.getElementById('meditationmins').innerHTML = formatTime(minutes);
    document.getElementById('meditationhours').innerHTML = formatTime(hours);
}

 //////////////////////////////// WALK FUNCTION ////////////////////////////////// 

let val3 = 0;



function increase3()
  {  
      val3 += 0.5;
      zahl3 = val3 + ' ';
      document.getElementById('numberField3').innerHTML = zahl3
  }

function decrease3()
  {
    if (val3 > 0 ) {
        val3 -= 0.5;
    zahl3 = val3 + ' '
    document.getElementById('numberField3').innerHTML = zahl3
    } else {
        val3 = 0;
    zahl3 = val3 + ' '
    document.getElementById('numberField3').innerHTML = zahl3
    }
    
  }
  

  /////////////////////////////// BOOK FUNCTION /////////////////////////////////// 

    function formatTime(value) {
        return `${value}`.padStart(2, '0');
    }
    
    let bminutes = 0;
    let bhours = 0;
    
    document.getElementById('bookmins').innerHTML = formatTime(bminutes);
    document.getElementById('bookhours').innerHTML = formatTime(bhours);
    
    function increase4() {  
    
        bminutes += 10;
    
        if (bminutes >= 60) {
            bhours++;
            bminutes -= 60;
        }
    
        document.getElementById('bookmins').innerHTML = formatTime(bminutes);
        document.getElementById('bookhours').innerHTML = formatTime(bhours);
    }
    function decrease4() {
    
        if (hours <= 0 && bminutes <= 0) {
            bhours = 0;
            bminutes = 0;
        } else {
            bminutes -= 10;
    
            if (bminutes < 0) {
                bhours--;
                bminutes += 60;
            }
        }
    
        document.getElementById('bookmins').innerHTML = formatTime(bminutes);
        document.getElementById('bookhours').innerHTML = formatTime(bhours);
    }
    
     


  
    // // position of button COMPLETE
    // let bild = document.getElementById("btn");
    // bild.style.left = "98px"; // X-Koordinate
    // bild.style.top = "710px";  // Y-Koordinate
 
 // position of button BACK
 let back = document.getElementById("back");
 back.style.left = "0px"; // X-Koordinate
 back.style.top = "10px";  // Y-Koordinate


 
    // position of PLUS button 1
    let bild1 = document.getElementById("plus");
    bild1.style.left = "270px"; // X-Koordinate
    bild1.style.top = "170px";  // Y-Koordinate
    
              // position of PLUS button 2
              let bild1b = document.getElementById("plus2");
              bild1b.style.left = "270px"; // X-Koordinate
              bild1b.style.top = "420px";  // Y-Koordinate
          
              // position of PLUS button 3
              let bild1c = document.getElementById("plus3");
              bild1c.style.left = "270px"; // X-Koordinate
              bild1c.style.top = "545px";  // Y-Koordinate
           
              // position of PLUS button 4
              let bild1d = document.getElementById("plus4");
              bild1d.style.left = "270px"; // X-Koordinate
              bild1d.style.top = "674px";  // Y-Koordinate
         

 
   // position of MINUS button 1
  let bild2 = document.getElementById("minus");
  bild2.style.left = "72px"; // X-Koordinate
  bild2.style.top = "170px";  // Y-Koordinate

               // position of MINUS button 2
              let bild2b = document.getElementById("minus2");
              bild2b.style.left = "72px"; // X-Koordinate
              bild2b.style.top = "420px";  // Y-Koordinate
          
               // position of MINUS button 3
               let bild2c = document.getElementById("minus3");
              bild2c.style.left = "72px"; // X-Koordinate
              bild2c.style.top = "545px";  // Y-Koordinate
          
              // position of MINUS button 4
              let bild2d = document.getElementById("minus4");
              bild2d.style.left = "72px"; // X-Koordinate
              bild2d.style.top = "674px";  // Y-Koordinate
          


 
// position of ZAHN ABEND
let textfeld = document.getElementById("numberField");
textfeld.style.left = "182px"; // X-Koordinate
textfeld.style.top = "204px";  // Y-Koordinate
 
// position of NUMBERFIELD 1 LITER
let textfeldLiter = document.getElementById("liter");
textfeldLiter.style.left = "205px"; // X-Koordinate
textfeldLiter.style.top = "204px";  // Y-Koordinate

 
// position of NUMBERFIELD 2 MEDITATION HOURS
let textfeldb1 = document.getElementById("meditationhours");
textfeldb1.style.left = "175px"; // X-Koordinate
textfeldb1.style.top = "455px";  // Y-Koordinate
 
// position of NUMBERFIELD 2 COLON
let textfeldbc = document.getElementById("meditationcolon");
textfeldbc.style.left = "193px"; // X-Koordinate
textfeldbc.style.top = "455px";  // Y-Koordinate
 
// position of NUMBERFIELD 2 MEDITATION MINUTES
let textfeldb2 = document.getElementById("meditationmins");
textfeldb2.style.left = "198px"; // X-Koordinate
textfeldb2.style.top = "455px";  // Y-Koordinate
 
 
// position of NUMBERFIELD 3
let textfeldc = document.getElementById("numberField3");
textfeldc.style.left = "172px"; // X-Koordinate
textfeldc.style.top = "580px";  // Y-Koordinate
 
// position of NUMBERFIELD 3 KILOMETER
let textfeldKilometer = document.getElementById("kilometer");
textfeldKilometer.style.left = "205px"; // X-Koordinate
textfeldKilometer.style.top = "580px";  // Y-Koordinate

 
// position of NUMBERFIELD 4 BOOK HOURS
let textfeldd = document.getElementById("bookhours");
textfeldd.style.left = "179px"; // X-Koordinate
textfeldd.style.top = "706px";  // Y-Koordinate
 
// position of NUMBERFIELD 4 COLON
let textfelde = document.getElementById("colonbook");
textfelde.style.left = "197px"; // X-Koordinate
textfelde.style.top = "706px";  // Y-Koordinate
     
// position of NUMBERFIELD 4 BOOK MINUTES
let textfeldf = document.getElementById("bookmins");
textfeldf.style.left = "202px"; // X-Koordinate
textfeldf.style.top = "706px";  // Y-Koordinate
     
///////////////////////////////////////////RESULT TEXTFELDER////////////////////////////////////////////////
 
 
document.addEventListener("DOMContentLoaded", function() {
    let textfeldLiter = document.getElementById("resnumberfield11");
    textfeldLiter.style.left = "29px"; // X-Koordinate
    textfeldLiter.style.top = "171px";  // Y-Koordinate
});
 
 
document.addEventListener("DOMContentLoaded", function() {
    let textfeldLiter = document.getElementById("resliter1");
    textfeldLiter.style.left = "47px"; // X-Koordinate
    textfeldLiter.style.top = "171px";  // Y-Koordinate
});
 
 
 
document.addEventListener("DOMContentLoaded", function() {
    let textfeldLiter = document.getElementById("resmeditationhours1");
    textfeldLiter.style.left = "154px"; // X-Koordinate
    textfeldLiter.style.top = "171px";  // Y-Koordinate
});
 
 
 
document.addEventListener("DOMContentLoaded", function() {
    let textfeldLiter = document.getElementById("resmeditationcolon");
    textfeldLiter.style.left = "164px"; // X-Koordinate
    textfeldLiter.style.top = "171px";  // Y-Koordinate
});
 
 
 
document.addEventListener("DOMContentLoaded", function() {
    let textfeldLiter = document.getElementById("resmeditationmins1");
    textfeldLiter.style.left = "174px"; // X-Koordinate
    textfeldLiter.style.top = "171px";  // Y-Koordinate
});
 
 
document.addEventListener("DOMContentLoaded", function() {
    let textfeldLiter = document.getElementById("resmeditationmins1");
    textfeldLiter.style.left = "174px"; // X-Koordinate
    textfeldLiter.style.top = "171px";  // Y-Koordinate
});
 
 
document.addEventListener("DOMContentLoaded", function() {
    let textfeldLiter = document.getElementById("resnumberfield21");
    textfeldLiter.style.left = "218px"; // X-Koordinate
    textfeldLiter.style.top = "171px";  // Y-Koordinate
});
 
 
document.addEventListener("DOMContentLoaded", function() {
    let textfeldLiter = document.getElementById("reskilometer");
    textfeldLiter.style.left = "239px"; // X-Koordinate
    textfeldLiter.style.top = "171px";  // Y-Koordinate
});
 
 
 
document.addEventListener("DOMContentLoaded", function() {
    let textfeldLiter = document.getElementById("resbookhours1");
    textfeldLiter.style.left = "283px"; // X-Koordinate
    textfeldLiter.style.top = "171px";  // Y-Koordinate
});
 
 
 
document.addEventListener("DOMContentLoaded", function() {
    let textfeldLiter = document.getElementById("rescolonbook");
    textfeldLiter.style.left = "293px"; // X-Koordinate
    textfeldLiter.style.top = "171px";  // Y-Koordinate
});
 
 
document.addEventListener("DOMContentLoaded", function() {
    let textfeldLiter = document.getElementById("resbookmins1");
    textfeldLiter.style.left = "303px"; // X-Koordinate
    textfeldLiter.style.top = "171px";  // Y-Koordinate
});
 
/////////////////////////Zeile 2/////////////////////////////////
 
 
document.addEventListener("DOMContentLoaded", function() {
    let textfeldLiter = document.getElementById("resnumberfield12");
    textfeldLiter.style.left = "29px"; // X-Koordinate
    textfeldLiter.style.top = "319px";  // Y-Koordinate
});
 
 
document.addEventListener("DOMContentLoaded", function() {
    let textfeldLiter = document.getElementById("resliter2");
    textfeldLiter.style.left = "47px"; // X-Koordinate
    textfeldLiter.style.top = "319px";  // Y-Koordinate
});
 
 
document.addEventListener("DOMContentLoaded", function() {
    let textfeldLiter = document.getElementById("resmeditationhours2");
    textfeldLiter.style.left = "154px"; // X-Koordinate
    textfeldLiter.style.top = "319px";  // Y-Koordinate
});
 
 
document.addEventListener("DOMContentLoaded", function() {
    let textfeldLiter = document.getElementById("resmeditationcolon2");
    textfeldLiter.style.left = "164px"; // X-Koordinate
    textfeldLiter.style.top = "319px";  // Y-Koordinate
});
 
 
 
document.addEventListener("DOMContentLoaded", function() {
    let textfeldLiter = document.getElementById("resmeditationmins2");
    textfeldLiter.style.left = "174px"; // X-Koordinate
    textfeldLiter.style.top = "319px";  // Y-Koordinate
});
 
document.addEventListener("DOMContentLoaded", function() {
    let textfeldLiter = document.getElementById("resmeditationmins2");
    textfeldLiter.style.left = "174px"; // X-Koordinate
    textfeldLiter.style.top = "319px";  // Y-Koordinate
});
 
 
document.addEventListener("DOMContentLoaded", function() {
    let textfeldLiter = document.getElementById("resnumberfield22");
    textfeldLiter.style.left = "218px"; // X-Koordinate
    textfeldLiter.style.top = "319px";  // Y-Koordinate
});
 
 
document.addEventListener("DOMContentLoaded", function() {
    let textfeldLiter = document.getElementById("reskilometer2");
    textfeldLiter.style.left = "239px"; // X-Koordinate
    textfeldLiter.style.top = "319px";  // Y-Koordinate
});
 
 
document.addEventListener("DOMContentLoaded", function() {
    let textfeldLiter = document.getElementById("resbookhours2");
    textfeldLiter.style.left = "283px"; // X-Koordinate
    textfeldLiter.style.top = "319px";  // Y-Koordinate
});
 
 
document.addEventListener("DOMContentLoaded", function() {
    let textfeldLiter = document.getElementById("rescolonbook2");
    textfeldLiter.style.left = "293px"; // X-Koordinate
    textfeldLiter.style.top = "319px";  // Y-Koordinate
});
 
 
document.addEventListener("DOMContentLoaded", function() {
    let textfeldLiter = document.getElementById("resbookmins2");
    textfeldLiter.style.left = "303px"; // X-Koordinate
    textfeldLiter.style.top = "319px";  // Y-Koordinate
});
 
 
/////////////////////////Zeile 3/////////////////////////////////
 
 
document.addEventListener("DOMContentLoaded", function() {
    let textfeldLiter = document.getElementById("resnumberfield13");
    textfeldLiter.style.left = "29px"; // X-Koordinate
    textfeldLiter.style.top = "467px";  // Y-Koordinate
});
 
 
document.addEventListener("DOMContentLoaded", function() {
    let textfeldLiter = document.getElementById("resliter3");
    textfeldLiter.style.left = "47px"; // X-Koordinate
    textfeldLiter.style.top = "467px";  // Y-Koordinate
});
 
 
document.addEventListener("DOMContentLoaded", function() {
    let textfeldLiter = document.getElementById("resmeditationhours3");
    textfeldLiter.style.left = "154px"; // X-Koordinate
    textfeldLiter.style.top = "467px";  // Y-Koordinate
});
 
 
document.addEventListener("DOMContentLoaded", function() {
    let textfeldLiter = document.getElementById("resmeditationcolon3");
    textfeldLiter.style.left = "164px"; // X-Koordinate
    textfeldLiter.style.top = "467px";  // Y-Koordinate
});
 
 
 
document.addEventListener("DOMContentLoaded", function() {
    let textfeldLiter = document.getElementById("resmeditationmins3");
    textfeldLiter.style.left = "174px"; // X-Koordinate
    textfeldLiter.style.top = "467px";  // Y-Koordinate
});
 
 
document.addEventListener("DOMContentLoaded", function() {
    let textfeldLiter = document.getElementById("resmeditationmins3");
    textfeldLiter.style.left = "174px"; // X-Koordinate
    textfeldLiter.style.top = "467px";  // Y-Koordinate
});
 
 
document.addEventListener("DOMContentLoaded", function() {
    let textfeldLiter = document.getElementById("resnumberfield23");
    textfeldLiter.style.left = "218px"; // X-Koordinate
    textfeldLiter.style.top = "467px";  // Y-Koordinate
});
 
 
document.addEventListener("DOMContentLoaded", function() {
    let textfeldLiter = document.getElementById("reskilometer3");
    textfeldLiter.style.left = "239px"; // X-Koordinate
    textfeldLiter.style.top = "467px";  // Y-Koordinate
});
 
 
document.addEventListener("DOMContentLoaded", function() {
    let textfeldLiter = document.getElementById("resbookhours3");
    textfeldLiter.style.left = "283px"; // X-Koordinate
    textfeldLiter.style.top = "467px";  // Y-Koordinate
});
 
 
document.addEventListener("DOMContentLoaded", function() {
    let textfeldLiter = document.getElementById("rescolonbook3");
    textfeldLiter.style.left = "293px"; // X-Koordinate
    textfeldLiter.style.top = "467px";  // Y-Koordinate
});
 
 
document.addEventListener("DOMContentLoaded", function() {
    let textfeldLiter = document.getElementById("resbookmins3");
    textfeldLiter.style.left = "303px"; // X-Koordinate
    textfeldLiter.style.top = "467px";  // Y-Koordinate
});
 
 
/////////////////////////Zeile 4/////////////////////////////////
 
 
document.addEventListener("DOMContentLoaded", function() {
    let textfeldLiter = document.getElementById("resnumberfield14");
    textfeldLiter.style.left = "29px"; // X-Koordinate
    textfeldLiter.style.top = "614px";  // Y-Koordinate
});
 
 
document.addEventListener("DOMContentLoaded", function() {
    let textfeldLiter = document.getElementById("resliter4");
    textfeldLiter.style.left = "47px"; // X-Koordinate
    textfeldLiter.style.top = "614px";  // Y-Koordinate
});
 
 
document.addEventListener("DOMContentLoaded", function() {
    let textfeldLiter = document.getElementById("resmeditationhours4");
    textfeldLiter.style.left = "154px"; // X-Koordinate
    textfeldLiter.style.top = "614px";  // Y-Koordinate
});
 
document.addEventListener("DOMContentLoaded", function() {
    let textfeldLiter = document.getElementById("resmeditationcolon4");
    textfeldLiter.style.left = "164px"; // X-Koordinate
    textfeldLiter.style.top = "614px";  // Y-Koordinate
});
 
 
document.addEventListener("DOMContentLoaded", function() {
    let textfeldLiter = document.getElementById("resmeditationmins4");
    textfeldLiter.style.left = "174px"; // X-Koordinate
    textfeldLiter.style.top = "614px";  // Y-Koordinate
});
 
document.addEventListener("DOMContentLoaded", function() {
    let textfeldLiter = document.getElementById("resmeditationmins4");
    textfeldLiter.style.left = "174px"; // X-Koordinate
    textfeldLiter.style.top = "614px";  // Y-Koordinate
});
 
document.addEventListener("DOMContentLoaded", function() {
    let textfeldLiter = document.getElementById("resnumberfield24");
    textfeldLiter.style.left = "218px"; // X-Koordinate
    textfeldLiter.style.top = "614px";  // Y-Koordinate
});
 
document.addEventListener("DOMContentLoaded", function() {
    let textfeldLiter = document.getElementById("reskilometer4");
    textfeldLiter.style.left = "239px"; // X-Koordinate
    textfeldLiter.style.top = "614px";  // Y-Koordinate
});
 
 
document.addEventListener("DOMContentLoaded", function() {
    let textfeldLiter = document.getElementById("resbookhours4");
    textfeldLiter.style.left = "283px"; // X-Koordinate
    textfeldLiter.style.top = "614px";  // Y-Koordinate
});
 
 
document.addEventListener("DOMContentLoaded", function() {
    let textfeldLiter = document.getElementById("rescolonbook4");
    textfeldLiter.style.left = "293px"; // X-Koordinate
    textfeldLiter.style.top = "614px";  // Y-Koordinate
});
 
 
document.addEventListener("DOMContentLoaded", function() {
    let textfeldLiter = document.getElementById("resbookmins4");
    textfeldLiter.style.left = "303px"; // X-Koordinate
    textfeldLiter.style.top = "614px";  // Y-Koordinate
});
 
 
/////////////////////////Zeile 5/////////////////////////////////
 
 
document.addEventListener("DOMContentLoaded", function() {
    let textfeldLiter = document.getElementById("resnumberfield15");
    textfeldLiter.style.left = "29px"; // X-Koordinate
    textfeldLiter.style.top = "762px";  // Y-Koordinate
});
 
 
document.addEventListener("DOMContentLoaded", function() {
    let textfeldLiter = document.getElementById("resliter5");
    textfeldLiter.style.left = "47px"; // X-Koordinate
    textfeldLiter.style.top = "762px";  // Y-Koordinate
});
 
 
document.addEventListener("DOMContentLoaded", function() {
    let textfeldLiter = document.getElementById("resmeditationhours5");
    textfeldLiter.style.left = "154px"; // X-Koordinate
    textfeldLiter.style.top = "762px";  // Y-Koordinate
});
 
 
document.addEventListener("DOMContentLoaded", function() {
    let textfeldLiter = document.getElementById("resmeditationcolon5");
    textfeldLiter.style.left = "164px"; // X-Koordinate
    textfeldLiter.style.top = "762px";  // Y-Koordinate
});
 
 
document.addEventListener("DOMContentLoaded", function() {
    let textfeldLiter = document.getElementById("resmeditationmins5");
    textfeldLiter.style.left = "174px"; // X-Koordinate
    textfeldLiter.style.top = "762px";  // Y-Koordinate
});
 
document.addEventListener("DOMContentLoaded", function() {
    let textfeldLiter = document.getElementById("resmeditationmins5");
    textfeldLiter.style.left = "174px"; // X-Koordinate
    textfeldLiter.style.top = "762px";  // Y-Koordinate
});
 
document.addEventListener("DOMContentLoaded", function() {
    let textfeldLiter = document.getElementById("resnumberfield25");
    textfeldLiter.style.left = "218px"; // X-Koordinate
    textfeldLiter.style.top = "762px";  // Y-Koordinate
});
 
document.addEventListener("DOMContentLoaded", function() {
    let textfeldLiter = document.getElementById("reskilometer5");
    textfeldLiter.style.left = "239px"; // X-Koordinate
    textfeldLiter.style.top = "762px";  // Y-Koordinate
});
 
 
document.addEventListener("DOMContentLoaded", function() {
    let textfeldLiter = document.getElementById("resbookhours5");
    textfeldLiter.style.left = "283px"; // X-Koordinate
    textfeldLiter.style.top = "762px";  // Y-Koordinate
});
 
 
document.addEventListener("DOMContentLoaded", function() {
    let textfeldLiter = document.getElementById("rescolonbook5");
    textfeldLiter.style.left = "293px"; // X-Koordinate
    textfeldLiter.style.top = "762px";  // Y-Koordinate
});
 
 
document.addEventListener("DOMContentLoaded", function() {
    let textfeldLiter = document.getElementById("resbookmins5");
    textfeldLiter.style.left = "303px"; // X-Koordinate
    textfeldLiter.style.top = "762px";  // Y-Koordinate
});
 
