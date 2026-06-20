function result(){
    let changeColor=document.getElementById('text');
    changeColor.style.color="red";
    let bodyColor=document.getElementsByTagName('body')[0];
    bodyColor.style.backgroundColor="green";
}

let para=document.getElementById("paratext");
function changetextColor()
{
para.style.backgroundColor="#"+ Math.floor(Math.random() * 1677)
}
para.addEventListener('mouseover',changetextColor);