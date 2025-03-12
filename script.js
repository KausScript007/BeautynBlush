var crsr = document.querySelector("#cursor");
var blur = document.querySelector("#cursor-blur");


document.addEventListener("mousemove", function(dets){
    crsr.style.left = dets.x + "px";
    crsr.style.top = dets.y + "px";
    blur.style.left = dets.x - 250 + "px";
    blur.style.top = dets.y - 250 + "px";
});

gsap.to("#nav", {
    backgroundColor: "#000",
    duration: 0.5,
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        //markers: true,
        start: "top -9%",
        end: "top -11%",
        toggleActions: "play none none reverse"
    }
});

gsap.to("#page2", {
    backgroundColor: "#000",
    opacity: 1,
    duration: 0.5,
    ease: "power2.inOut",
    scrollTrigger: {
        trigger: "#main",
        start: "top top",
        end: "top -100%",
        scrub: true
    }
});


