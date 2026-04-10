function scrollToSection(){
    document.getElementById("features").scrollIntoView({behavior:"smooth"});
}

const elements = document.querySelectorAll('.fade');

function reveal(){
    const trigger = window.innerHeight * 0.8;

    elements.forEach(el=>{
        const top = el.getBoundingClientRect().top;

        if(top < trigger){
            el.classList.add('show');
        }
    });
}

window.addEventListener('scroll', reveal);
window.addEventListener('load', reveal);

/* Steam Effect */
for(let i=0;i<10;i++){
    let steam=document.createElement("div");
    steam.classList.add("steam");
    steam.style.left=Math.random()*100+"%";
    steam.style.top="300px";
    steam.style.animationDelay=Math.random()*5+"s";
    document.body.appendChild(steam);
}