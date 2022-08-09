// gsap.to("#docs1", {
//   duration: 2,
//   y: -55,
//   ease: "none",
//   repeat: -1,
//   repeatDelay: 0,
//   yoyo: true,
// });



// gsap.to("#boxes", {
//   duration: 1,
//   x: -105,
//   ease: "none",
//   repeat: -1,
//   repeatDelay: 0,
//   yoyo: true,
// });









const visible = (item) => {
let tl = new TimelineMax()
tl.to(item, .5, {
scale: 1,
autoAlpha: 1,
ease: Elastic.easeOut.config(1, 0.75)
})
return tl;
}

const bars = (item) => {
let tl = new TimelineMax()
tl.staggerTo(item, 4, {
  scaleY: 0,
  transformOrigin: 'bottom 0%',
  yoyo: true,
  repeat: -1,
  ease:Power0.easeNone,
  stagger: {
    amount: 1.5
  }
})

return tl;
}

const hbars = (item) => {
let tl = new TimelineMax()
tl.staggerTo(item, 4, {
  scaleX: 0,
  transformOrigin: 'left 0%',
  yoyo: true,
  repeat: -1,
  ease:Power0.easeNone,
  stagger: {
    amount: 1.5
  }
})

return tl;
}


const devices = item => {
let tl = new TimelineMax()
tl.to(item, 2, {
  transformStyle:"preserve-3d",
  force3D: true,
  y: -40,
  yoyo: true,
  repeat: -1,
  ease: Power0.easeNone
})
return tl;
}



const lines = item => {
let tl = new TimelineMax()
tl.staggerTo(item, 2, {
  autoAlpha: 0,
  transformOrigin: 'center center',
  yoyo: true,
  repeat: -1,
  ease: Power0.easeNone,
  stagger:{
    amount: 1.5,
  }
})
return tl;
}



const master = new TimelineMax({delay: .5});

master.timeScale(1.5)
master.add('s')



// master.add(lines("#cog1"), 's+1.1')
// master.add(lines("#wifi1"), 's+1.1')
// master.add(lines("#wifi2"), 's+1.1')
// master.add(lines("#wifi3"), 's+1.1')
// master.add(lines("#wifi4"), 's+1.1')
// master.add(bars("#bar2"), 's+1.1')
// master.add(bars("#bar22"), 's+1.1')
// master.add(bars("#bar23"), 's+1.1')
// master.add(bars("#bar24"), 's+1.1')
// master.add(bars("#bar25"), 's+1.1')

// master.add(bars("#line1"), 's+1.1')
// master.add(bars("#line2"), 's+1')
// master.add(bars("#line3"), 's+1.1')
// master.add(bars("#line4"), 's+1.1')







