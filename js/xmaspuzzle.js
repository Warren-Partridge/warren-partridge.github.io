// This file contains the answers, just obfuscated a bit so they don't jump out at you. This isn't part of the puzzle
// so I'd discourage reading further if you want to solve the puzzle naturally

function checkAnswer() {
    var value = document.getElementById("answer-input").value.toLowerCase(); // Get input
    value = value.replace(/\s+/g, ''); // Regex away any whitespace
    value = md5(value.toLowerCase()); // Hash input

    if (value === "bc180dbc583491c00f8a1cd134f7517b") { // Compare hashed answer
        window.alert("You've got it. Click ok.");
        window.location.href = "https://soundcloud.com" +
            "/nick-partridge-704468664" +
            "/clue" + "/s-s1L5u";

    } else if (value === "50f889c1bbfbe5023091f2fa6274f1a4") {
        window.alert("Almost! From where?");
    } else {
        window.alert("Not exactly... try again");
    }
}