var lastre = document.getElementsByClassName("lastra");
var corrente = 0;

lastre[0].className = "lastra l1 visibile";

function mostra(n) {
  for (var i = 0; i < lastre.length; i++) {
    lastre[i].className = "lastra l" + (i + 1);
  }
  lastre[n].className = "lastra l" + (n + 1) + " visibile";
}

function avanti() {
  corrente = corrente + 1;
  if (corrente > 2) corrente = 0;
  mostra(corrente);
}

function indietro() {
  corrente = corrente - 1;
  if (corrente < 0) corrente = 2;
  mostra(corrente);
}

setInterval(avanti, 4000);

function apri(n) {
  var corpi = document.getElementsByClassName("corpo-voce");
  if (corpi[n].className.indexOf("mostra") > -1) {
    corpi[n].className = "corpo-voce";
  } else {
    corpi[n].className = "corpo-voce mostra";
  }
}

document.getElementById("prenotazione").onsubmit = function (e) {
  e.preventDefault();

  var nome = document.getElementById("p_nome").value;
  var mail = document.getElementById("p_mail").value;
  var persone = document.getElementById("p_persone").value;
  var conferma = document.getElementById("conferma");

  if (nome.length < 2) {
    conferma.innerHTML = "Manca il nome";
    return;
  }
  if (mail.length < 5) {
    conferma.innerHTML = "Manca l'email";
    return;
  }

  conferma.innerHTML = "Prenotazione ricevuta per " + persone + " persone. Ti confermiamo il posto per email.";
};
