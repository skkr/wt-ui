# User

This component can be used to display an user avatar and information.

The component relays on the following CSS classes:

- `.user` is the main wrapper.
- `.user-img` the user avatar *(Use the the provide SVG image masks)*.
- `.user-data` the container of the user's data.

The `.user-sm` modifier class will change text styles. Please remember to use the appropriated SVG mask for the avatar image.

By default the items inside `.user` component will be horizontally centered. In case you need to add more text content, combine with the `.user-items-start` modifier *(as in the last example)*.

Use `.user-bio` to wrapp the bio information, it will add white space around it.

<!-- STORY -->

```html

<!-- User - Small -->
<div className="user user-sm">
  <img className="user-img" src="http://windingtree.com/assets/img/in-the-press/quotes/avatars/lisa-farrar.jpg" width="60" height="60" alt="Lisa Farrar"/>
  <div className="user-data">
    <p className="user-name">Lisa Farrar</p>
    <p className="user-role">Chief digital officer at Nordic Choice Hotels</p>
  </div>
</div>

<!-- User - Default -->
<div className="user">
  <svg className="user-img" xmlns="http://www.w3.org/2000/svg" width="108" height="120" viewBox="0 0 108 120">
    <defs>
      <path d="M53.5135135,0 C51.5026531,0 49.0462292,0.612640549 46.7027027,1.93548387 L6.81081081,25.1612903 C2.70204694,27.2838443 0,31.9809136 0,36.7741935 L0,83.2258065 C0,87.9373729 2.70204694,92.6344421 6.81081081,94.8387097 L46.7027027,118.064516 C49.0462292,119.346494 51.5026531,120 53.5135135,120 C56.4564123,120 58.9127966,119.346494 61.2972973,118.064516 L101.189189,94.8387097 C105.257015,92.6344421 108,87.9373729 108,83.2258065 L108,36.7741935 C108,31.9809136 105.257015,27.2838443 101.189189,25.1612903 L61.2972973,1.93548387 C58.9127966,0.612640549 56.4564123,0 53.5135135,0 Z" id="path"></path>
    </defs>
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <mask id="mask" fill="white">
        <use xlinkHref="#path"></use>
      </mask>
      <image mask="url(#mask)" width="108" height="120" xlinkHref="http://windingtree.com/assets/img/team/max.jpg"></image>
    </g>
  </svg>
  <div className="user-data">
    <p className="user-name">Maksim Izmaylov</p>
    <p className="user-role">Founder, CEO</p>
  </div>
</div>

<!-- User with Bio -->
<div className="user user-items-start">
  <svg className="user-img" xmlns="http://www.w3.org/2000/svg" width="108" height="120" viewBox="0 0 108 120">
    <defs>
      <path d="M53.5135135,0 C51.5026531,0 49.0462292,0.612640549 46.7027027,1.93548387 L6.81081081,25.1612903 C2.70204694,27.2838443 0,31.9809136 0,36.7741935 L0,83.2258065 C0,87.9373729 2.70204694,92.6344421 6.81081081,94.8387097 L46.7027027,118.064516 C49.0462292,119.346494 51.5026531,120 53.5135135,120 C56.4564123,120 58.9127966,119.346494 61.2972973,118.064516 L101.189189,94.8387097 C105.257015,92.6344421 108,87.9373729 108,83.2258065 L108,36.7741935 C108,31.9809136 105.257015,27.2838443 101.189189,25.1612903 L61.2972973,1.93548387 C58.9127966,0.612640549 56.4564123,0 53.5135135,0 Z" id="path"></path>
    </defs>
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <mask id="mask" fill="white">
        <use xlinkHref="#path"></use>
      </mask>
      <image mask="url(#mask)" width="108" height="120" xlinkHref="http://windingtree.com/assets/img/team/max.jpg"></image>
    </g>
  </svg>
  <div className="user-data">
    <p className="user-name">Maksim Izmaylov</p>
    <p className="user-role">Founder, CEO</p>
    <div className="user-bio">
      <button className="text-link" type="button" data-toggle="collapse" href="#userCollapse" role="button" aria-expanded="false" aria-controls="userCollapse">bio</button>
      <div className="collapse" id="userCollapse">
        <p>Maksim Izmaylov is a software engineer and entrepreneur, previously founder of Roomstorm and Travel Tech Con.</p>
      </div>
    </div>

    <ul className="d-none d-md-block list-inline">
        <li className="list-inline-item">
          <a href="https://github.com/kvakes" title="GitHub" className="text-muted text-alpha">
            <i className="mdi mdi-24px mdi-github-circle"></i>
          </a>
        </li>
        <li className="list-inline-item">
          <a href="https://twitter.com/kvakes" title="Twitter" className="text-muted text-alpha">
            <i className="mdi mdi-24px mdi-twitter"></i>
          </a>
        </li>
        <li className="list-inline-item">
          <a href="https://www.linkedin.com/in/maksimizmaylov/" title="LinkedIn" className="text-muted text-alpha">
            <i className="mdi mdi-24px mdi-linkedin"></i>
          </a>
        </li>
        <li className="list-inline-item">
          <a href="http://kvakes.com/" title="Link" className="text-muted text-alpha">
            <i className="mdi mdi-24px mdi-link-variant"></i>
          </a>
        </li>
    </ul>

  </div>
</div>


```