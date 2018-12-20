# Photo Slider

<p class="lead">A slideshow component for cycling through photos, that can be displayed in larger view when clicking on the images.</p>

Previous and Next arrows are built using [material design icons](https://materialdesignicons.com/).

This is a responsive component, in small viewports will display only one image at a time and the Prev and Next arrows will be hidden.

Complement with the **Image Modal** component to display the images in large view.

<!-- STORY -->

```html
<div class="photo-slider" {...photoSlider.settings}>
  <figure data-toggle="modal" data-target={'#img-modal-' + (index + 1)}>
    <img src={item.src} alt={item.desc} class="img-fluid"/>
    <figcaption>
      {item.desc}
    </figcaption>
  </figure>
</div>
```

### Required Javascript

The component is based on Slick, please reffer to [its website](http://kenwheeler.github.io/slick/) to see the documentation.

```js
$(function () {

  $('.js-photo-gallery').slick({
      mobileFirst: true,

      arrows: false,
      dots: true,

      responsive: [
          {
              breakpoint: 992,
              settings: {
                  arrows: true,
                  prevArrow: '<i class="mdi mdi-lg mdi-chevron-left" aria-hidden="true"/>',
                  nextArrow: '<i class="mdi mdi-lg mdi-chevron-right" aria-hidden="true"/>',
                  centerMode: true,
                  centerPadding: 0,
                  slidesToShow: 3
              }
          }
      ]
  });

  $('#img-modal').on('show.bs.modal', function (event) {
      const $figure = $(event.relatedTarget);
      const imageSrc = $figure.find('> img').attr('src');
      const $modal = $(this);

      $modal.find('img').attr('src', imageSrc);
  });

});
```
