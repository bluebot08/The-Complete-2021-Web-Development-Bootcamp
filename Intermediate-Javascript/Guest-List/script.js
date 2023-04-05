const guestList = ["Stefan", "Yoshie", "Miko", "Dad", "Melissa"];

let guestName = prompt("What is your name?");

function checkGuestList(guestName) {
  if (guestList.includes(guestName)) {
    return alert("I found you on the list. Welcome to the party!");
  } else {
    return alert("Sorry I can't seem to find you on the guest list.");
  }
}

checkGuestList(guestName);
