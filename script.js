//Abflughafen
window.addEventListener('load', () => {
    let form = "abflughafen";
    let num = "one";
    document.getElementById("abflughafen").addEventListener('focus', function(){noText(form, num)});
});

//Reiseziel
window.addEventListener('load', () => {
    let form = "reiseziel";
    let num = "two";
    document.getElementById("reiseziel").addEventListener('focus', function(){noText(form, num)});
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
    document.getElementById("email").addEventListener('click', function(){noText(form, num)});
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
    document.getElementById("passwort").addEventListener('mouseleave', corPas);
});

//Passwort verification
window.addEventListener('load', () => {
    let form = "passVer";
    let num = "ten";
    document.getElementById("passVer").addEventListener('dblclick', function(){noText(form, num)});
    document.getElementById("passVer").addEventListener('mouseleave', corPas);
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

//Passwort vergleich
function corPas() {
    pas1 = document.getElementById("passwort").value;
    pas2 = document.getElementById("passVer").value;
    error = "Die Passwörter stimmen nicht überein"
    if (pas1 !== pas2) {
        document.getElementById("passwort").style.borderColor = "red";
        document.getElementById("nine").innerHTML = error;
        document.getElementById("passVer").style.borderColor = "red";
        document.getElementById("ten").innerHTML = error;
    }
    else {
        document.getElementById("passwort").style.borderColor = "black";
        document.getElementById("nine").innerHTML = "";
        document.getElementById("passVer").style.borderColor = "black";
        document.getElementById("ten").innerHTML = "";
    }
}