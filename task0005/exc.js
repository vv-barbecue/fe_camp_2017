var xx=document.getElementById("xx");
var bw=document.getElementById("bw");
var img=document.getElementById("img");
xx.onclick=function(){
	img.src="xx.png";
	document.body.style.backgroundImage="url('xx-bg.png')";
	xx.style.backgroundImage="url('btn-blue.png')";
	bw.style.backgroundImage="url('btn-gray.png')";
}
bw.onclick=function(){
	img.src="bw.png";
	document.body.style.backgroundImage="url('bw-bg.png')";
	xx.style.backgroundImage="url('btn-gray.png')";
	bw.style.backgroundImage="url('btn-blue.png')";
}
