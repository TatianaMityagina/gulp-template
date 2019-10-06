'use strict';
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

var setup = document.querySelector('.modal');
var overlay = document.querySelector('.overlay');
var setupOpen = document.querySelector('.user-list__link--call');
var setupClose = setup.querySelector('.modal__close');

// Окно закроется только в случае если оба условия true
var onPopupEscPress = function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closePopup();
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');
  overlay.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
  document.body.style.overflow = 'hidden';
};

var closePopup = function () {
  setup.classList.add('hidden');
  overlay.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
  document.body.style.overflow = 'visible';
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

overlay.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

// Скролл

function scrollDown() {
  var windowCoords = document.body.clientHeight - document.documentElement.clientHeight;
  (function scroll() {
    if (window.pageYOffset < windowCoords) {
      window.scrollBy(0, 50);
      setTimeout(scroll, 0);
    }
    if (window.pageYOffset > windowCoords) {
      window.scrollTo(0, windowCoords);
    }
  })();
}

// Маска

var inputs = document.querySelectorAll("input[type='tel']");

inputs.forEach(function (input) {
  new IMask(input, {
    mask: '+{7}(000)000-00-00'
  });
});

// Аккардион


var navListElement = document.querySelectora(".navigation__list");
var navToogleElement = document.querySelector(".navigation__toggle");

var contactListElement = document.querySelector(".contacts__wrapper");
var contactToogleElement = document.querySelector(".contacts__toggle");

var accordion = function () {
  if (navToogleElement.classList.contains("navigation__toggle--open")) {
    navToogleElement.classList.remove("navigation__toggle--open");
    navToogleElement.classList.add("navigation__toggle--closed");
    contactToogleElement.classList.remove("navigation__toggle--closed");
    contactToogleElement.classList.add("navigation__toggle--open");
    navListElement.style.display = "block";
    contactListElement.style.display = "none";
  } else {
    navToogleElement.classList.add("navigation__toggle--open");
    navToogleElement.classList.remove("navigation__toggle--closed");
    navListElement.style.display = "none";
    contactToogleElement.classList.remove("navigation__toggle--closed");
    contactToogleElement.classList.add("navigation__toggle--open");
    contactListElement.style.display = "block";
  }
};

navToogleElement.addEventListener('click', function () {
  accordion();
});

contactToogleElement.addEventListener('click', function () {
  accordion();
});
