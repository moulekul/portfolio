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