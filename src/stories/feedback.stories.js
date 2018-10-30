import React from 'react';

import { storiesOf } from '@storybook/react';

// Included addons
import { doc } from 'storybook-readme';

// Included components
import { withCleanPreview, withCodePreview, } from './HOCs/with-docs';
import {withPopover, withTooltip} from "./HOCs/bootstrap";

// Readme files
import Badge from './feedback/badge.md';
import Progress from './feedback/progress.md';
import Popover from './feedback/popover.md';
import Tooltip from './feedback/tooltip.md';
import Alert from './feedback/alert.md';
import InlineMessages from './feedback/inline-messages.md';
import Loader from './feedback/loader.md';


// COMPONENTS
// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *

storiesOf('Feedback', module)

  // Badge
  .add('Badge', withCodePreview(Badge, () =>
    <div>
      <p className="p-1">
        <span className="mr-1 badge badge-primary">Primary</span>
        <span className="mr-1 badge badge-secondary">Secondary</span>
        <span className="mr-1 badge badge--accent">Accent</span>
        <span className="mr-1 badge badge-success">Success</span>
        <span className="mr-1 badge badge-danger">Danger</span>
        <span className="mr-1 badge badge-warning">Warning</span>
        <span className="mr-1 badge badge-info">Info</span>
        <span className="mr-1 badge badge-light">Light</span>
        <span className="mr-1 badge badge-dark">Dark</span>
      </p>
      <hr/>
      <p className="p-1">
        <span className="mr-1 badge badge-pill badge-primary">Primary</span>
        <span className="mr-1 badge badge-pill badge-secondary">Secondary</span>
        <span className="mr-1 badge badge-pill badge--accent">Accent</span>
        <span className="mr-1 badge badge-pill badge-success">Success</span>
        <span className="mr-1 badge badge-pill badge-danger">Danger</span>
        <span className="mr-1 badge badge-pill badge-warning">Warning</span>
        <span className="mr-1 badge badge-pill badge-info">Info</span>
        <span className="mr-1 badge badge-pill badge-light">Light</span>
        <span className="mr-1 badge badge-pill badge-dark">Dark</span>
      </p>
    </div>
  ))
  // Progress
  .add('Progress', withCodePreview(Progress, () =>
  <div>
    <div className="progress mb-3">
      <div className="progress-bar" role="progressbar" style={{width: "25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
    </div>
    <div className="progress mb-3">
      <div className="progress-bar bg-success" role="progressbar" style={{width: "75%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">75%</div>
    </div>
    <div className="progress mb-3">
      <div className="progress-bar bg-info" role="progressbar" style={{width: "100%"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">100%</div>
    </div>

    <br/>

    <div className="progress mb-3" style={{height: 3}}>
      <div className="progress-bar bg-warning" role="progressbar" style={{width: "25%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
    </div>

    <div className="progress mb-3" style={{height: 30}}>
      <div className="progress-bar bg-danger" role="progressbar" style={{width: "50%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">50%</div>
    </div>

  </div>
  ))
  // Popover
  .add('Popover', withCodePreview(Popover, withPopover(() =>
    <div>
      <button type="button" className="mr-2 btn btn-primary"  data-container="body" data-toggle="popover" data-placement="top" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
        Popover on top
      </button>

      <button type="button" className="mr-2 btn btn-primary" data-container="body" data-toggle="popover" data-placement="right" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
        Popover on right
      </button>

      <button type="button" className="mr-2 btn btn-primary" title="Popover title" data-container="body" data-toggle="popover" data-placement="bottom" data-content="Vivamus
      sagittis lacus vel augue laoreet rutrum faucibus.">
        Popover on bottom
      </button>

      <button type="button" className="mr-2 btn btn-primary" data-trigger="focus" data-container="body" data-toggle="popover" data-placement="left" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
        Popover on left
      </button>
    </div>
  )))
  // Tooltip
  .add('Tooltip', withCodePreview(Tooltip, withTooltip(() =>
    <div>
      <button type="button" className="mr-2 btn btn-primary"  data-toggle="tooltip" data-placement="top" title="Tooltip on top">
        Tooltip on top
      </button>

      <button type="button" className="mr-2 btn btn-primary" data-toggle="tooltip" data-placement="right" title="Tooltip on right">
        Tooltip on right
      </button>

      <button type="button" className="mr-2 btn btn-primary" data-toggle="tooltip" data-placement="bottom" title="Tooltip on bottom">
        Tooltip on bottom
      </button>

      <button type="button" className="mr-2 btn btn-primary" data-toggle="tooltip" data-placement="left" title="Tooltip on left">
        Tooltip on left
      </button>

      <button type="button" className="btn btn-primary" data-toggle="tooltip" data-html="true" title="<em>Tooltip</em> <u>with</u> <b>HTML</b>">
        Tooltip with HTML
      </button>
    </div>
  )))
  // Alert
  .add('Alert', withCodePreview(Alert, () =>
    <div>
      <div className="alert alert-primary" role="alert">
        This is a primary alert—check it out!
      </div>
      <div className="alert alert-secondary" role="alert">
        This is a secondary alert with an <a className="alert-link" href="/">example link</a>.
      </div>
      <div className="alert alert-success" role="alert">
        This is a success alert—check it out!
      </div>
      <div className="alert alert-danger" role="alert">
        This is a danger alert—check it out!
      </div>
      <div className="alert alert-warning" role="alert">
        This is a warning alert—check it out!
      </div>
      <div className="alert alert-info" role="alert">
        This is a info alert—check it out!
      </div>
      <div className="alert alert-light" role="alert">
        This is a light alert—check it out!
      </div>
      <div className="alert alert-dark" role="alert">
        This is a dark alert—check it out!
      </div>

      <hr className="mt-4 mb-4"/>

      <div className="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>Holy guacamole!</strong> You should check in on some of those fields below.
        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>

      <div className="alert alert-success" role="alert">
        <h4 className="alert-heading">Well done!</h4>
        <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
        <hr/>
        <p className="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
      </div>
    </div>
  ))
  // Inline Messages
  .add('Inline messages', withCodePreview(InlineMessages, () =>
    <div>
      <h6>Neutral styles</h6>
      <p className="msg msg-neutral" role="notification">
        <span className="msg-icon">
          <i className="mdi mdi-calendar"/>
        </span>
        Inline neutral message
      </p>
      <p className="msg msg-unavailable" role="notification">
        <span className="msg-icon">
          <i className="mdi mdi-calendar"/>
        </span>
        Inline unavailable message
      </p>

      <h6 className="mt-1">Feedback styles</h6>
      <p className="msg msg-success" role="notification">
        <span className="msg-icon">
          <i className="mdi mdi-check-circle"/>
        </span>
        Inline succes message
      </p>
      <p className="msg msg-info" role="notification">
        <span className="msg-icon">
          <i className="mdi mdi-information-outline"/>
        </span>
        Inline info message
      </p>
      <p className="msg msg-warning" role="notification">
        <span className="msg-icon">
          <i className="mdi mdi-information-outline"/>
        </span>
        Inline warning message
      </p>
      <p className="msg msg-danger" role="notification">
        <span className="msg-icon">
          <i className="mdi mdi-close-octagon"/>
        </span>
        Inline danger message
      </p>

      <hr className="divider my-1"/>

      <h6 className="mt-1">Combined cases</h6>
      <div class="row">
        <div class="col-12 col-sm-4">
          <p className="msg msg-neutral" role="notification">
            <span className="msg-icon">
              <i className="mdi mdi-calendar"/>
            </span>
            Available from <span className="font--alt">$750</span>
          </p>
          <p className="msg msg-info mb-2" role="notification">
            <span className="msg-icon">
              <i className="mdi mdi-information-outline"/>
            </span>
            Abailability Unknow
          </p>
        </div>

        <div class="col-12 col-sm-4">
          <p className="msg msg-neutral" role="notification">
            <span className="msg-icon">
              <i className="mdi mdi-calendar"/>
            </span>
            Available from <span className="font--alt">$750</span>
          </p>
          <p className="msg msg-warning mb-2" role="notification">
            <span className="msg-icon">
              <i className="mdi mdi-information-outline"/>
            </span>
            Last two remaining
          </p>
        </div>

        <div class="col-12 col-sm-4">
          <p className="msg msg-unavailable" role="notification">
            <span className="msg-icon">
              <i className="mdi mdi-calendar"/>
            </span>
            Available from <span className="font--alt">$750</span>
          </p>
          <p className="msg msg-danger" role="notification">
            <span className="msg-icon">
              <i className="mdi mdi-close-octagon"/>
            </span>
            Sold out
          </p>
        </div>
      </div>
    </div>
  ))
  // Loader
  .add('Loader', withCodePreview(Loader, () =>
    <div>
      <hr className="my-1"/>

      <i className="mdi mdi-loading mdi-36px mdi-spin text-primary"/>

      <hr className="my-1"/>

      <button className="btn btn-primary disabled mr-1" disabled>
        <i className="mdi mdi-loading mdi-spin text-dark"/> Loading...
      </button>

      <hr className="my-1"/>

      <div className="loader">
        <i className="mdi mdi-loading mdi-36px"/>
      </div>

      <hr className="my-1"/>

      <div className="loader" style={{height: 250, border: '1px solid #ccc'}}>
        <div>
          <i className="mdi mdi-loading mdi-36px"/>
          <p>Loading... </p>
        </div>
      </div>
    </div>
  ))
