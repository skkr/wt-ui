import React from 'react';

import { storiesOf } from '@storybook/react';

// Included addons
import { doc } from 'storybook-readme';

// Included components
import Resizable from 're-resizable';
import { withCleanPreview, withCodePreview, } from './HOCs/with-docs'

// Readme files
import FrequentConstructions from './typography/frequent-constructions.md';

import Titles from './typography/titles.md';
import Display__Title from './typography/display__title.md';

import InlineTextElements from './typography/inline-text-elements.md';
import Lead from './typography/lead.md';
import Links from './typography/links.md';
import Abbreviations from './typography/abbreviations.md';
import textUtilities from './typography/text-utilities.md';

import Blockquote from './typography/blockquote.md';
import BlockquoteCard from './typography/blockquote-card.md';

import Lists from './typography/lists.md';
import Lists__Unstyled from './typography/lists__unstyled.md';
import Lists__Inline from './typography/lists__inline.md';
import Lists__Description from './typography/lists__description.md';

import Code__Inline from './typography/code__inline.md';
import Code__Blocks from './typography/code__blocks.md';
import Code__Variables from './typography/code__variables.md';
import Code__UserInput from './typography/code__user-input.md';
import Code__SampleOutput from './typography/code__sample-output.md';



// COMPONENTS
// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *

// TITLES
storiesOf('Typography/Titles', module)
  // Overview
  .add('Overview', withCleanPreview(Titles, () =>
    <div>
      <table className="table table-bordered mb-2">
        <thead>
          <tr>
            <th>Heading</th>
            <th>Example</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>&lt;h1&gt;&lt;/h1&gt;</code></td>
            <td><span className="h1">h1. Heading</span></td>
          </tr>
          <tr>
            <td><code>&lt;h2&gt;&lt;/h2&gt;</code></td>
            <td><span className="h2">h2. Heading</span></td>
          </tr>
          <tr>
            <td><code>&lt;h3&gt;&lt;/h3&gt;</code></td>
            <td><span className="h3">h3. Heading</span></td>
          </tr>
          <tr>
            <td><code>&lt;h4&gt;&lt;/h4&gt;</code></td>
            <td><span className="h4">h4. Heading</span></td>
          </tr>
          <tr>
            <td><code>&lt;h5&gt;&lt;/h5&gt;</code></td>
            <td><span className="h5">h5. Heading</span></td>
          </tr>
          <tr>
            <td><code>&lt;h6&gt;&lt;/h6&gt;</code></td>
            <td><span className="h6">h6. Heading</span></td>
          </tr>
        </tbody>
      </table>
    </div>
  ))
  // Display Titles
  .add('Display titles', withCodePreview(Display__Title, () =>
    <h1 className="mb-0 title-display">Title Display</h1>
  ))


// INLINE TEXT ELEMENTS
storiesOf('Typography/Inline text elements', module)

  // Overview
  .add('Overview', withCodePreview(InlineTextElements, () =>
    <div>
      <p>You can use the mark tag to <mark>highlight</mark> text.</p>
      <p><del>This line of text is meant to be treated as deleted text.</del></p>
      <p><s>This line of text is meant to be treated as no longer accurate.</s></p>
      <p><ins>This line of text is meant to be treated as an addition to the document.</ins></p>
      <p><u>This line of text will render as underlined</u></p>
      <p><small>This line of text is meant to be treated as fine print.</small></p>
      <p><strong>This line rendered as bold text.</strong></p>
      <p><em>This line rendered as italicized text.</em></p>
    </div>
  ))
  // Lead
  .add('Lead', withCodePreview(Lead, () =>
    <p className="lead">
      Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus.
    </p>
  ))
  // Links
  .add('Links', withCodePreview(Links, () =>
    <div>
      <h6>Default link style</h6>
      <p> <a href="https://windingtree.com" target="_blank">Link example.</a> </p>
      <p> <a href="https://windingtree.com" target="_blank" rel="noopener noreferrer">Second link example.</a> </p>

      <hr className="my-1"/>

      <h6>Text link modifier</h6>
      <p> <a className="text-link" href="https://windingtree.com" target="_blank" rel="noopener noreferrer">Underlined link.</a> </p>
      <p> <button className="text-link" type="button">Button with link style.</button> </p>
    </div>
  ))
  // Abbreviations
  .add('Abbreviations', withCodePreview(Abbreviations, () =>
    <div>
      <p><abbr title="attribute">attr</abbr></p>
      <p><abbr title="HyperText Markup Language" className="initialism">HTML</abbr></p>
    </div>
  ))
  // Text Utilities
  .add('Text utilities', doc(textUtilities))


// BLOCKQUOTES
storiesOf('Typography/Blockquotes', module)

// Blockquote
.add('Blockquote', withCodePreview(Blockquote, () =>
    <div>

        <blockquote className="blockquote">
          <p className="blockquote-body">
            <i className="mdi mdi-36px mdi-format-quote-open"></i>
            In a decentralized travel distribution system, for example, there is no room for rent-seeking intermediaries, therefore the wealth they are currently hoarding will be distributed to the rest of the network, making travel cheaper for travelers and more profitable for travel companies.
            <i className="mdi mdi-36px mdi-format-quote-close"></i>
          </p>
          <footer className="blockquote-footer">
            <div className="user">
              <svg className="user-img" xmlns="http://www.w3.org/2000/svg" width="108" height="120" viewBox="0 0 108 120">
                <defs>
                  <path d="M53.5135135,0 C51.5026531,0 49.0462292,0.612640549 46.7027027,1.93548387 L6.81081081,25.1612903 C2.70204694,27.2838443 0,31.9809136 0,36.7741935 L0,83.2258065 C0,87.9373729 2.70204694,92.6344421 6.81081081,94.8387097 L46.7027027,118.064516 C49.0462292,119.346494 51.5026531,120 53.5135135,120 C56.4564123,120 58.9127966,119.346494 61.2972973,118.064516 L101.189189,94.8387097 C105.257015,92.6344421 108,87.9373729 108,83.2258065 L108,36.7741935 C108,31.9809136 105.257015,27.2838443 101.189189,25.1612903 L61.2972973,1.93548387 C58.9127966,0.612640549 56.4564123,0 53.5135135,0 Z" id="path"></path>
                </defs>
                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
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
          </footer>
        </blockquote>

    <h6 className="mt-2 mb-1">Alternative Style</h6>

    <blockquote className="blockquote blockquote-alt">
      <p className="blockquote-body">
        "It's very exciting, but very early. It's a simpler and cheaper distribution chain that can challenge the booking giants"
        <a href="http://nordic.businessinsider.com/a-norwegian-hotel-billionaire-wants-to-use-blockchain-to-cut-out-expedia--/">
          Read full article
        </a>
      </p>
      <footer className="blockquote-footer">
        <div className="user user-sm">
          <img className="user-img" src="http://windingtree.com/assets/img/in-the-press/quotes/avatars/lisa-farrar.jpg" width="60" height="60" alt="Lisa Farrar"/>
          <div className="user-data">
            <p className="user-name">Lisa Farrar</p>
            <p className="user-role">Chief digital officer at Nordic Choice Hotels</p>
          </div>
        </div>
      </footer>
    </blockquote>

  </div>
  ))
  // Blockquote (card)
  .add('Blockquote (card)', withCodePreview(BlockquoteCard, () =>
    <div>
      <div className="card-deck justify-content-center">

        <blockquote className="blockquote card">
          <div className="card-body">
            <p className="blockquote-body">
              <i className="mdi mdi-36px mdi-format-quote-open"></i>
              In a decentralized travel distribution system, for example, there is no room for rent-seeking intermediaries, therefore the wealth they are currently hoarding will be distributed to the rest of the network, making travel cheaper for travelers and more profitable for travel companies.
              <i className="mdi mdi-36px mdi-format-quote-close"></i>
            </p>
            <footer className="blockquote-footer">
              <div className="user">
                <svg className="user-img" xmlns="http://www.w3.org/2000/svg" width="108" height="120" viewBox="0 0 108 120">
                  <defs>
                    <path d="M53.5135135,0 C51.5026531,0 49.0462292,0.612640549 46.7027027,1.93548387 L6.81081081,25.1612903 C2.70204694,27.2838443 0,31.9809136 0,36.7741935 L0,83.2258065 C0,87.9373729 2.70204694,92.6344421 6.81081081,94.8387097 L46.7027027,118.064516 C49.0462292,119.346494 51.5026531,120 53.5135135,120 C56.4564123,120 58.9127966,119.346494 61.2972973,118.064516 L101.189189,94.8387097 C105.257015,92.6344421 108,87.9373729 108,83.2258065 L108,36.7741935 C108,31.9809136 105.257015,27.2838443 101.189189,25.1612903 L61.2972973,1.93548387 C58.9127966,0.612640549 56.4564123,0 53.5135135,0 Z" id="path"></path>
                  </defs>
                  <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
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
            </footer>
          </div>
        </blockquote>

        <div class="w-100 d-block d-lg-none"></div>

        <blockquote className="blockquote card">
          <div className="card-body">
              <p className="blockquote-body">
                <i className="mdi mdi-36px mdi-format-quote-open"></i>
                The Internet is a decentralized ecosystem. Nevertheless, the platforms which are built on top of the Internet tend to monopolize it. Blockchain can help preserving Internet's decentralized nature. The Internet would not exist without open-source and still it is an uneasy task to find proper funding strategies to support open-source projects. Blockchain is bringing value directly attached to the code.
                <i className="mdi mdi-36px mdi-format-quote-close"></i>
              </p>
              <footer className="blockquote-footer">
                <div className="user">
                  <svg className="user-img" xmlns="http://www.w3.org/2000/svg" width="108" height="120" viewBox="0 0 108 120">
                    <defs>
                      <path d="M53.5135135,0 C51.5026531,0 49.0462292,0.612640549 46.7027027,1.93548387 L6.81081081,25.1612903 C2.70204694,27.2838443 0,31.9809136 0,36.7741935 L0,83.2258065 C0,87.9373729 2.70204694,92.6344421 6.81081081,94.8387097 L46.7027027,118.064516 C49.0462292,119.346494 51.5026531,120 53.5135135,120 C56.4564123,120 58.9127966,119.346494 61.2972973,118.064516 L101.189189,94.8387097 C105.257015,92.6344421 108,87.9373729 108,83.2258065 L108,36.7741935 C108,31.9809136 105.257015,27.2838443 101.189189,25.1612903 L61.2972973,1.93548387 C58.9127966,0.612640549 56.4564123,0 53.5135135,0 Z" id="path"></path>
                    </defs>
                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                      <mask id="mask" fill="white">
                        <use xlinkHref="#path"></use>
                      </mask>
                      <image mask="url(#mask)" width="108" height="120" xlinkHref="http://windingtree.com/assets/img/team/jakub.jpg"></image>
                    </g>
                  </svg>
                  <div className="user-data">
                    <p className="user-name">Jakub Vysoky</p>
                    <p className="user-role">Founder, CTO</p>
                  </div>
                </div>
              </footer>
          </div>
        </blockquote>

      </div>

      <hr className="mt-1 mb-2"/>

      <div className="row justify-content-center">
        <div className="col-6">
          <div className="card card-pointer-left">
            <div className="card-body">
              <blockquote className="blockquote">
                <p className="blockquote-body text-left">
                  <i className="mdi mdi-36px mdi-format-quote-open"></i>
                  Welcome to our community, Jason!
                  Let us know you better to understand what we can offer each other.
                  <i className="mdi mdi-36px mdi-format-quote-close"></i>
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-6">
          <div className="card card-pointer-right">
            <div className="card-body">
              <blockquote className="blockquote">
                <p className="blockquote-body text-left">
                  <i className="mdi mdi-36px mdi-format-quote-open"></i>
                  Welcome to our community, Jason!
                  Let us know you better to understand what we can offer each other.
                  <i className="mdi mdi-36px mdi-format-quote-close"></i>
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </div>

    </div>
  ))



// LISTS
storiesOf('Typography/Lists', module)

  // Overview
  .add('Overview', withCleanPreview(Lists, () =>
    <Resizable
      className="resizable"
      defaultSize={{ width: 'auto', height: 'auto' }}
      bounds={'parent'}
      enable={{ top:false, right:true, bottom:false, left:false, topRight:false, bottomRight:false, bottomLeft:false, topLeft:false }}
    >
      <ul>
        <li>Lorem ipsum dolor sit amet</li>
        <li>Consectetur adipiscing elit</li>
        <li>Integer molestie lorem at massa</li>
        <li>Facilisis in pretium nisl aliquet</li>
        <li>Nulla volutpat aliquam velit
          <ul>
            <li>Phasellus iaculis neque</li>
            <li>Purus sodales ultricies</li>
            <li>Vestibulum laoreet porttitor sem</li>
            <li>Ac tristique libero volutpat at</li>
          </ul>
        </li>
        <li>Faucibus porta lacus fringilla vel</li>
        <li>Aenean sit amet erat nunc</li>
        <li>Eget porttitor lorem</li>
      </ul>
    </Resizable>
  ))
  // Unstyled
  .add('Unstyled', withCodePreview(Lists__Unstyled, () =>
    <ul className="list-unstyled">
      <li>Lorem ipsum dolor sit amet</li>
      <li>Consectetur adipiscing elit</li>
      <li>Integer molestie lorem at massa</li>
      <li>Facilisis in pretium nisl aliquet</li>
      <li>Nulla volutpat aliquam velit
        <ul>
          <li>Phasellus iaculis neque</li>
          <li>Purus sodales ultricies</li>
          <li>Vestibulum laoreet porttitor sem</li>
          <li>Ac tristique libero volutpat at</li>
        </ul>
      </li>
      <li>Faucibus porta lacus fringilla vel</li>
      <li>Aenean sit amet erat nunc</li>
      <li>Eget porttitor lorem</li>
    </ul>
    ))
  // Inline
  .add('Inline', withCodePreview(Lists__Inline, () =>
    <ul className="list-inline">
      <li className="list-inline-item">Lorem ipsum</li>
      <li className="list-inline-item">Phasellus iaculis</li>
      <li className="list-inline-item">Nulla volutpat</li>
    </ul>
  ))
  // Description
  .add('Description', withCodePreview(Lists__Description, () =>
    <dl className="row">
      <dt className="col-sm-3">Description lists</dt>
      <dd className="col-sm-9">A description list is perfect for defining terms.</dd>

      <dt className="col-sm-3">Euismod</dt>
      <dd className="col-sm-9">
        <p>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</p>
        <p>Donec id elit non mi porta gravida at eget metus.</p>
      </dd>

      <dt className="col-sm-3">Malesuada porta</dt>
      <dd className="col-sm-9">Etiam porta sem malesuada magna mollis euismod.</dd>

      <dt className="col-sm-3 text-truncate">Truncated term is truncated</dt>
      <dd className="col-sm-9">Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</dd>

      <dt className="col-sm-3">Nesting</dt>
      <dd className="col-sm-9">
        <dl className="row">
          <dt className="col-sm-4">Nested definition list</dt>
          <dd className="col-sm-8">Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc.</dd>
        </dl>
      </dd>
    </dl>
  ))


// CODE
storiesOf('Typography/Code', module)

  // Inline code
  .add('Inline code', withCodePreview(Code__Inline, () =>
    <div>
      For example, <code>&lt;section&gt;</code> should be wrapped as inline.
    </div>
  ))
  //Code blocks
  .add('Code blocks', withCodePreview(Code__Blocks, () =>
    <pre><code>&lt;p&gt;Sample text here...&lt;/p&gt;
    &lt;p&gt;And another line of sample text here...&lt;/p&gt;
    </code></pre>
  ))
  // Variables
  .add('Variables', withCodePreview(Code__Variables, () =>
    <span><var>y</var> = <var>m</var><var>x</var> + <var>b</var></span>
  ))
  // User input
  .add('User input', withCodePreview(Code__UserInput, () =>
    <div>
      To switch directories, type <kbd>cd</kbd> followed by the name of the directory.<br/>
      To edit settings, press <kbd><kbd>ctrl</kbd> + <kbd>,</kbd></kbd>
    </div>
  ))
  // Sample output
  .add('Sample output', withCodePreview(Code__SampleOutput, () =>
    <samp>This text is meant to be treated as sample output from a computer program.</samp>
  ))

// FREQUENT TYPE CONSTRUCTIONS
storiesOf('Typography', module)
  // Fonts
  .add('Frequent type constructions', withCleanPreview(FrequentConstructions, () =>
    <div>

      <div className="col-6 mx-auto text-center">
        <h1>This is an H1 title, is limited to three lines.</h1>
        <p className="lead">This is a centered .lead paragraph, must have from one to three lines.</p>
      </div>

      <hr className="my-3"/>

      <div className="col-10 mx-auto text-center">
        <h2>This is a centered H2 title</h2>
        <p className="lead">This is a longer .lead paragraph, keep it shorter than two lines, consectetuer adipiscing diam nonummy nibh euismod.</p>
      </div>

      <hr className="my-3"/>

      <div className="col-10 mx-auto text-center">
        <h2>This is a centered H2 title</h2>
        <p>Standard paragraph lorem ipsum dolor sit amet, consectetuer adipiscing.</p>
      </div>

      <hr className="my-3"/>

      <div className="row">
        <div className="col">
          <h2>H2 title to the left</h2>
          <p className="lead">This is a .lead paragraph lorem ipsum dolor sit amet, consectetuer adipiscing.</p>
        </div>
        <div className="col">
          <h2>H2 title to the left</h2>
          <p>Standard paragraph lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
        </div>
      </div>

      <hr className="my-3"/>

      <div className="col-8 mx-auto text-center">
        <h3>Centered H3 title.</h3>
        <p>Standard paragraph lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore.</p>
      </div>

      <hr className="my-3"/>

      <div className="row">
        <div className="col">
          <h3>H3 title to the left.</h3>
          <p>Standard paragraph lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore.</p>
        </div>
        <div className="col">
          <h3 className="text-muted">This is a muted H3 title.</h3>
          <p>Standard paragraph lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore.</p>
        </div>
      </div>

      <hr className="my-3"/>

      <div className="row">
        <div className="col">
          <h4>Centered h4 title.</h4>
          <p className="text-muted">Muted paragraph lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore.</p>
        </div>
        <div className="col">
          <h4  className="text-muted">This is an h4 title.</h4>
          <p  className="text-muted">Muted paragraph lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore.</p>
        </div>
      </div>
    </div>
  ))
