# Row

Rows are wrappers for columns. Each column has horizontal padding _(gutter)_ which createate an space between them. Rows use negative margins to make the content in your columns align correctly to the left and right sides.


### Basic usage
<div class="doc-preview mb-0 py-3 px-3">
  <div class="container">
    <div class="row">
      <div class="col border border-muted">
      <div class="bg-light py-2 px-2 border border-secondary">
        First column
      </div>
      </div>
      <div class="col border border-muted">
      <div class="bg-light py-2 px-2 border border-secondary">
        Second column
      </div>
      </div>
    </div>
  </div>
</div>

```html
<div class="row">
  <!-- columns -->
</div>
```

### Center row contents
Combine with the `.justify-content-center` class to center the row contents horizontally.

<div class="doc-preview mb-0 py-3 px-3">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-3">
      <div class="bg-light py-2 px-2 border border-secondary">
        First column
      </div>
      </div>
      <div class="col-3">
      <div class="bg-light py-2 px-2 border border-secondary">
        Second column
      </div>
      </div>
    </div>
  </div>
</div>

```html
<div class="row justify-content-center">
  <!-- columns -->
</div>
```

### Remove column gutters
To remove the margin from rows and padding from columns use the `.no-gutters` class on the `.row`.

<div class="doc-preview mb-0 py-3 px-3">
  <div class="container">
    <div class="row no-gutters">
      <div class="col">
      <div class="bg-light py-2 px-2 border border-secondary">
        First column
      </div>
      </div>
      <div class="col">
      <div class="bg-light py-2 px-2 border border-secondary">
        Second column
      </div>
      </div>
    </div>
  </div>
</div>

```html
<div class="row no-gutters">
  <!-- columns -->
</div>
```

