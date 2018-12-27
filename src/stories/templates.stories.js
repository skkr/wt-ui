import React from 'react';
import { storiesOf } from "@storybook/react";
import StoryRouter from 'storybook-react-router';

// Included addons
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import { doc } from 'storybook-readme';

// Included components
import { withCleanPreview, withCodePreview, } from './HOCs/with-docs'
import { withCollapse } from "./HOCs/bootstrap";
import Slider from "react-slick";

// UI components
import EventsBlock from '../components/EventsBlock';

// Readme files
import FrequentConstructions from './templates/frequent-constructions.md';
import Events from './templates/events.md';


// COMPONENTS
// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *

storiesOf('Templates', module)
  // Frequent type constructions
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
  // Events
  .add('Events', withCodePreview(Events, () =>
    <EventsBlock/>
  ))
