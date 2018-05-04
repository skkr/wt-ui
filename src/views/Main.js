import React, {Component} from 'react';
import {Link} from 'react-router-dom';

// Components
// import Component from '../components/Component.js'

// Libraries
import Image from "react-graceful-image";

export default class Main extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      name: 'Main'
    };
  }

  componentWillMount() {
    setTimeout(() => {
      this.props.setLoader(+1);
    }, 1);
  }

  componentDidMount() {
    window.scrollTo(0, 0);

    setTimeout(() => {
      this.props.setLoader(-1);
    }, 6000);
  }

  render () {
    const {showAlert, loadItems} = this.props;

    const Badge = (num) => {
      if (num != undefined) {
        return (
          <span
            className="
              d-inline-block mr-1
              font--alt text-white text-center
              rounded-circle bg-warning
            "
            style={{
              position: 'relative',
              top: -2,
              width: 25,
              height: 25,
              fontSize: '80%',
              lineHeight: '25px'
            }}
          >
            {num}
          </span>
        )
      }
    }


    return (
      <article id="app-content" role="main" className="container">
        <div className="row">
          <div className="col-12">

              <div className="page-header">
                <h1 className={`text--xxl ${loadItems>0 && 'animated tdFadeInRight'}`}
                  style={{animationDuration: '3s'}}
                >
                  Basic React Aplication
                </h1>
                <p className="lead mb-3">A boilerplate made with ReactJs, conceived to facilitate the building of the UI in future projects.</p>
              </div>

              <h2 className="mt-4"><b>Whats included</b></h2>
              <ul className="mb-4">
                <li>A minimal working ReactJS application, ready to use.</li>
                <li>Instrutions and conisiderations on how to start a new project.</li>
                <li>Some helpful libraries, to speed up the implementation of common requirements.</li>
                <li>A customized CSS framework based in Bootstrap.</li>
                <li>A style guide that documents the CSS assets and serves as a guide to use them.</li>
              </ul>

              <h2 className="mt-4"><b>Initial setup</b></h2>
              <p className=" mb-4">There are some settings to change based on each project needs.</p>

              <h5><b>{Badge('1')} Edit the app names and colors in manifest.json</b></h5>
              <p>This information is requested by the browsers to treat the app as a progressive web app (PWA).</p>
              <div className="highlight mb-4">
                <pre className="mb-0">
                  <code>
                  "short_name": "<em className="bg--marker">Winding Tree</em>",<br/>
                  "name": "<em className="bg--marker">Winding Tree PWA</em>",<br/>
                  "theme_color": "<em className="bg--marker">#008A94</em>",<br/>
                  "background_color": "<em className="bg--marker">#fff</em>",
                  </code>
                </pre>
              </div>

              <h5><b>{Badge('2')} Edit index.template.html</b></h5>
              <h6>Change the following settings to match with your project.</h6>
              <ul>
                <li>The <code>&lt;title&gt;</code> tag.</li>
                <li>The <code>&lt;meta name="description"&gt;</code> </li>
                <li>The relevant items in the <code>&lt;!-- PWA Settings --&gt;</code> section.</li>
                <li>Point to the righght icon images and consider to update <code>img/content/wt-refimg.png</code></li>
                <li>The tag <code>&lt;H1&gt;</code> after the <code>.loader</code></li>
              </ul>
              <p className="mb-4"><small><b>Note:</b> <em>The page includes a loader that can be removed or modified if necesary.</em></small></p>

              <h5><b>{Badge('3')} In App.js edit the layouts and the views as required</b></h5>
              <p className="mb-0">At the moment there are two layouts, <code>LayoutMain</code> and <code>LayoutError</code>.
              The layouts have a basic structure used by one or more views. For example <code>LayoutMain</code> contains the <em>AppHeader</em> and <em>AppFooter</em>, while <code>LayoutError</code> doesn't have a footer.
              </p>
              <h6 className="mb-4">The app has three views defined:</h6>
              <ul className="mb-4">
                <li><Link to="/" hrefLang="en">Main</Link> <small className="text-muted"><em>(this one)</em></small></li>
                <li><Link to="Secondary" hrefLang="en">Secondary</Link></li>
                <li><Link to="error" hrefLang="en">Error404</Link></li>
              </ul>

              <h5><b>{Badge('4')} Update icons font if necesary</b></h5>
              <p>The icons included in this app are loaded form a custom font created with <a href="http://fontello.com" target="_blank">fontello.com</a>.
              If the font files are updated, remember to apply the changes to the CSS file in <code>/font/wt-icons.css</code>.</p>
              <p>If you choose to use a different resource (ie. font-awesome), you should replace that file and update the corespondent link in <code>index.template.html</code></p>

              <div className="highlight mb-4">
                <pre className="mb-0">
                  <code>
                    &lt;link rel="stylesheet" href="font/wt-icons.css"&gt;
                  </code>
                </pre>
              </div>

              <h5><b>{Badge('5')} Update the PWA icons</b></h5>
              <p className="mb-4">Simply update the icon images located in <code>img/content/app-icons/*</code> as required for your project.</p>

              <h5><b>{Badge('6')} Update the footer. <em className="text-muted text--sm">(optional)</em></b></h5>
              <p className="mb-4">Edit <code>components\AppFooter.js</code> or keep the default Winding Tree footer.</p>

              <h5><b>{Badge('7')} Consider to update the config files in the Webpack folder <em className="text-muted text--sm">(optional)</em></b></h5>
              <p>Depending on the project needs you might want to modify these files.</p>
              <ul className="mb-4">
                <li><code>webpack\dev\webpack.dev.config.js</code></li>
                <li><code>webpack\prod\webpack.prod.config.js</code></li>
                <li><code>webpack\dev\postcss.config.js</code></li>
                <li><code>webpack\prod\postcss.config.js</code></li>
              </ul>

              <h5><b>{Badge('8')} Remove the unused images from the img folder</b></h5>
              <p className="mb-5">This one is pretty obvious, and just a reminder.</p>


              <h2><b>Included Libraries</b></h2>
              <p>The package includes a few libraries, to simplify the implementation of common requirements. Click the button below to get more info.</p>

              <p className="mb-5">
                <Link to="Secondary" className="btn btn-accent">Review the included libraries</Link>
              </p>


              <h2><b>Style Guide</b></h2>
              <p>It was also included a style guide that showcases all the elements and components customized according to the branding guidelines of <b>Winding Tree</b>.</p>
              <p className="mb-0">The configuration settings for the style guide are located in <code>webpack\prod\postcss.config.js</code></p>
              <p className="mb-4">The CSS properties used to modify the style guide itself, are located in <code>css\styleguide\style.css</code></p>

              <p className="mb-5">
                <a href="/styleguide" className="btn btn-accent disabled">Review the Style Guide</a>
              </p>

          </div>
        </div>
      </article>
    )
  }
}
