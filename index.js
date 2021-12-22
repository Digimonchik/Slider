const slidesArray = document.querySelectorAll(".slide");
const clearInterval = () => {
  slidesArray.forEach((element) => {
    element.classList.remove("active");
  });
};
slidesArray.forEach((element) => {
  element.addEventListener("click", () => {
    clearInterval(), element.classList.add("active");
  });
});
