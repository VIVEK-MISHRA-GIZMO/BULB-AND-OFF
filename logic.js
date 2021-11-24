const on=document.querySelector(".button-on")
const off=document.querySelector(".button-off")


on.addEventListener('click',()=>{
    document.getElementById('on').src="./imges/bulb-on.png"
})
off.addEventListener('click',()=>{
    document.getElementById('on').src="./imges/bulb-off.png"
})


