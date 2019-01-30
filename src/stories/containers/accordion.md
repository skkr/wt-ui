# Accordion

<p class="lead">Create a graphical control element comprising a vertically stacked list of items, such as labels or thumbnails. Each item can be "expanded" or "collapsed" to reveal the content associated with that item.</p>

This component requires [react-collapse][0]. It also requires the Accordion component from this framework.

## How to use

Simply wrapp a set of containers with the accordion component.

- Use the `minHeight` prop to set the minimum height in pixels of an item when is collapsed. _(Recommended to use.)_
- The `openItem`, allows you to enter an number indicating which item will be expanded by defauls. _(Optional)_

## Example

<!-- STORY -->

```html
<Accordion minHeight={70} openItem={undefined}>
  <div>
    <h3>Item 1</h3>
    <p>Lorem ipsum, dolor sit amet consectetur...</p>
    ...
  </div>
  ...
</Accordion>
```

[0]: https://www.npmjs.com/package/react-collapse
