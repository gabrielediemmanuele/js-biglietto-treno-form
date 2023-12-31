//Steps
// Step 1 - Creare una const per il value dell'input "km".
const distanceKM = document.getElementById("distanceKM");
// Step 2 - Creare una const per il value dell'input "age".
const userAge = document.getElementById("userAge");
// Step 3 - Creare una const per il bottone.
const sendInfoButton = document.getElementById("send-info");
// Step 4 - Creare una const per il testo del biglietto
const ticketText = document.getElementById("ticket-text");

// EXTRA - creare una const user name
const userName = document.getElementById("user-name");
const ticketName = document.getElementById("ticket-name");

// Prezzo del biglietto
/* let finalPrice = distanceKM.value * 0.21; */

sendInfoButton.addEventListener("click", function () {
  //CONTROLLO RIEMPIMENTO
  if (isNaN(distanceKM.value) || isNaN(userAge.value) || userName.value == "") {
    alert("Attenzione, qualcosa è andata male! Riprova!");
  }
  //SE IL RIEMPIMENTO è CORRETTO >
  else {
    let finalPrice = distanceKM.value * 0.21;

    ticketName.innerHTML = userName.value;

    const userAgeValue = parseInt(userAge.value);

    if (userAgeValue < 18) {
      finalPrice = finalPrice - (finalPrice * 20) / 100;
    } else if (userAgeValue >= 65) {
      finalPrice = finalPrice - (finalPrice * 40) / 100;
    }

    // aggiungerli al paragrafo ticket-text
    ticketText.innerHTML = finalPrice.toFixed(2) + " €";
    console.log(ticketText.innerHTML);

    // Per liberare gli input in modo pulito
    distanceKM.value = "";
    userAge.value = "";
    userName.value = "";
  }
});
