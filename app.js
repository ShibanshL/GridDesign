var main=document.querySelector("body")
window.addEventListener("load",()=>{
    var main=document.querySelector("body")
    main.style.clipPath="circle(50px at 50% 50%)"
    function a(){
        main.style.clipPath="circle(1000px at 50% 50%)"
        main.style.transition="1s ease-in-out"

    }
    var b=setTimeout(a,1000)

})

