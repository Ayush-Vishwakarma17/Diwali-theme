gsap.to("#pageone #Text ",{
    opacity: 0,
    duration: 1,
    transform: "translateY(40%)",
scrollTrigger:{
    tirgger: "#pageone",
    scroller: "body",
    scrub: 1,
    start: "0%",
    end: "20%",
}
})
gsap.from(".page2 #card",{
    opacity: 0,
    scale: 0,
    duration: 1,
    scrollTrigger:{
      trigger: "#page2",
      scroller: "body",
     
      stagger:1,
      scrub: 1.2,
    }
})
gsap.to(".page2 #card",{
    scrollTrigger:{
      trigger: "#page2",
      scroller: "body",
      start: "top 5%",
      end: "20%",
      scrub: 1.2,
    }
})
gsap.from("#pageone .card1",{
  opacity: 0,
  transform: "translateX(26%)",
scrollTrigger:{
  tirgger: "#pageone",
  scroller: "body",
  scrub: 1.3,
  start: "0%",
  end: "20%",
}
})
gsap.from("#textgg",{
opacity: 0,
scrollTrigger:{
  trigger: "h1",
  scroller: "body",
  scrub: 2,
}
})
gsap.from("#img4",{
  opacity: 0,
  scale: 0,
  transform: "translateX(26%)",
scrollTrigger:{
  tirgger: "#pageone",
  scroller: "body",
  scrub: 1.3,
  start: "0%",
  end: "70%",
  }
})
gsap.from(".page2 #midtext",{
  opacity: 0,
  transform: "translateX(-50%)",
  scrollTrigger:{
  trigger: "#midtext",
  scroller: "body",
  top: "0%",
  end: "0%",
  scrub: 1.3,
  }
})
gsap.from(".page3 .item",{
  opacity: 0,
  scrollTrigger:{
    trigger: ".page3",
    scroller: "body",
    top: "10%",
    end: "20%",
    scrub: 1.2,
  }
})
gsap.from(".page3 #texth1",{
  opacity: 0,
  scale: 0,
  scrollTrigger:{
    trigger: "#texth1",
    scroller: "body",
    scrub: 1.2,
  }
})