ymaps.ready(function () {
  const map = new ymaps.Map('map', {
          center: [54.731597, 20.487724],
          zoom: 13,
          controls: ['smallMapDefaultSet']
      });
  const MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
        `<div class="map-div">
            <img src="./img/icons/placeholder.png"></img>
            г. Калининград, <br>Советский пр-кт, д.59
        </div>`
    );

  const myPlacemarkWithContent = new ymaps.Placemark([54.731597, 20.487724], {

    }, {
        iconLayout: 'default#imageWithContent',
        iconImageSize: [0, 0],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [0, 0],
        // Смещение слоя с содержимым относительно слоя с картинкой.
        iconContentOffset: [-95, -40],
        iconContentLayout: MyIconContentLayout
    });

    map.geoObjects.add(myPlacemarkWithContent);
});
