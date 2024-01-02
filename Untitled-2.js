


let fareq1 = document.querySelector(".fareq1")
let asm1 = document.querySelector(".asm1")
let fareq2 = document.querySelector(".fareq2")
let asm2 = document.querySelector(".asm2")

let datetimeS = document.querySelector(".datetimeS")
let datetimeE = document.querySelector(".datetimeE")

let StingChannel = document.querySelector(".StingChannel")
let StingMoalek = document.querySelector(".StingMoalek")

let StingDawry = document.querySelector(".StingDawry")
let Link = document.querySelector(".Link")

let finalCodeTeam = document.querySelector("#finalCodeTeam")
let finalCodeMobarah2 = document.querySelector("#finalCodeMobarah2")

let Code = 0;

function MakeCodeTeam() {
    fareq1Value = fareq1.value
    asm1Value = asm1.value
    fareq2Value = fareq2.value
    asm2Value = asm2.value
    
    datetimeSValue = datetimeS.value
    datetimeEValue = datetimeE.value
    StingChannelValue = StingChannel.value
    StingMoalekValue = StingMoalek.value
    StingDawryValue = StingDawry.value
    LinkValue = Link.value

     // قم بفصل التاريخ والوقت باستخدام وظائف JavaScript
     var datetime = new Date(datetimeSValue);
        
     // استخراج الساعات والدقائق
     var hours = datetime.getHours();
     var minutes = datetime.getMinutes();

     var timeMobarah = `${minutes} : ${hours}`

     Code = ` 
     

     
     <div class="match-container"> <a href="${LinkValue}" title="مشاهدة مباراة ${asm1Value} و ${asm2Value}">
    <div class="right-team">
        <div class="team-logo">
            
            <!-- صورة الفريق الاول -->
            <img alt="${asm1Value}" loading="lazy"
                src="${fareq1Value}" title="${asm1Value}" width="70" height="70">
        </div>

        <!-- اسم الفريق الاول -->
        <div class="team-name">${asm1Value}</div>
    </div>
    <div class="match-center">
        <div class="match-timing">

            <!-- موعد المباراة -->
            <div id="match-time" style="display: none;">${timeMobarah}</div>

            <!-- سكور المباراة -->
            <div id="result">0 - 0</div>

            <!-- حالة المبارة -->
            <div class="date end" data-start="${datetimeSValue}" data-gameends="${datetimeEValue}">
                انتهت المباراة</div>
        </div>
    </div>

    <div class="left-team">
        <div class="team-logo">

            <!--   صورة الفرييق الثاني-->
            <img alt="${asm2Value}" loading="lazy"
                src="${fareq2Value}" title="${asm2Value}" width="70" height="70">
        </div>

        <!-- اسم الفريق الثاني  -->
        <div class="team-name">${asm2Value}</div>
    </div>
    <div class="match-info">
        <ul>
            <!-- نوع الدوري  -->
            
            <li><span>${StingChannelValue}</span></li>
            <li><span>${StingMoalekValue}</span></li>
            <li><span>${StingDawryValue}</span></li>
        </ul>
    </div>
    <div class="overlay-match">
        <div class="text-match"></div>
    </div>
</a> </div>


`
console.log(datetimeSValue)

finalCodeMobarah2.value = Code
}


function MakeCodeMobarah() {
    fareq1Value = fareq1.value
    asm1Value = asm1.value
    fareq2Value = fareq2.value
    asm2Value = asm2.value
    
    datetimeSValue = datetimeS.value
    datetimeEValue = datetimeE.value
    StingChannelValue = StingChannel.value
    StingMoalekValue = StingMoalek.value
    StingDawryValue = StingDawry.value
    LinkValue = Link.value


     Code = ` 
     

     <div class="coMatch">
     <div class="backMatch">
       <div class="baMatch">
         <div class="colmd">
           <div class="teamlogo" style="background-image: url(${fareq1Value});"></div>
           <div class="teamname">${asm1Value}</div>
         </div>
         <div class="colmd ce"><div class="matchvs">VS</div></div>
         <div class="colmd">
           <div class="teamlogo" style="background-image: url(${fareq2Value});"></div>
           <div class="teamname">${asm2Value}<br></div>
         </div>
       </div>
     </div>
   </div>


`
console.log(datetimeSValue)

finalCodeTeam.value = Code

}



// copy Function 
function copyCodeTeam() {

  if(finalCodeTeam.value != ""){
    var textToCopy = finalCodeTeam.value

    var tempTextarea = document.createElement('textarea');
    tempTextarea.value = textToCopy;

    document.body.appendChild(tempTextarea);


    tempTextarea.select();
    document.execCommand('copy');

    document.body.removeChild(tempTextarea);

         alert('تم نسخ  بطاقة الفريقين !');
  }
    }



    function copyCodeMobarah() {

        if(finalCodeMobarah2.value != ""){
          var textToCopy = finalCodeMobarah2.value
      
          var tempTextarea = document.createElement('textarea');
          tempTextarea.value = textToCopy;
      
          document.body.appendChild(tempTextarea);
      
      
          tempTextarea.select();
          document.execCommand('copy');
      
          document.body.removeChild(tempTextarea);
      
               alert('تم نسخ كود المباراة !');
        }
          }