var boxText = document.getElementById("boxText");
var wordCount = document.getElementById("wordCount");

boxText.addEventListener("keyup",function(){
	var characters = boxText.value.split('',140);
  wordCount.innerText = characters.length;
});


function counter() {
    var characters = textArea.value.split('');
    counterNumber.innerText = 140 - (characters.length);
    if (characters.length >= 120 && characters.length < 130) {
        counterNumber.style.color = 'yellow';
    } else if (characters.length >= 130 && characters.length < 140) {
        counterNumber.style.color = 'red';
    } else if (characters.length < 120) {
        counterNumber.style.color = 'black';
    }
    if (characters.length > 0) {
        button.removeAttribute('disabled')
        button.style.backgroundColor = 'blue';
    }
    if (textArea.value == '' || textArea.value[0] == "\n" || characters.length > 140) {
        button.setAttribute('disabled', 'true');
        button.style.backgroundColor = 'grey';
    }
}
Fin de la conversación de chat
Escribe un mensaje...

Elegir archivos
