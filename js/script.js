console.log("connected");

const spans = document.querySelectorAll("h1 span");
spans.forEach((span) =>
  span.addEventListener("mouseover", function (e) {
    span.classList.add("animated", "runnerBand");
  })
);
spans.forEach((span) =>
  span.addEventListener("mouse", function (e) {
    span.classList.add("animated", "rubberBand");
  })
);

const htmlBar = document.querySelectorAll(".bar-html");
const cssBar = document.querySelectorAll(".bar-css");
const jsBar = document.querySelectorAll(".bar-javascript");
const reactBar = document.querySelectorAll(".bar-react");

let t1 = new TimelineLite();

t1.fromTo(
  htmlBar,
  0.75,
  { width: `calc(0% - 6px)` },
  { width: `calc(90% - 6px)`, ease: Power4.easeOut }
);
t1.fromTo(
  cssBar,
  0.75,
  { width: `calc(0% - 6px)` },
  { width: `calc(85% - 6px)`, ease: Power4.easeOut }
);
t1.fromTo(
  jsBar,
  0.75,
  { width: `calc(0% - 6px)` },
  { width: `calc(90% - 6px)`, ease: Power4.easeOut }
);
t1.fromTo(
  reactBar,
  0.75,
  { width: `calc(0% - 6px)` },
  { width: `calc(85% - 6px)`, ease: Power4.easeOut }
);

const controller = new ScrollMagic.Controller();
const scene = new ScrollMagic.Scene({
  triggerElement: ".skills",
  triggerHook: 0,
})
  .setTween(t1)
  .addTo(controller);

const showRequiredCategory = (event) => {
  const getId = event.getId;
  const links = document.querySelectorAll(".work-category button");
  for (let i = 0; i < links.length; i++) {
    if (links[i].hasAttribute("classs")) {
      links[i].classList.remove("active");
    }
  }
  event.classList.add("active");
  const getCategory = document.querySelectorAll(`.category-${getId}`);
  const categories = document.querySelectorAll('div[class^="category-"]');
  for (let i = 0; i < categories.length; i++) {
    if (categories[i].hasAttribute("class")) {
      categories[i].classList.remove("showCategory");
      categories[i].classList.add("hideCategory");
    }
  }
  getCategory.classList.remove("hideCategory");
  getCategory.classList.add("showCategory");
};
