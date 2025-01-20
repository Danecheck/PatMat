// odkazy na HTML objekty
const figurky = document.getElementById("figurky");
const pocetPat = document.getElementById("pocetPat");
const pocetMat = document.getElementById("pocetMat");

// kód vykreslení obrázků
const pat = "<img src='img/pat.png'>";
const mat = "<img src='img/mat.png'>";

let kodFigurek = "";
let i=0;
let patMat = false;
let pPat=0 ; 
let pMat=0;

while (i<Math.random()*20) {
  i++;
  if (Math.random()<0.5){
    kodFigurek += "<div>" + pat + "</div>";
    pPat++;
  }else {
    kodFigurek += "<div>" + mat + "</div>";
    pMat++;
  }
  //i++;
  //kodFigurek += "<div>" + (patMat ? pat + mat : mat + pat) + "</div>";
}

figurky.innerHTML = kodFigurek; // vloží kód řady obrázků, kterou požadujeme vykreslit
pocetPat.innerText = pPat;         // vypíše počet vykreslených figurek Pata (všech deset)
pocetMat.innerText = pMat;         // vypíše počet vykreslenách figurek Mata (10)