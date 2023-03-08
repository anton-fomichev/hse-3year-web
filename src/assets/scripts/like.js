const LIKE_CLASS = '.like';
const COUNT_CLASS = '.likes-count';
const BUTTON_CLASS = '.button-like';
const likes = document.querySelectorAll(LIKE_CLASS);

/**
 * Функция меняет значение счетчика лайка и класс иконки (active)
 * @param {*} evt - срабатываемое событие
 */
const handleClick = (evt) => {
  evt.preventDefault();
  if (evt && evt.target) {
    const like = evt.target.closest(LIKE_CLASS);
    if (like) {
      like.classList.toggle('active');
      const count = like.querySelector(COUNT_CLASS);
      count.innerHTML =
        Number(count.innerHTML) + (like.classList.contains('active') ? 1 : -1);
    }
  }
};

likes.forEach((like) => {
  const button = like.querySelector(BUTTON_CLASS);
  button.addEventListener('click', handleClick);
});
