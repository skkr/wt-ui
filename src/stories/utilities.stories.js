import React from 'react';

import { storiesOf } from '@storybook/react';

// Included addons
import { doc } from 'storybook-readme';

// Included components
import Resizable from 're-resizable';
import { withCleanPreview, withCodePreview, } from './HOCs/with-docs'

// Readme files
import TextColor from './utilities/text-color.md';
import BackgroundColor from './utilities/background-color.md';
import BackgroundGradients from './utilities/background-gradients.md';
import BorderColor from './utilities/border-color.md';
import OtherUtilities from './utilities/other-utilities.md';


// COMPONENTS
// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *


storiesOf('Utilities', module)

  // Text Color
  .add('Text Color', withCodePreview(TextColor, () =>
    <div className="row">
      <div className="col">
        <p className="text-primary">.text-primary</p>
        <p className="text-secondary">.text-secondary</p>
        <p className="text-success">.text-success</p>
        <p className="text-danger">.text-danger</p>
        <p className="text-warning">.text-warning</p>
        <p className="text-info">.text-info</p>
        <p className="text-light bg-dark">.text-light</p>
        <p className="text-dark">.text-dark</p>
        <p className="text-muted">.text-muted</p>
        <p className="text-white bg-dark">.text-white</p>
      </div>
      <div className="col">
        <p><a href="#" className="text-primary">Primary link</a></p>
        <p><a href="#" className="text-secondary">Secondary link</a></p>
        <p><a href="#" className="text-success">Success link</a></p>
        <p><a href="#" className="text-danger">Danger link</a></p>
        <p><a href="#" className="text-warning">Warning link</a></p>
        <p><a href="#" className="text-info">Info link</a></p>
        <p><a href="#" className="text-light bg-dark">Light link</a></p>
        <p><a href="#" className="text-dark">Dark link</a></p>
        <p><a href="#" className="text-muted">Muted link</a></p>
        <p><a href="#" className="text-white bg-dark">White link</a></p>
      </div>
    </div>
  ))
  // Background Color
  .add('Background Color', withCodePreview(BackgroundColor, () =>
    <div>
      <div className="row">
        <div className="col">
          <div className="p-2 mb-2 bg-primary text-white">.bg-primary</div>
        </div>
        <div className="col">
          <div className="p-2 mb-2 bg-secondary text-white">.bg-secondary</div>
        </div>
        <div className="col">
          <div className="p-2 mb-2 bg-accent text-white">.bg-accent</div>
        </div>
        <div className="col">
          <div className="p-2 mb-2 bg-success text-white">.bg-success</div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="p-2 mb-2 bg-danger text-white">.bg-danger</div>
        </div>
        <div className="col">
          <div className="p-2 mb-2 bg-warning text-dark">.bg-warning</div>
        </div>
        <div className="col">
          <div className="p-2 mb-2 bg-info text-white">.bg-info</div>
        </div>
        <div className="col">
          <div className="p-2 mb-2 bg-light text-dark">.bg-light</div>
        </div>
      </div>
      <div className="row">
      <div className="col">
          <div className="p-2 mb-2 bg-accent-light text-dark">.bg-accent-light</div>
        </div>
        <div className="col">
          <div className="p-2 mb-2 bg-white text-dark border border-light">.bg-white</div>
        </div>
        <div className="col">
          <div className="p-2 mb-2 bg-dark text-white">.bg-dark</div>
        </div>
      </div>

    </div>
  ))
  // Background Gradients
  .add('Background Gradients', withCodePreview(BackgroundGradients, () =>
    <div>
      <div className="row">
        <div className="col">
          <div className="p-3 mb-2 bg-grad text-white">.bg-grad</div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="p-3 mb-2 bg-grad-up text-white">.bg-grad-up</div>
        </div>
        <div className="col">
          <div className="p-3 mb-2 bg-grad-down text-white">.bg-grad-down</div>
        </div>
      </div>
    </div>
  ))
  // Border color
  .add('BorderColor', withCodePreview(BorderColor, () =>
    <div>
      <span className="d-inline-block p-4 mr-2 border border-primary"></span>
      <span className="d-inline-block p-4 mr-2 border border-secondary"></span>
      <span className="d-inline-block p-4 mr-2 border border-success"></span>
      <span className="d-inline-block p-4 mr-2 border border-danger"></span>
      <span className="d-inline-block p-4 mr-2 border border-warning"></span>
      <span className="d-inline-block p-4 mr-2 border border-info"></span>
      <span className="d-inline-block p-4 mr-2 border border-light"></span>
      <span className="d-inline-block p-4 mr-2 border border-dark"></span>
      <span className="d-inline-block p-4 mr-2 border border-white"></span>
    </div>
  ))
  // Other Utilities
  .add('Other Utilities', doc(OtherUtilities))
