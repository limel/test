const refs = {
  prevBtn: document.querySelector(".hero__button-change--left"),
  nextBtn: document.querySelector(".hero__button-change--right"),
  pagiinationList: document.querySelector(".pagination"),
};

console.log(refs.pagiinationList);
console.log(refs.nextBtn);
console.log(refs.prevBtn);

refs.prevBtn.addEventListener("click", () => {
  console.log("click");
});
