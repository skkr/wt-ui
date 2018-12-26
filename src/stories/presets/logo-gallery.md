# Logo Gallery

This component can be used to display logo series in a centered grid layout. Logos with links will turn gray by default and will be displayed in color on hover.

The component relays on two classes: `.logo-gallery` and `.logo-gallery-item`. The `.logo-gallery-muted` modifier can be used to make the non linked gallery gray.

<!-- STORY -->

```html
<ul class="logo-gallery">
  <li class="logo-gallery-item">
    <a href="...">
      <img src="..." alt="..." title="..."/>
    </a>
  </li>
</ul>


<!-- No links -->
<ul class="logo-gallery">
  <li class="logo-gallery-item">
    <a href="...">
      <img src="..." alt="..." title="..."/>
    </a>
  </li>
</ul>


<!-- No links, on gray -->
<ul class="logo-gallery logo-gallery-muted">
  <li class="logo-gallery-item">
    <a href="...">
      <img src="..." alt="..." title="..."/>
    </a>
  </li>
</ul>
```