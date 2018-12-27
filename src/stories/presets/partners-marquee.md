# Partners Marquee

The `.partners-marquee` is a specific type of carousel used to display the Windidng Tree partners.

The carousel is based on Slick, please reffer to [its website](http://kenwheeler.github.io/slick/) to see the documentation.

<!-- STORY -->

```html
  <div class="partners-marquee js-partners-marquee">
    <h4 class="partners-marquee-title">Already joined us</h4>
    <img class="partners-marquee-img" src="partner.img" alt="..."/>
    ...
  </div>

  <div class="partners-marquee js-partners-marquee">
    <h4 class="partners-marquee-title">Already joined us</h4>
    <img class="partners-marquee-img" src="partner.img" alt="..."/>
    ...
  </div>

  <div class="partners-marquee js-partners-marquee">
    <h4 class="partners-marquee-title">Tech partners</h4>
    <img class="partners-marquee-img" src="partner.img" alt="..."/>
    ...
  </div>
</div>
```

### Required Javascript

```js
<script type="text/javascript">
  window.addEventListener('load', function() {
    $('.js-partners-marquee').each(function(index) {
      let slickOptions = {
        arrows: false,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: 'linear',
        draggable: false,
        pauseOnFocus: true,
        pauseOnHover: true,
        speed: 10000,
        touchMove: false,
        variableWidth: true
      };

      if (isEven(index + 1)) {
        $.extend(slickOptions, {
          rtl: true
        });
      }

      $(this).slick(slickOptions);
    });
  });
</script>

```