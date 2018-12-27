# Blockquote (card)

In case you need to display two quotes in a row, combine the `.blockquote` with the `.card` class,
and add the `.card-deck` class on its container keeping the height and width consistent. Use `.card-body` to wrap the the contents.

If necessary, use `.justify-content-center` to center the `.card-deck` horizontally.

Optionally place a standard `.blockquote` inside a card with **pointer** modifiers.

<!-- STORY -->

```html
<div className="card-deck justify-content-center">

  <!-- Blockquote -->
  <blockquote className="blockquote card">
    <div className="card-body">
      ...
    </div>
  </blockquote>

  <!-- Blockquote -->
  <blockquote className="blockquote card">
    <div className="card-body">
      ...
    </div>
  </blockquote>

  <!-- Card Pointer with Blockquote -->
  <div className="card card-pointer-left">
    <div className="card-body">
      <!-- blockquote -->
    </div>
  </div>

  <div className="card card-pointer-right">
    <div className="card-body">
      <!-- blockquote -->
    </div>
  </div>


</div>
```

