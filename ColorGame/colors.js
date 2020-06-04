function generateColors(){
document.querySelector(".head").style.backgroundColor="rgb(25, 88, 186)";
var colors=[
"rgb("+Math.floor(Math.random()*256)+", "+Math.floor(Math.random()*256)+", "+Math.floor(Math.random()*256)+")",
"rgb("+Math.floor(Math.random()*256)+", "+Math.floor(Math.random()*256)+", "+Math.floor(Math.random()*256)+")",
"rgb("+Math.floor(Math.random()*256)+", "+Math.floor(Math.random()*256)+", "+Math.floor(Math.random()*256)+")",
"rgb("+Math.floor(Math.random()*256)+", "+Math.floor(Math.random()*256)+", "+Math.floor(Math.random()*256)+")",
"rgb("+Math.floor(Math.random()*256)+", "+Math.floor(Math.random()*256)+", "+Math.floor(Math.random()*256)+")",
"rgb("+Math.floor(Math.random()*256)+", "+Math.floor(Math.random()*256)+", "+Math.floor(Math.random()*256)+")"
];

var selectedColor=Math.floor(Math.random()*6);
console.log(selectedColor);
var squares=document.querySelectorAll(".square");

var question=document.querySelector(".question");
question.textContent=colors[selectedColor];

for(var i=0;i<squares.length;i++){
	squares[i].style.backgroundColor=colors[i];


	squares[i].addEventListener("click",function(){
		if(this.style.backgroundColor===colors[selectedColor]){
			document.querySelector(".message").textContent="Yes, you are correct, the color is "+colors[selectedColor];
			changeColors(colors[selectedColor]);
			document.querySelector(".head").style.backgroundColor=colors[selectedColor];
			
		}
		else{
			document.querySelector(".message").textContent="Oops,try again"
			this.style.backgroundColor="#232323";
			
		}
	});
}
}

generateColors();

document.querySelector(".button").addEventListener("click",function(){
location.reload();

});

function changeColors(color){

	var sq=document.querySelectorAll(".square");

	for(var i=0;i<sq.length;i++){
		sq[i].style.backgroundColor=color;
	}

}



