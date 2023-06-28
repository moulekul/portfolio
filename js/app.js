window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

const readMore = document.querySelector(".read-more__link");
const aboutSection = document.querySelector(".about");
let toggle = false;

readMore.addEventListener("click", (e) => {
    aboutSection.classList.toggle("about__open");
    if (!toggle) {
      readMore.textContent = "That's enough!";
      toggle = true;
    } else {
      readMore.textContent = "About Me";
      toggle = false;
    }
  });

const timeline = gsap.timeline({ defaults: { duration: 1 } });
timeline
.from(".navbar", { x: "-100%" }, 0.2)
.from(
  ".nav-item", 
  { 
    x: "-100%", 
    stagger: 0.1, 
    ease: "power" 
  }, 
  1
)
.from(".heading-text1", { opacity: 0 }, 0.5)
.from(".heading-text2", { opacity: 0 }, 0.7)
.from(".heading-text3", { opacity: 0 }, 0.9)
.from(".heading-text4", { opacity: 0 }, 1.1)
.from(
  ".heading-line", 
  { 
    y: "10px", 
    opacity: 0 
  }, 
  1.5
)
.from(
  ".read-more__link", 
  { 
    y: "10px", 
    opacity: 0 
  }, 
  1.5
)
.to(
  ".read-more__link", 
  { 
    y: "0px", 
    opacity: 1 
  }, 
  1.5
)
.from(
  ".portfolio", 
  { 
    opacity: 0 
  }, 
  1.8
)


