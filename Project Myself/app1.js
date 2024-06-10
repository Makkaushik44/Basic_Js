const button=document.querySelector("button");
const body=document.querySelector("body")
const color=["red","green","pink","aqua","blue"]

button.addEventListener('click',changeB)

function changeB(){
    const randomColor=parseInt(Math.random()*color.length);
    body.style.backgroundColor=color[randomColor]

}