# Frequent Type Constructions

These are some common use cases.

<!-- STORY -->

```html
<!-- Centered H1 -->
<div class="col-6 mx-auto text-center">
  <h1>This is an H1 title, is limited to three lines.</h1>
  <p class="lead">This is a centered .lead paragraph, must have from one to three lines.</p>
</div>

<!-- Centered H2 + .lead -->
<div class="col-10 mx-auto text-center">
  <h2>This is a centered H2 title</h2>
  <p class="lead">This is a longer .lead paragraph, keep it shorter than two lines, consectetuer adipiscing diam nonummy nibh euismod.</p>
</div>

<!-- Centered H2 + p -->
<div class="col-10 mx-auto text-center">
  <h2>This is a centered H2 title</h2>
  <p>Standard paragraph lorem ipsum dolor sit amet, consectetuer adipiscing.</p>
</div>

<div class="row">
  <!-- H2 + .lead -->
  <div class="col">
    <h2>H2 title to the left</h2>
    <p class="lead">This is a .lead paragraph lorem ipsum dolor sit amet, consectetuer adipiscing.</p>
  </div>
  <!-- H2 + p -->
  <div class="col">
    <h2>H2 title to the left</h2>
    <p>Standard paragraph lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
  </div>
</div>

<!-- Centered H3 + p -->
<div class="col-8 mx-auto text-center">
  <h3>Centered H3 title.</h3>
  <p>Standard paragraph lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore.</p>
</div>

<div class="row">
  <!-- H3 + p -->
  <div class="col">
    <h3>H3 title to the left.</h3>
    <p>Standard paragraph lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore.</p>
  </div>
  <!-- H3 + muted p -->
  <div class="col">
    <h3 class="text-muted">This is a muted H3 title.</h3>
    <p>Standard paragraph lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore.</p>
  </div>
</div>

<hr class="my-3"/>

<div class="row">
  <!-- H4 + muted p -->
  <div class="col">
    <h4>Centered h4 title.</h4>
    <p class="text-muted">Muted paragraph lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore.</p>
  </div>
  <!-- Muted H4 + muted p -->
  <div class="col">
    <h4  class="text-muted">This is an h4 title.</h4>
    <p  class="text-muted">Muted paragraph lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore.</p>
  </div>
</div>
```