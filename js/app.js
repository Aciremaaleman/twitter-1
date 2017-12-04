var boxText = document.getElementById("boxText");
var wordCount = document.getElementById("wordCount");

boxText.addEventListener("keyup",function(){
	var characters = boxText.value.split('',140);
  wordCount.innerText = characters.length;
});
console.log(characters.length);