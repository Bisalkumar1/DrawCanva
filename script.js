const canvas=document.getElementById('canvas');
const increasebtn=document.getElementById('increase');
const decreasebtn=document.getElementById('decrease');
const size=document.getElementById('size');
const color=document.getElementById('color');
const clear=document.getElementById('clear');

const ctx=canvas.getContext('2d');

let sizee=10
let ispressed =false
color.value='black'
let colorr=color.value
let x
let y

canvas.addEventListener('mousedown',(e)=>{
    ispressed=true
    x=e.offsetX
    y=e.offsetY
 
})

document.addEventListener('mouseup',(e)=>{
    ispressed=false
    x=undefined
    y=undefined 
})

canvas.addEventListener('mousemove',(e)=>{
    if(ispressed){
        const x2=e.offsetX
        const y2=e.offsetY 
        
        drawCircle(x2,y2)
        drawLine(x,y,x2,y2)
        x=x2
        y=y2
    }
})

function drawCircle(x,y){
    ctx.beginPath();
    ctx.arc(x,y,sizee,0,Math.PI*2)
    ctx.fillStyle=colorr
    ctx.fill()
}

function drawLine(x1,y1,x2,y2){
    ctx.beginPath()
    ctx.moveTo(x1,y1)
    ctx.lineTo(x2,y2)
    ctx.strokeStyle=colorr
    ctx.lineWidth=sizee*2
    ctx.stroke()

}

function updateSizeOnScreen(){
    size.innerText=sizee;
}

increasebtn.addEventListener('click',()=>{
    sizee+=5
    if(sizee>50){
        sizee=50;
    }
    updateSizeOnScreen()
})

decreasebtn.addEventListener('click',()=>{
    sizee-=5;
    if(sizee <5){
        sizee=5
    }
    updateSizeOnScreen()
})

color.addEventListener('change',(e) => colorr=e.target.value)
clear.addEventListener('click',()=> ctx.clearRect(0,0,canvas.width,canvas.height))