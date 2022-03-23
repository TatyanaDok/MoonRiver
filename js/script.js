$(document).ready(function () {
  $(".slider").slick({
    arrows: true,
    dots: true,
    slidesToShow: 4,
    touchMove: true,
    centerMode: true,
    variableWidth: true,
  });
});
const popup = document.querySelector(".popup");
const openPopupButton = document.querySelector(".menu__burger");
const popupCloseButton = document.querySelector(".popup__close-button");
const openPopup = () => {
  popup.classList.add("popup_is-opened");
};
openPopupButton.addEventListener("click", function (e) {
  openPopup();
});
const closePopup = () => {
  popup.classList.remove("popup_is-opened");
};
popupCloseButton.addEventListener("click", function (e) {
  closePopup();
});
