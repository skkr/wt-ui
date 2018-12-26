# Devs Marquee

The `.devs-marquee` is a specific type of carousel used to display the Windidng Tree collaborators.

The carousel is based on Slick, please reffer to [its website](http://kenwheeler.github.io/slick/) to see the documentation.

<!-- STORY -->

```html
<div class="devs-marquee js-devs-marquee">

  <!-- Dev/Slide -->
  <div class="devs-marquee-dev">
    <svg  class="devs-marquee-dev-img" width="54" height="60" viewBox="0 0 54 60" xmlns="http://www.w3.org/2000/svg" >
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <mask id="mask2" fill="white">
          <path d="M26.76,0a7.17,7.17,0,0,0-3.41,1L3.41,12.58A6.62,6.62,0,0,0,0,18.39V41.61a6.72,6.72,0,0,0,3.41,5.81L23.35,59a7.4,7.4,0,0,0,3.41,1,7.9,7.9,0,0,0,3.89-1L50.59,47.42A6.76,6.76,0,0,0,54,41.61V18.39a6.66,6.66,0,0,0-3.41-5.81L30.65,1A7.7,7.7,0,0,0,26.76,0Z" id="path2"></path>
        </mask>
        <image mask="url(#mask2)" width="54" height="60" xlink:href="developer.img"></image>
      </g>
    </svg>
    <p class="devs-marquee-dev-name">Developer Name</p>
  </div>

  ...

</div>
```

### Required Javascript

```js
<script type="text/javascript">
  $(document).ready(function(){
    $('.js-devs-marquee').slick({
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
  });
</script>

```