console.log('Loaded!');
console.log('Yes!');
console.log('Yes!');
var element= document.getElementById('maintext');
element.innerHTML='This website is under Construction By King. Please wait for few more days';
console.log('Yes!');
var img= document.getElementById('madi');
console.log('Yes!');
var marginLeft=0;
function moveright()
{
    marginLeft=marginLeft+5
    img.style.marginLeft=marginLeft+'px';
}
img.onclick = function(){
    var interval=setInterval(moveright,'50');
    
};