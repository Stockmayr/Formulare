//Abflughafen
window.addEventListener('load', () => {
    document.getElementById("abflughafen").addEventListener('dblclick', textCorrect);
    });

//textCorect
function textCorrect() {
let text = [];
text = document.getElementById("abflughafen").value;
alert("type of noNum is " + typeof text); 

}