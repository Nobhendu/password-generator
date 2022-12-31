const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"];

let passEl1 = document.getElementById("passwd-1")
let passEl2 = document.getElementById("passwd-2")
let inputEl = document.getElementById("pass-len")

let charlen = characters.length
let passlen = 15

function randarr() {
    let arr = []
    let randnum = 0
    for(let i = 0; i < passlen; i++) {
        randnum = Math.floor(Math.random() * charlen)
        arr.push(characters[randnum])
    }
    return arr
}

function printpass(elName, passwd) {
    for (let i = 0; i < passlen; i++) {
        elName.textContent += passwd[i]
    }
}

function passerror() {
    passEl1.textContent = '<LENGTH OUT OF RANGE>'
    passEl2.textContent = '<LENGTH OUT OF RANGE>'
}

function passgen() {
    passEl1.textContent = ''
    passEl2.textContent = ''
    passlen = inputEl.value
    if (passlen < 3 || passlen > 25) {
        passerror()
        document.getElementById("pass-len").value = ''
    } else {
        const pass1 = randarr()
        const pass2 = randarr()
        printpass(passEl1, pass1)
        printpass(passEl2, pass2)
    }
}

function passreset() {
    passEl1.textContent = ''
    passEl2.textContent = ''
    document.getElementById("pass-len").value = ''
}