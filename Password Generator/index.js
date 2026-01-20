const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];



function randomIndex() {
    let randomCharacter = Math.floor(Math.random() * characters.length);
    let letterVaule = characters[randomCharacter]
    return letterVaule
}

function generatePassword(length) {
    let password = []
    while (password.length < length) {
        password.push(randomIndex());
    }
    return password.join("")
};


function editHTML() {
    const btn = document.querySelector(".cta");
    const box1 = document.querySelector("#pw1");
    const box2 = document.querySelector("#pw2");

    btn.addEventListener("click", () => {
        box1.value = generatePassword(length);
        box2.value = generatePassword(length);
    });
}

editHTML();