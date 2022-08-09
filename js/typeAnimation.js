var animate = function(text) {
  var textSplit = SplitText.create(text, { type: "chars,words" });
  return gsap.from(textSplit.chars, { duration:.7, visibility:"hidden", stagger: 0.4 ,repeat:-1, repeatDelay: 2, ease: "ease.in"} );
};

// animate('header .grow h2');
// animate('header .adapt h2');
// animate('header .thrive h2');