let images = document.querySelectorAll("img[data-src]"); //gather the data for pictures

const loadImages = (image) => {
  image.setAttribute("src", image.getAttribute("data-src"));
  image.onload = () => {
    image.removeAttribute("data-src");
  };
};

const callback = (items, observer) => {
  items.forEach((item) => {
    if (item.isIntersecting) {
      loadImages(item.target);
      observer.unobserve(item.target);
    }
  });
};

let options = {
  threshold: 0.1,
};

const observer = new IntersectionObserver(callback, options);

images.forEach((img) => {
  observer.observe(img);
});

// if you ever forget how you did this refer to:  https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Loading