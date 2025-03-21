
    let number = 0;
    let backnumber = 0;
    let dayHasStarted = false;
    let clickedBack = false;
    var resBtns = document.getElementsByClassName('resToothBtn');
    var elements = document.getElementsByClassName('btn');
    var resTxt = document.getElementsByClassName('Resultfelder');
    var taskBtns = document.getElementsByClassName('buttons');


    
    function changeBackgroundImage() {
    
        const newImageUrl = getnewUrl();
    
        let div = document.getElementById("myDIV")
        if (div) {
            div.style.backgroundImage = `url(${newImageUrl})`
        }
    
    }
    



    function RESbackBackgroundImage(){
        const RESbackImageUrl = getRESUrl();

        let div = document.getElementById("myDIV")
        if (div) {
            div.style.backgroundImage = `url(${RESbackImageUrl})`
        }
    
    }

  

   

    function backBackgroundImage() {
    
        const backImageUrl = getBackImgeUrl();
    
        clickedBack = true;
    
        let div = document.getElementById("myDIV")
        if (div) {
            div.style.backgroundImage = `url(${backImageUrl})`
        }
    
        
        document.getElementById("plus").style.visibility = 'hidden'
        document.getElementById("plus2").style.visibility = 'hidden'
        document.getElementById("plus3").style.visibility = 'hidden'
        document.getElementById("plus4").style.visibility = 'hidden'
    
        document.getElementById("minus").style.visibility = 'hidden'
        document.getElementById("minus2").style.visibility = 'hidden'
        document.getElementById("minus3").style.visibility = 'hidden'
        document.getElementById("minus4").style.visibility = 'hidden'
    
        document.getElementById("morgen").style.visibility = 'hidden'
        document.getElementById("abend").style.visibility = 'hidden'
    
        document.getElementById("back").style.visibility = 'hidden'
                document.getElementById('resback').style.visibility = 'hidden'
        document.getElementById("btnTasks").style.visibility = 'hidden'
         document.getElementById("btnCal").style.visibility = 'visible'
    
        document.getElementById("liter").style.visibility = 'hidden'
        document.getElementById("kilometer").style.visibility = 'hidden'
        document.getElementById("numberField").style.visibility = 'hidden'
        document.getElementById("numberField3").style.visibility = 'hidden'
        document.getElementById("meditationhours").style.visibility = 'hidden'
        document.getElementById("meditationmins").style.visibility = 'hidden'
        document.getElementById("bookhours").style.visibility = 'hidden'
        document.getElementById("bookmins").style.visibility = 'hidden'
        document.getElementById("colonbook").style.visibility = 'hidden'
        document.getElementById("meditationcolon").style.visibility = 'hidden'
    
          for(var i = 0; i < resBtns.length; i++){
            resBtns[i].style.visibility = "hidden";
          }

          for(var i = 0; i < resTxt.length; i++){
            resTxt[i].style.visibility = "hidden";
          }

          for(var i = 0; i < elements.length; i++){
            elements[i].style.visibility = "hidden";
          } 
          for(var i = 0; i < taskBtns.length; i++){
            taskBtns[i].style.visibility = "hidden";
          } 
       // TODO: knöpfe entfernen 
    
    
       document.getElementById("one").style.visibility = 'visible'
       document.getElementById("two").style.visibility = 'visible'
       document.getElementById("three").style.visibility = 'visible'
       document.getElementById("four").style.visibility = 'visible'
       document.getElementById("five").style.visibility = 'visible'
       document.getElementById("six").style.visibility = 'visible'
       document.getElementById("seven").style.visibility = 'visible'
       document.getElementById("eight").style.visibility = 'visible'
       document.getElementById("nine").style.visibility = 'visible'
       document.getElementById("ten").style.visibility = 'visible'
       document.getElementById("eleven").style.visibility = 'visible'
       document.getElementById("twelve").style.visibility = 'visible'
       document.getElementById("thirteen").style.visibility = 'visible'
       document.getElementById("fourteen").style.visibility = 'visible'
       document.getElementById("fifteen").style.visibility = 'visible'
       document.getElementById("sixteen").style.visibility = 'visible'
    document.getElementById("seventeen").style.visibility = 'visible'
    document.getElementById("eighteen").style.visibility = 'visible'
    document.getElementById("nineteen").style.visibility = 'visible'
    document.getElementById("twenty").style.visibility = 'visible'
    document.getElementById("twentyone").style.visibility = 'visible'
    document.getElementById("twentytwo").style.visibility = 'visible'
    document.getElementById("twentythree").style.visibility = 'visible'
    document.getElementById("twentyfour").style.visibility = 'visible'
    document.getElementById("twentyfive").style.visibility = 'visible'
    document.getElementById("twentysix").style.visibility = 'visible'
    document.getElementById("twentyseven").style.visibility = 'visible'
    document.getElementById("twentyeight").style.visibility = 'visible'
    document.getElementById("twentynine").style.visibility = 'visible'
    document.getElementById("thirty").style.visibility = 'visible'
      
    }



    
    function getRESUrl(){
        let RESbackImageUrl = ''
        document.getElementById("one").style.visibility = 'visible'
        document.getElementById("two").style.visibility = 'visible'
        document.getElementById("three").style.visibility = 'visible'
        document.getElementById("four").style.visibility = 'visible'
        document.getElementById("five").style.visibility = 'visible'
        document.getElementById("six").style.visibility = 'visible'
        document.getElementById("seven").style.visibility = 'visible'
        document.getElementById("eight").style.visibility = 'visible'
        document.getElementById("nine").style.visibility = 'visible'
        document.getElementById("ten").style.visibility = 'visible'
        document.getElementById("eleven").style.visibility = 'visible'
        document.getElementById("twelve").style.visibility = 'visible'
        document.getElementById("thirteen").style.visibility = 'visible'
        document.getElementById("fourteen").style.visibility = 'visible'
        document.getElementById("fifteen").style.visibility = 'visible'
        document.getElementById("sixteen").style.visibility = 'visible'
        document.getElementById("seventeen").style.visibility = 'visible'
        document.getElementById("eighteen").style.visibility = 'visible'
        document.getElementById("nineteen").style.visibility = 'visible'
        document.getElementById("twenty").style.visibility = 'visible'
        document.getElementById("twentyone").style.visibility = 'visible'
        document.getElementById("twentytwo").style.visibility = 'visible'
        document.getElementById("twentythree").style.visibility = 'visible'
        document.getElementById("twentyfour").style.visibility = 'visible'
        document.getElementById("twentyfive").style.visibility = 'visible'
        document.getElementById("twentysix").style.visibility = 'visible'
        document.getElementById("twentyseven").style.visibility = 'visible'
        document.getElementById("twentyeight").style.visibility = 'visible'
        document.getElementById("twentynine").style.visibility = 'visible'
        document.getElementById("thirty").style.visibility = 'visible'

        for(var i = 0; i < resBtns.length; i++){
            resBtns[i].style.visibility = "hidden";
          }

          for(var i = 0; i < resTxt.length; i++){
            resTxt[i].style.visibility = "hidden";
          }

          for(var i = 0; i < elements.length; i++){
            elements[i].style.visibility = "hidden";
          } 
          for(var i = 0; i < taskBtns.length; i++){
            taskBtns[i].style.visibility = "hidden";
          } 

        if(backnumber<0){
            RESbackImageUrl = '1' + '/cal' + '0' + '.png'
         return RESbackImageUrl;
        
        }
        else {        
            RESbackImageUrl = '1' + '/cal' + number + '.png'
            return RESbackImageUrl}
            
        }
    
    
    function getBackImgeUrl() {
        let backImageUrl = ''
        const backnumber = (number - 1);

        if(backnumber<0){
         backImageUrl = '1' + '/cal' + '0' + '.png'
         return backImageUrl
        }
        else {        
            backImageUrl = '1' + '/cal' + (backnumber) + '.png'
            return backImageUrl}
            
        }
    



    function loadPreviousData() {

        const currentDay = JSON.parse(sessionStorage.getItem(`day${number + 1}`));
        
        btnMorgenAn = Boolean(currentDay?.brushedTeethInMorning ?? false);
        btnAbendAn = Boolean(currentDay?.brushedTeethInEvening ?? false);
        val = Number(currentDay?.waterAmount ?? 0);
        hours = Number(currentDay?.meditationHours ?? 0);
        minutes = Number(currentDay?.meditationMinutes ?? 0);
        val3 = Number(currentDay?.walkedDistance ?? 0);
        bhours = Number(currentDay?.readingHours ?? 0);
        bminutes  = Number(currentDay?.readingMinutes ?? 0);

        document.getElementById('bookhours').innerText = String(bhours).padEnd(2, '0');
        document.getElementById('bookmins').innerHTML = String(bminutes).padEnd(2, '0');
        document.getElementById('numberField3').innerText = val3;
        document.getElementById('numberField').innerText = val;
        document.getElementById('meditationhours').innerText = String(hours).padEnd(2, '0');
        document.getElementById('meditationmins').innerText = String(minutes).padEnd(2, '0');
        document.getElementById('morgen').style.backgroundColor = btnMorgenAn ? '#b599b6' : '#e4e4e4';
        document.getElementById('abend').style.backgroundColor = btnAbendAn ? '#b599b6' : '#e4e4e4';

    }
    


    function restart(){
      sessionStorage.clear();
      number = 0;
      let div = document.getElementById("myDIV")
      if (div) {
          div.style.backgroundImage = `url(1/cal0.png)`
      }
  }


    function getnewUrl() { 
           let newImageUrl = '';
        for(var i = 0; i < resTxt.length; i++){
            resTxt[i].style.visibility = "hidden";
          }
     if (number >= 30) {
            document.getElementById("restart").style.visibility = "visible";
            newImageUrl = '1' + '/' + 'done.gif';
            for(var i = 0; i < elements.length; i++){
              elements[i].style.visibility = "hidden";
            } 
            for(var i = 0; i < taskBtns.length; i++){
              taskBtns[i].style.visibility = "hidden";
            } 
            document.getElementById("liter").style.visibility = 'hidden'
        document.getElementById("kilometer").style.visibility = 'hidden'
        document.getElementById("numberField").style.visibility = 'hidden'
        document.getElementById("numberField3").style.visibility = 'hidden'
        document.getElementById("meditationhours").style.visibility = 'hidden'
        document.getElementById("meditationmins").style.visibility = 'hidden'
        document.getElementById("bookhours").style.visibility = 'hidden'
        document.getElementById("bookmins").style.visibility = 'hidden'
        document.getElementById("colonbook").style.visibility = 'hidden'
        document.getElementById("meditationcolon").style.visibility = 'hidden'
            return newImageUrl;
        }
        if (dayHasStarted) {
            const result = {
                waterAmount: val,
                brushedTeethInMorning: btnMorgenAn,
                brushedTeethInEvening: btnAbendAn,
                meditationHours: hours,
                meditationMinutes: minutes,
                walkedDistance: val3,
                readingHours: bhours,
                readingMinutes: bminutes, 
            }
    console.log(number)
     loadPreviousData();
            sessionStorage.setItem(`day${number}`, JSON.stringify(result));
        }
   
 
  
        
   
        if (clickedBack) {
            dayHasStarted = !dayHasStarted;
            newImageUrl = '1' + '/t' + number + '.png'
            document.getElementById("plus").style.visibility = 'visible'
            document.getElementById("plus2").style.visibility = 'visible'
            document.getElementById("plus3").style.visibility = 'visible'
            document.getElementById("plus4").style.visibility = 'visible'
    
            document.getElementById("minus").style.visibility = 'visible'
            document.getElementById("minus2").style.visibility = 'visible'
            document.getElementById("minus3").style.visibility = 'visible'
            document.getElementById("minus4").style.visibility = 'visible'
    
            document.getElementById("morgen").style.visibility = 'visible'
            document.getElementById("abend").style.visibility = 'visible'
    
            document.getElementById("back").style.visibility = 'visible'
                    document.getElementById('resback').style.visibility = 'hidden'
             document.getElementById("btnTasks").style.visibility = 'visible'
              document.getElementById("btnCal").style.visibility = 'hidden'
    
            document.getElementById("liter").style.visibility = 'visible'
            document.getElementById("kilometer").style.visibility = 'visible'
            document.getElementById("numberField").style.visibility = 'visible'
            document.getElementById("numberField3").style.visibility = 'visible'
            document.getElementById("meditationhours").style.visibility = 'visible'
            document.getElementById("meditationmins").style.visibility = 'visible'
            document.getElementById("bookhours").style.visibility = 'visible'
            document.getElementById("bookmins").style.visibility = 'visible'
            document.getElementById("colonbook").style.visibility = 'visible'
            document.getElementById("meditationcolon").style.visibility = 'visible'
    
            document.getElementById("one").style.visibility = 'hidden'
            document.getElementById("two").style.visibility = 'hidden'
            document.getElementById("three").style.visibility = 'hidden'
            document.getElementById("four").style.visibility = 'hidden'
            document.getElementById("five").style.visibility = 'hidden'
            document.getElementById("six").style.visibility = 'hidden'
            document.getElementById("seven").style.visibility = 'hidden'
            document.getElementById("eight").style.visibility = 'hidden'
            document.getElementById("nine").style.visibility = 'hidden'
            document.getElementById("ten").style.visibility = 'hidden'
            document.getElementById("eleven").style.visibility = 'hidden'
            document.getElementById("twelve").style.visibility = 'hidden'
            document.getElementById("thirteen").style.visibility = 'hidden'
            document.getElementById("fourteen").style.visibility = 'hidden'
            document.getElementById("fifteen").style.visibility = 'hidden'
            document.getElementById("sixteen").style.visibility = 'hidden'
    document.getElementById("seventeen").style.visibility = 'hidden'
    document.getElementById("eighteen").style.visibility = 'hidden'
    document.getElementById("nineteen").style.visibility = 'hidden'
    document.getElementById("twenty").style.visibility = 'hidden'
    document.getElementById("twentyone").style.visibility = 'hidden'
    document.getElementById("twentytwo").style.visibility = 'hidden'
    document.getElementById("twentythree").style.visibility = 'hidden'
    document.getElementById("twentyfour").style.visibility = 'hidden'
    document.getElementById("twentyfive").style.visibility = 'hidden'
    document.getElementById("twentysix").style.visibility = 'hidden'
    document.getElementById("twentyseven").style.visibility = 'hidden'
    document.getElementById("twentyeight").style.visibility = 'hidden'
    document.getElementById("twentynine").style.visibility = 'hidden'
    document.getElementById("thirty").style.visibility = 'hidden'
     
    
            clickedBack = !clickedBack;
        }
        else {
              if (dayHasStarted) {
            newImageUrl = '1' + '/cal' + number + '.png'
             document.getElementById("plus").style.visibility = 'hidden'
             document.getElementById("plus2").style.visibility = 'hidden'
             document.getElementById("plus3").style.visibility = 'hidden'
             document.getElementById("plus4").style.visibility = 'hidden'
    
             document.getElementById("minus").style.visibility = 'hidden'
             document.getElementById("minus2").style.visibility = 'hidden'
             document.getElementById("minus3").style.visibility = 'hidden'
             document.getElementById("minus4").style.visibility = 'hidden'
    
             document.getElementById("morgen").style.visibility = 'hidden'
             document.getElementById("abend").style.visibility = 'hidden'
    
             document.getElementById("back").style.visibility = 'hidden'
                     document.getElementById('resback').style.visibility = 'hidden'
             document.getElementById("btnTasks").style.visibility = 'hidden'
              document.getElementById("btnCal").style.visibility = 'visible'
    
             document.getElementById("liter").style.visibility = 'hidden'
             document.getElementById("kilometer").style.visibility = 'hidden'
             document.getElementById("numberField").style.visibility = 'hidden'
             document.getElementById("numberField3").style.visibility = 'hidden'
             document.getElementById("meditationhours").style.visibility = 'hidden'
             document.getElementById("meditationmins").style.visibility = 'hidden'
             document.getElementById("bookhours").style.visibility = 'hidden'
             document.getElementById("bookmins").style.visibility = 'hidden'
             document.getElementById("colonbook").style.visibility = 'hidden'
             document.getElementById("meditationcolon").style.visibility = 'hidden'
    
             document.getElementById("one").style.visibility = 'visible'
             document.getElementById("two").style.visibility = 'visible'
             document.getElementById("three").style.visibility = 'visible'
             document.getElementById("four").style.visibility = 'visible'
             document.getElementById("five").style.visibility = 'visible'
             document.getElementById("six").style.visibility = 'visible'
             document.getElementById("seven").style.visibility = 'visible'
             document.getElementById("eight").style.visibility = 'visible'
             document.getElementById("nine").style.visibility = 'visible'
             document.getElementById("ten").style.visibility = 'visible'
             document.getElementById("eleven").style.visibility = 'visible'
             document.getElementById("twelve").style.visibility = 'visible'
             document.getElementById("thirteen").style.visibility = 'visible'
             document.getElementById("fourteen").style.visibility = 'visible'
             document.getElementById("fifteen").style.visibility = 'visible'
             document.getElementById("sixteen").style.visibility = 'visible'
    document.getElementById("seventeen").style.visibility = 'visible'
    document.getElementById("eighteen").style.visibility = 'visible'
    document.getElementById("nineteen").style.visibility = 'visible'
    document.getElementById("twenty").style.visibility = 'visible'
    document.getElementById("twentyone").style.visibility = 'visible'
    document.getElementById("twentytwo").style.visibility = 'visible'
    document.getElementById("twentythree").style.visibility = 'visible'
    document.getElementById("twentyfour").style.visibility = 'visible'
    document.getElementById("twentyfive").style.visibility = 'visible'
    document.getElementById("twentysix").style.visibility = 'visible'
    document.getElementById("twentyseven").style.visibility = 'visible'
    document.getElementById("twentyeight").style.visibility = 'visible'
    document.getElementById("twentynine").style.visibility = 'visible'
    document.getElementById("thirty").style.visibility = 'visible'
     
            // TODO: knöpfe entfernen 
        } else {
            
            number++ ;
            newImageUrl = '1' + '/t' + number + '.png'
            document.getElementById("plus").style.visibility = 'visible'
            document.getElementById("plus2").style.visibility = 'visible'
            document.getElementById("plus3").style.visibility = 'visible'
            document.getElementById("plus4").style.visibility = 'visible'
    
            document.getElementById("minus").style.visibility = 'visible'
            document.getElementById("minus2").style.visibility = 'visible'
            document.getElementById("minus3").style.visibility = 'visible'
            document.getElementById("minus4").style.visibility = 'visible'
    
            document.getElementById("morgen").style.visibility = 'visible'
            document.getElementById("abend").style.visibility = 'visible'
    
            document.getElementById("back").style.visibility = 'visible'
                    document.getElementById('resback').style.visibility = 'hidden'
             document.getElementById("btnTasks").style.visibility = 'visible'
              document.getElementById("btnCal").style.visibility = 'hidden'
    
            document.getElementById("liter").style.visibility = 'visible'
            document.getElementById("kilometer").style.visibility = 'visible'
            document.getElementById("numberField").style.visibility = 'visible'
            document.getElementById("numberField3").style.visibility = 'visible'
            document.getElementById("meditationhours").style.visibility = 'visible'
            document.getElementById("meditationmins").style.visibility = 'visible'
            document.getElementById("bookhours").style.visibility = 'visible'
            document.getElementById("bookmins").style.visibility = 'visible'
            document.getElementById("colonbook").style.visibility = 'visible'
            document.getElementById("meditationcolon").style.visibility = 'visible'
    
            document.getElementById("one").style.visibility = 'hidden'
            document.getElementById("two").style.visibility = 'hidden'
            document.getElementById("three").style.visibility = 'hidden'
            document.getElementById("four").style.visibility = 'hidden'
            document.getElementById("five").style.visibility = 'hidden'
            document.getElementById("six").style.visibility = 'hidden'
            document.getElementById("seven").style.visibility = 'hidden'
            document.getElementById("eight").style.visibility = 'hidden'
            document.getElementById("nine").style.visibility = 'hidden'
            document.getElementById("ten").style.visibility = 'hidden'
            document.getElementById("eleven").style.visibility = 'hidden'
            document.getElementById("twelve").style.visibility = 'hidden'
            document.getElementById("thirteen").style.visibility = 'hidden'
            document.getElementById("fourteen").style.visibility = 'hidden'
            document.getElementById("fifteen").style.visibility = 'hidden'
            document.getElementById("sixteen").style.visibility = 'hidden'
    document.getElementById("seventeen").style.visibility = 'hidden'
    document.getElementById("eighteen").style.visibility = 'hidden'
    document.getElementById("nineteen").style.visibility = 'hidden'
    document.getElementById("twenty").style.visibility = 'hidden'
    document.getElementById("twentyone").style.visibility = 'hidden'
    document.getElementById("twentytwo").style.visibility = 'hidden'
    document.getElementById("twentythree").style.visibility = 'hidden'
    document.getElementById("twentyfour").style.visibility = 'hidden'
    document.getElementById("twentyfive").style.visibility = 'hidden'
    document.getElementById("twentysix").style.visibility = 'hidden'
    document.getElementById("twentyseven").style.visibility = 'hidden'
    document.getElementById("twentyeight").style.visibility = 'hidden'
    document.getElementById("twentynine").style.visibility = 'hidden'
    document.getElementById("thirty").style.visibility = 'hidden'
     
            // TODO: knöpfe hinzufügen
        }
        }
    
      
    
        dayHasStarted = !dayHasStarted;
        
        return newImageUrl;
    }
    
 
 
 
///////////////////////////////////////30 BUTTONS///////////////////////////////////////////
 
function clickRes(){

        document.getElementById('resback').style.visibility = 'visible'
        document.getElementById('back').style.visibility = 'hidden'
        for(var i = 0; i < resTxt.length; i++){
            resTxt[i].style.visibility = "visible";
          }
        for(var i = 0; i < resBtns.length; i++){
        resBtns[i].style.visibility = "visible";
        }
    }
 


    //////////////////////////////////////////////////////////////////////////////////////
 function loadResults(start, end) {
let nf = 0;
    for (let i = start; i <= end; i++) {
      if(nf <= 5){
      nf ++;
      const result = JSON.parse(sessionStorage.getItem(`day${i}`))

document.getElementById(`resnumberfield1${nf}`).innerText= Number(result?.waterAmount ?? 0);
      document.getElementById(`resmeditationhours${nf}`).innerText = Number(result?.meditationHours ?? 0);
      document.getElementById(`resmeditationmins${nf}`).innerText = Number(result?.meditationMinutes ?? 0);
      document.getElementById(`resnumberfield2${nf}`).innerText = Number(result?.walkedDistance ?? 0);
      document.getElementById(`resbookhours${nf}`).innerText = Number(result?.readingHours ?? 0);
      document.getElementById(`resbookmins${nf}`).innerText  = Number(result?.readingMinutes ?? 0);

      document.getElementById(`resnumberfield1${nf}`).innerText = String(result.waterAmount);
      document.getElementById(`resmeditationhours${nf}`).innerText = String(result.meditationHours).padStart(2, '0');
      document.getElementById(`resmeditationmins${nf}`).innerText = String(result.meditationMinutes).padEnd(2, '0');
      document.getElementById(`resnumberfield2${nf}`).innerText = String(result.walkedDistance);
      document.getElementById(`resbookhours${nf}`).innerText = String(result.readingHours).padStart(2, '0');
      document.getElementById(`resbookmins${nf}`).innerText = String(result.readingMinutes).padEnd(2, '0');}

}     

 }

    