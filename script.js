//Abflughafen
window.addEventListener('load', () => {
    let form = "abflughafen";
    let num = "one";
    document.getElementById("abflughafen").addEventListener('dblclick', function(){noText(form, num)});
});

//Reiseziel
window.addEventListener('load', () => {
    let form = "reiseziel";
    let num = "two";
    document.getElementById("reiseziel").addEventListener('dblclick', function(){noText(form, num)});
});

//Abflugdatum
window.addEventListener('load', () => {
    let form = "abflugdatum";
    let num = "three";
    document.getElementById("abflugdatum").addEventListener('dblclick', function(){noText(form, num)});
});

//Rueckflugdatum
window.addEventListener('load', () => {
    let form = "rueckflugdatum";
    let num = "four";
    document.getElementById("rueckflugdatum").addEventListener('dblclick', function(){noText(form, num)});
});

//Vorname
window.addEventListener('load', () => {
    let form = "vorname";
    let num = "five";
    document.getElementById("vorname").addEventListener('dblclick', function(){noText(form, num)});
});

//Vorname
window.addEventListener('load', () => {
    let form = "vorname";
    let num = "five";
    document.getElementById("vorname").addEventListener('dblclick', function(){noText(form, num)});
});

//Nachname
window.addEventListener('load', () => {
    let form = "nachname";
    let num = "six";
    document.getElementById("nachname").addEventListener('dblclick', function(){noText(form, num)});
});

//Email
window.addEventListener('load', () => {
    let form = "email";
    let num = "seven";
    document.getElementById("email").addEventListener('dblclick', function(){noText(form, num)});
});

//Geburtstag
window.addEventListener('load', () => {
    let form = "bday";
    let num = "eight";
    document.getElementById("bday").addEventListener('dblclick', function(){noText(form, num)});
});

//Passwort
window.addEventListener('load', () => {
    let form = "passwort";
    let num = "nine";
    document.getElementById("passwort").addEventListener('dblclick', function(){noText(form, num)});
});

//Passwort verification
window.addEventListener('load', () => {
    let form = "passVer";
    let num = "ten";
    document.getElementById("passVer").addEventListener('dblclick', function(){noText(form, num)});
});



//no Text
function noText(form, num) {
    let error = "Bitte geben sie etwas ein"
    let text = document.getElementById(form).value;

    if (text == "") {
        document.getElementById(form).style.borderColor = "red";
        document.getElementById(num).innerHTML = error;
    }
    else {
        document.getElementById(form).style.borderColor = "black";
        document.getElementById(num).innerHTML = "";
    }

} 