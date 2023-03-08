// Yandex Maps API
// https://yandex.ru/dev/maps/jsapi/doc/2.1/quick-start/index.html
const OBJECT_COORDINATES = [55.80341968368738, 37.40976016931149];
const ZOOM_DEFAULT = 17;

// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
ymaps.ready(init);

// Функция инициализации Yandex карты
function init() {
  // Создание карты.
  var myMap = new ymaps.Map('map', {
    // Координаты центра карты.
    // Порядок по умолчанию: «широта, долгота».
    center: OBJECT_COORDINATES,
    // Уровень масштабирования. Допустимые значения:
    // от 0 (весь мир) до 19.
    zoom: ZOOM_DEFAULT,
    controls: [
      'geolocationControl',
      'routeButtonControl',
      'typeSelector',
      'fullscreenControl',
      'zoomControl',
    ],
  });
  // Убирает скролл карты колесиком мыши.
  myMap.behaviors.disable('scrollZoom');

  const routeControl = myMap.controls.get('routeButtonControl');
  routeControl.routePanel.state.set({
    toEnabled: false,
    to: OBJECT_COORDINATES,
  });
}
