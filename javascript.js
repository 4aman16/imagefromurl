var button1=document.getElementById('button');
button1.addEventListener('click', function(e) {

var imageUrl=document.getElementById('url').value;
var img=document.createElement('img');
img.src=imageUrl;
img.style.width="400px";
img.style.height="400px";
img.style.padding="20px";

document.body.appendChild(img);
});