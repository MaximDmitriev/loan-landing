ymaps.ready(function () {
  const map = new ymaps.Map('map', {
          center: [54.727968, 20.466335],
          zoom: 13,
          controls: ['smallMapDefaultSet']
      });
  const MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
        `<div class="map-div">
            <img src="./img/icons/placeholder.png"></img>
            г. Калининград, <br>ул. Банковская, 12, оф. 5
        </div>`
    );

  const myPlacemarkWithContent = new ymaps.Placemark([54.727968, 20.466335], {

    }, {
        iconLayout: 'default#imageWithContent',
        iconImageSize: [0, 0],
        iconImageOffset: [0, 0],
        iconContentOffset: [-95, -40],
        iconContentLayout: MyIconContentLayout
    });

    map.geoObjects.add(myPlacemarkWithContent);
    map.behaviors.disable('scrollZoom');
});
