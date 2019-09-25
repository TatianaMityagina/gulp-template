'use strict';
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

var setup = document.querySelector('.feedback');
var overlay = document.querySelector('.overlay');
var setupOpen = document.querySelector('.user-list__link--call');
var setupClose = setup.querySelector('.feedback-close');
var setupUserName = setup.querySelector('.feedback__input-text--firstname');
var setupUserNameFocus = false;

// Окно закроется только в случае если оба условия true
var onPopupEscPress = function (evt) {
  if (!setupUserNameFocus && evt.keyCode === ESC_KEYCODE) {
    closePopup();
  }
};

// Определяем функцию при которой имя пользователя в фокусе
var onSetupUserNameFocus = function () {
  setupUserNameFocus = true;
};

// Определяем функцию при которой имя пользователя не в фокусе
var onSetupUserNameFocusout = function () {
  setupUserNameFocus = false;
};

var openPopup = function () {
  setup.classList.remove('hidden');
  overlay.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
  setupUserName.addEventListener('focus', onSetupUserNameFocus);
  setupUserName.addEventListener('focusout', onSetupUserNameFocusout);
};

var closePopup = function () {
  setup.classList.add('hidden');
  overlay.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
  setupUserName.removeEventListener('focus', onSetupUserNameFocus);
  setupUserName.removeEventListener('focusout', onSetupUserNameFocusout);
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

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});
