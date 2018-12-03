import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-react-router';

// Included addons
import { doc } from 'storybook-readme';

// Included components
import Resizable from 're-resizable';
import { withLayoutPreview, withCodePreview } from './HOCs/with-docs'
import { withVariableNavBar} from "./HOCs/bootstrap";
import AppFooter from '../components/AppFooter';

// Readme files
import Header from './layout/header.md';
import Content from './layout/content.md';
import Section from './layout/section.md';
import Footer from './layout/footer.md';

import Grid from './layout/grid.md';
import Grid__Container from './layout/grid__container.md';
import Grid__Row from './layout/grid__row.md';
import Grid__Col from './layout/grid__col.md';

import MediaObject from './layout/media-object.md';
import ContentDividers from './layout/content-dividers.md';


// COMPONENTS
// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *


// LAYOUT
storiesOf('Layout', module)

  // PRIMARY SECTIONS
  .addDecorator(StoryRouter())

  storiesOf('Layout/Sections', module)

  // App header
  .add('Header', withLayoutPreview(Header, withVariableNavBar(() =>
    <div style={{position: 'absolute', top: 0, left: 0, bottom: 0, right: 0, overflow: 'auto'}}>
      <header id="app-header" className="header-sticky">
          <nav className="navbar navbar-expand-lg navbar-light" id="navbar">
            <div className="container">
              <a className="navbar-brand mr-2" href="#">Navbar</a>

              {/* Toggle button */}
              <button className="navbar-toggler px-0 border-0" id="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-content" aria-controls="navbar-content" aria-expanded="false" aria-label="Toggle navigation">
                <i className="mdi mdi-24px mdi-menu"></i>
              </button>

              <div className="collapse navbar-collapse" id="navbar-content">
                <ul className="navbar-nav mr-auto" id="navbar-nav">

                  {/* Normal (active) item */}
                  <li className="nav-item active">
                    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                  </li>

                  {/* Dropdown */}
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Dropdown
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <a className="dropdown-item" href="#">Action</a>
                      <a className="dropdown-item" href="#">Another action</a>
                      <div className="dropdown-divider"></div>
                      <a className="dropdown-item" href="#">Something else here</a>
                    </div>
                  </li>

                  {/* Disabled item */}
                  <li className="nav-item">
                    <a className="nav-link disabled" href="#">Disabled</a>
                  </li>
                </ul>

                {/* Action form */}
                <div className="col px-0 pl-lg-5 pr-lg-0">
                  <form className="input-group input-group--responsive">
                    <input type="email" className="form-control" placeholder="Enter e-mail"/>
                    <div className="input-group-append">
                      <button className="btn btn-block btn-primary" type="submit">
                        Subscribe
                      </button>
                    </div>
                  </form>
                </div>

              </div>
            </div>
          </nav>
      </header>

      <div id="app-content" className="text-alpha">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima quas adipisci dolorum ex aliquam eligendi obcaecati sunt? Doloremque, vero veritatis vitae, tenetur esse ullam assumenda eum odit dicta debitis corrupti.</p>
        <p>Minima quas adipisci dolorum ex aliquam eligendi obcaecati sunt? Doloremque, vero veritatis vitae, tenetur esse ullam assumenda eum odit dicta debitis corrupti. Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima quas adipisci dolorum ex aliquam eligendi obcaecati sunt? Doloremque, vero veritatis vitae, tenetur esse ullam assumenda eum odit dicta debitis corrupti.</p>
        <p>Minima quas adipisci dolorum ex aliquam eligendi obcaecati sunt? Doloremque, vero veritatis vitae, tenetur esse ullam assumenda eum odit dicta debitis corrupti. Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima quas adipisci dolorum ex aliquam eligendi obcaecati sunt? Doloremque, vero veritatis vitae, tenetur esse ullam assumenda eum odit dicta debitis corrupti.</p>
        <p>Minima quas adipisci dolorum ex aliquam eligendi obcaecati sunt? Doloremque, vero veritatis vitae, tenetur esse ullam assumenda eum odit dicta debitis corrupti. Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima quas adipisci dolorum ex aliquam eligendi obcaecati sunt? Doloremque, vero veritatis vitae, tenetur esse ullam assumenda eum odit dicta debitis corrupti.</p>
      </div>
    </div>
  )))
  // App content
  .add('Content', doc(Content))
  // Section
  .add('Section', withLayoutPreview(Section, () =>
    <article className="app-section bg-grad">
      <div className="container">
      <div className="row">

      <div className="col-12 col-md-5">
        <h2 className="text-white">
          Líf Token
        </h2>
        <p className="lead text-white">
          Líf is used to exchange data and value between Winding Tree smart contracts, companies and users.
        </p>
      </div>
      </div>
      </div>
    </article>
  ))
  // App footer
  .add('Footer', withLayoutPreview(Footer, () =>
    <AppFooter/>
  ))


  // GRID
  storiesOf('Layout/Grid', module)
    // Grid
    .add('Overview', doc(Grid))
    //Container
    .add('Container', doc(Grid__Container))
    //Row
    .add('Row', doc(Grid__Row))
    //Column
    .add('Column', doc(Grid__Col))


  // LAYOUT ASSETS
  storiesOf('Layout/Layout Assets', module)
    // Media object
    .add('Media Object', withCodePreview(MediaObject, () =>
      <div className="media">
        <img className="mr-3" src="http://via.placeholder.com/120x120" alt="Generic placeholder image"/>
        <div className="media-body">
          <h5 className="mt-0">Media heading</h5>
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.
          Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.
          Fusce condimentum nunc ac nisi vulputate fringilla.
        </div>
      </div>
    ))
    // Content Dividers
    .add('Content Dividers', withCodePreview(ContentDividers, () =>
      <div>

        <hr/>

        <hr className="divider"/>

      </div>
    ))
