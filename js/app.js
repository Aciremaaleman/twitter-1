var boxText = document.getElementById("boxText");
var wordCount = document.getElementById("wordCount");
var button = document.getElementById("nt-submit");

boxText.addEventListener("keyup",function(){
	var characters = boxText.value.split('',140);
  wordCount.innerText = characters.length;
});

boxText.addEventListener("keyup", counter);


function counter() {
	 var characters = boxText.value.split('');
	 console.log(characters.length);
	 wordCount.innerText = 140 - (characters.length);
    if (characters.length >= 121 && characters.length < 130) {
        wordCount.style.color = 'yellow';
    } else if (characters.length >= 131 && characters.length < 140) {
        wordCount.style.color = 'red';
    } else if (characters.length < 120) {
        wordCount.style.color = 'black';
    }
    if (characters.length > 0) {
        button.removeAttribute('disabled')
        button.style.backgroundColor = 'blue';
    }
    if (boxText.value == '' || boxText.value[0] == "\n" || characters.length > 140) {
        button.setAttribute('disabled', 'true');
        button.style.backgroundColor = 'grey';
    }
}
//counter();

//}
//Fin de la conversación de chat
//Escribe un mensaje...

//Elegir archivos
