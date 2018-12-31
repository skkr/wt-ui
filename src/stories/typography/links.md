# Links

Default links are not underlined, their color is preset to the Winding Tree palete blue color.

To make links underlined, add the CSS modifier `.text-link`. This modifier can be added to other elements too, in this case its color will be inherithed. It also can be combined with and `.active` class.

**Note**: `rel="noopener noreferrer"` should be added to links containing `target="_blank"` as a precaution against reverse tabnabbing. For more information, refer to this [article](https://www.jitbit.com/alexblog/256-targetblank---the-most-underestimated-vulnerability-ever/).

<!-- STORY -->

```html
<!-- Default link style -->
<a href="https://windingtree.com" target="_blank">Link example.</a>
<a href="https://windingtree.com" target="_blank" rel="noopener noreferrer">Second link example.</a>

<!-- Text link modifier -->
<a className="text-link" href="https://windingtree.com" target="_blank" rel="noopener noreferrer">Underlined link.</a>
<button type="button" className="text-link">Button with link style.</button>

<button type="button" className="text-link active">Button with link style and active state.</button>
```