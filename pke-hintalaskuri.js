/*
  PKE Tilitoimiston Hintalaskuri demo. Yksinkertaistettu versio.
  Toimintoja ja validointi puuttuu. Tuotantoversiossa täydet hinnoitteluehdot ja kenttien validointi.

  Toteutus: Jussi Kajalin
*/

let myyntilaskutField = document.getElementById('myyntilaskut-field01');
let ostolaskutField = document.getElementById('ostolaskut-field01');
let kuititField = document.getElementById('kuitit-field01');
let tapahtumatField = document.getElementById('tapahtumat-total-field01');
let palkatField = document.getElementById('palkat-field01');
let hintaLbl = document.getElementById('hinta-lbl');

let myyntilaskutValue;
let ostolaskutValue;
let kuititValue;
let tapahtumatValue;

let palkatValue;
let hintaTotalValue;

let tositteetTotalField = document.getElementById('tositteet-total-field01');
let hintaTotalField = document.getElementById('hinta-total-field01');

myyntilaskutField.addEventListener("blur", laskeHinta, true);
ostolaskutField.addEventListener("blur", laskeHinta, true);
kuititField.addEventListener("blur", laskeHinta, true);
palkatField.addEventListener("blur", laskeHinta, true);

laskeHinta();

function laskeHinta(){
  
  myyntilaskutValue = Number(myyntilaskutField.value);
  ostolaskutValue = Number(ostolaskutField.value);
  kuititValue = Number(kuititField.value);

  tapahtumatValue = (myyntilaskutValue + ostolaskutValue + kuititValue) * 3;
  tapahtumatField.value = tapahtumatValue;

  palkatValue = Number(palkatField.value);

  tositteetTotalField.value = myyntilaskutValue + ostolaskutValue + kuititValue;
  if (tapahtumatValue <= 80) {
    hintaTotalValue = 275; 
  }else if (tapahtumatValue > 80 && tapahtumatValue <= 100) {
    hintaTotalValue = 288; 
  }else if (tapahtumatValue > 100 && tapahtumatValue <= 120) {
    hintaTotalValue = 340;
  }else if (tapahtumatValue > 120 && tapahtumatValue <= 130) {
    hintaTotalValue = 354;
  }
  else{
    hintaTotalValue = 2000;    
  }
  
  if( palkatValue > 0 ){
    hintaTotalValue += Number( palkatValue ) *35;
  }

  hintaTotalField.value = hintaTotalValue;
  if( tapahtumatValue > 0 ){
    hintaLbl.innerText = "~ Hinta: " + hintaTotalValue + " € / kk";
  }
}