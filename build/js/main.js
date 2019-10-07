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

function openAccordion(element) {
  element.classList.remove('inactive');
  element.classList.add('active');
  element.querySelector('.wrp').style.display = 'flex';
}

function closeAccordion(element) {
  element.classList.remove('active');
  element.classList.add('inactive');
  element.querySelector('.wrp').style.display = 'none';
}

var allAccordions = document.querySelectorAll('.accordion');
var i;
var length = allAccordions.length;

for (i = 0; i < length; i++) {
  allAccordions[i].addEventListener('click', function (evt) {
    var element = evt.currentTarget;
    allAccordions.forEach(function (item) {
      closeAccordion(item);
    });
    openAccordion(element);
  });
}
