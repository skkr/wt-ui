# Alert

<p class="lead">Use the alert component to provide complementary information to users on a specific section of the page.</p>

Alerts are available for any length of text, as well as an optional dismiss button. For proper styling,
must be combined with one of the four most common contextual classes (`.alert-[success|info|warning|danger]`) or the `alert-accent-light` variant.
For inline dismissal, use the [alerts jQuery plugin][0]

<!-- STORY -->

```html
<div class="alert alert-success" role="alert">
  This is a success alert, and includes a <a href="#">link</a>!
</div>
<div class="alert alert-info" role="alert">
  This is a info alert, and includes a <a href="#">link</a>!
</div>
<div class="alert alert-warning" role="alert">
  This is a warning alert, and includes a <a href="#">link</a>!
</div>
<div class="alert alert-danger" role="alert">
  This is a danger alert, and includes a <a href="#">link</a>!
</div>


<!-- Alert with centered text an a button -->

<div className="alert alert-accent-light text-center px-1">
  <p className="d-block d-md-inline mr-0 mr-md-2">If you want to invite Winding Tree to you event please send us an email</p>
  <a href="mailto:info@windingtree.com" className="btn btn-primary">Send Email</a>
</div>


<!-- Alternative content layout and close button -->

<div class="alert alert-warning fade show" role="alert">
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <i class="mdi mdi-close-circle"></i>
  </button>
  <strong>Holy guacamole!</strong> You should check in on some of those fields below.
</div>

<div class="alert alert-success fade show text-center" role="alert">
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <i class="mdi mdi-close-circle"></i>
  </button>
  <h3 class="alert-heading">Well done!</h3>
  <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
</div>
</div>
```

[0]: (https://getbootstrap.com/docs/4.0/components/alerts/#dismissing).