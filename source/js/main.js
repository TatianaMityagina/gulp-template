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

var elem = document.querySelectorAll('.accordion'); //дементы по которым будет действие клика

var i;
var length = elem.length;

for (i = 0; i < length; i++) {
  elem[i].addEventListener('click', function () {
    for (i = 0; i < length; i++) {
      elem[i].addEventListener('click', function () {
        var allItems = document.querySelectorAll('.wrp'); //сначала нахоим все элементы .wrp
        Array.from(allItems).forEach(function (item) {
          item.classList.remove('active'); //удалаем всем .wrp класс active
          item.classList.add('inactive');
        });
        Array.from(elem).forEach(function (item) {
          item.classList.add('inactive');
        });
        this.classList.remove('inactive');
        this.querySelector('.wrp').classList.add("active"); //находим ребенка кликнутого элемента и даем класс active
        this.querySelector('.wrp').classList.remove("inactive");
      });
    }
  });
}
