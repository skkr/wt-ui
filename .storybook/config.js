import React from 'react';

// Included addons
import { configure, addDecorator } from '@storybook/react';
import { setOptions } from "@storybook/addon-options";
import { configureViewport } from '@storybook/addon-viewport';


// Included styles
process.env.NODE_ENV === 'production' ? require('../dist/styles.css') : require('../src/css/app.scss');

// Addon-options
setOptions({
  name: "Winding Tree UI",
  url: "https://github.com/windingtree/wt-ui",
  addonPanelInRight: true,
  // Options to change presentation
  // showAddonPanel: false,
  // sidebarAnimations: false,
});

addDecorator(story => (
  <div style={{margin: '20px'}}>
    {story()}
  </div>
));

function loadStories() {
  require('../src/stories/overview.stories.js');
  require('../src/stories/branding.stories.js');
  require('../src/stories/layout.stories.js');
  require('../src/stories/preset-blocks.stories.js');
  require('../src/stories/typography.stories.js');
  require('../src/stories/media.stories.js');
  require('../src/stories/controls.stories.js');
  require('../src/stories/navigation.stories.js');
  require('../src/stories/containers.stories.js');
  require('../src/stories/feedback.stories.js');
  require('../src/stories/utilities.stories.js');
}

configure(loadStories, module);
