//Steps
// Step 1 - Creare una const per il value dell'input "km".
const distanceKM = document.getElementById("distanceKM");
// Step 2 - Creare una const per il value dell'input "age".
const userAge = document.getElementById("userAge");
// Step 3 - Creare una const per il bottone.
const sendInfoButton = document.getElementById("send-info");
// Step 4 - Creare una const per il testo del biglietto
const ticketText = document.getElementById("ticket-text");

// Prezzo del biglietto
/* let finalPrice = distanceKM.value * 0.21; */

sendInfoButton.addEventListener("click", function () {
  let finalPrice = distanceKM.value * 0.21;

  const userAgeValue = parseInt(userAge.value);

  if (userAgeValue < 18) {
    finalPrice = finalPrice - (finalPrice * 20) / 100;
  } else if (userAgeValue >= 65) {
    finalPrice = finalPrice - (finalPrice * 40) / 100;
  }

  // aggiungerli al paragrafo ticket-text
  ticketText.innerHTML =
    "Il prezzo del tuo biglietto è " + finalPrice.toFixed(2) + " €";
  console.log(ticketText.innerHTML);

  // Per liberare gli input in modo pulito
  distanceKM.value = "";
  userAge.value = "";
});
