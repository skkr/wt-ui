# Modal (carousel)

<p class="lead">Use carousel modals to display gallery of images and videos in full screen.</p>

To use this modals, add `.modal-carousel` next to the `.modal` class. Header is required, use the title to indicate the album name.

Note that the size of images and videos will be adjusted to maintain the same height.

<!-- STORY -->

```html
<div class="modal modal-carousel" id="carousel-modal-demo" tabindex="-1" role="slideshow" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Travel Tech Con 2018</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <i class="mdi mdi-close mdi-48px"></i>
        </button>
      </div>
      <div class="modal-body d-flex align-items-center">

        <!-- Carousel -->
        <div class="carousel carousel-fade slide" data-ride="carousel" data-interval="0">

          <!-- indicators -->
          <ol class="carousel-indicators">
            <li data-target="#carousel-item-ID" data-slide-to="0" class="active"></li>
            <li data-target="#carousel-item-ID" data-slide-to="0"></li>
            ...
          </ol>

          <!-- images -->
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img class="img-fluid w-100 " src="image.jpg" alt="image description">
            </div>
            <div class="carousel-item">...</div>
            ...
          </div>

          <a class="carousel-control-prev" href={`#${randomId}`} role="button" data-slide="prev">
            <i class="mdi mdi-lg mdi-chevron-left" aria-hidden="true"/>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href={`#${randomId}`} role="button" data-slide="next">
            <i class="mdi mdi-lg mdi-chevron-right" aria-hidden="true"/>
            <span class="sr-only">Next</span>
          </a>
        </div>


      </div>
    </div>
  </div>
</div>

<button type="button" class="btn btn-light btn-sm" data-toggle="modal" data-target="#img-modal-demo">
  Launch demo modal
</button>
```
