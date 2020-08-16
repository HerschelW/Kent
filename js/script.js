console.log("connected");

const spans = document.querySelectorAll("h1 span");
spans.forEach((span) =>
  span.addEventListener("mouseover", function (e) {
    span.classList.add("animated", "rubberBand");
  })
);
spans.forEach((span) =>
  span.addEventListener("mouseout", function (e) {
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
  const getId = event.target.id;
  console.log(getId);
  const links = document.querySelectorAll(".work-category button");
  for (let i = 0; i < links.length; i++) {
    if (links[i].hasAttribute("class")) {
      links[i].classList.remove("active");
    }
  }
  event.target.classList.add("active");
  console.log(`.category-${getId}`);
  const test = "test";
  const getCategory = document.querySelectorAll(`.category-${getId}`);
  console.log(getCategory);
  const categories = document.querySelectorAll('div[class ^= "category-"]');
  for (let i = 0; i < categories.length; i++) {
    if (categories[i].hasAttribute("class")) {
      categories[i].classList.remove("showCategory");
      categories[i].classList.add("hideCategory");
    }
  }
  console.log(test);
  getCategory[0].classList.remove("hideCategory");
  getCategory[0].classList.add("showCategory");
};

document.querySelectorAll(
  "work-category button",
  addEventListener("click", () => showRequiredCategory(event))
);
