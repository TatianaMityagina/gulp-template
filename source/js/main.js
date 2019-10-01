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
};

var closePopup = function () {
  setup.classList.add('hidden');
  overlay.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
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

//Скролл

function scrollDown () {
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
