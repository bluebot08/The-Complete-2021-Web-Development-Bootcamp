var characterLimit = 140;
var messageLength;
var remainingCharacters;

alert(
  "This will count how many characters your message has and the remaining characters left based on a 140 character limit"
);

var yourMessage = prompt("Please enter your message");

messageLength = yourMessage.length;

remainingCharacters = characterLimit - messageLength;

alert(
  "Your message contains a total of " +
    messageLength +
    " characters. You have " +
    remainingCharacters +
    " characters left."
);

messageTrimmed = yourMessage.slice(0, 140);

alert(
  "Your message shortened to meet the 140 character limit is as follows: " +
    messageTrimmed
);
