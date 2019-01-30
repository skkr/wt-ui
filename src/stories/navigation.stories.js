import React from 'react';

import { storiesOf } from '@storybook/react';
import 'bootstrap'

// Included addons
import { doc } from 'storybook-readme';

// Included components
import { withCleanPreview, withCodePreview, } from './HOCs/with-docs'
import { withDropdown, withScrollSpy, withVariableNavBar} from "./HOCs/bootstrap";

// Readme files
import BaseNav from './navigation/base-nav.md';
import NavTabs from './navigation/nav-tabs.md';
import NavPointers from './navigation/nav-pointers.md';
import NavPills from './navigation/nav-pills.md';
import Navbar from './navigation/navbar.md';
import NavbarAnimated from './navigation/navbar-animated.md';
import Breadcrumb from './navigation/breadcrumb.md';
import Dropdown from './navigation/dropdown.md';
import Pagination from './navigation/pagination.md';
import Scrollspy from './navigation/scrollspy.md';


// COMPONENTS
// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *


storiesOf('Navigation', module)

  // Base Nav
  .add('Base nav', withCodePreview(BaseNav, () =>
    <div>
      <ul className="nav">
        <li className="nav-item">
          <a className="nav-link active" href="#">Active</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="#">Disabled</a>
        </li>
      </ul>
    </div>
  ))
  // Nav Tabs
  .add('Nav Tabs', withCodePreview(NavTabs, () =>
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a className="nav-link active" href="#">Active</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>
        <div className="dropdown-menu">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <a className="dropdown-item" href="#">Something else here</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Separated link</a>
        </div>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Link</a>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
  ))
  // Nav Pointers
  .add('Nav Pointers', withCodePreview(NavPointers, () =>
    <div>
      <ul className="nav nav-pointers" role="tablist">
        <li className="nav-item col-6 col-sm-4 col-md-2">
          <a className="nav-link active" data-toggle="tab" href="#demo-1" role="tab" aria-selected="true">
            <img src="https://windingtree.com/assets/img/in-the-press/quotes/businessinsider.png" alt="Business Insider"/>
          </a>
        </li>
        <li className="nav-item col-6 col-sm-4 col-md-2">
          <a className="nav-link" data-toggle="tab" href="#demo-2" role="tab" aria-selected="false">
            <img src="https://windingtree.com/assets/img/in-the-press/quotes/Swissport.png" alt="Swissport"/>
          </a>
        </li>
        <li className="nav-item col-6 col-sm-4 col-md-2">
          <a className="nav-link" data-toggle="tab" href="#demo-3" role="tab" aria-selected="false">
            <img src="https://windingtree.com/assets/img/in-the-press/quotes/coindesk.png" alt="Coindesk"/>
          </a>
        </li>
        <li className="nav-item col-6 col-sm-4 col-md-2">
          <a className="nav-link" data-toggle="tab" href="#demo-4" role="tab" aria-selected="false">
            <img src="https://windingtree.com/assets/img/in-the-press/quotes/skift.svg" alt="Skift"/>
          </a>
        </li>
        <li className="nav-item col-6 col-sm-4 col-md-2">
          <a className="nav-link" data-toggle="tab" href="#demo-5" role="tab" aria-selected="false">
            <img src="https://windingtree.com/assets/img/in-the-press/quotes/businessinsider.png" alt="Business Insider"/>
          </a>
        </li>
        <li className="nav-item col-6 col-sm-4 col-md-2">
          <a className="nav-link" data-toggle="tab" href="#demo-6" role="tab" aria-selected="false">
            <img src="https://windingtree.com/assets/img/in-the-press/quotes/Swissport.png" alt="Swissport"/>
          </a>
        </li>
      </ul>

      <div style={{ height: 0, overflow: 'hidden!important' }}>
        <div className="tab-content block-shadow px-2 py-3 bg-white">
          <div className="tab-pane fade show active" id="quote-1" role="tabpanel"> </div>
          <div className="tab-pane fade " id="quote-2" role="tabpanel"> </div>
          <div className="tab-pane fade " id="quote-3" role="tabpanel"> </div>
          <div className="tab-pane fade " id="quote-4" role="tabpanel"> </div>
          <div className="tab-pane fade " id="quote-5" role="tabpanel"> </div>
          <div className="tab-pane fade " id="quote-6" role="tabpanel"> </div>
        </div>
      </div>
    </div>
  ))
  // Nav Pills
  .add('Nav Pills', withCodePreview(NavPills, () =>
    <ul className="nav nav-pills">
      <li className="nav-item">
        <a className="nav-link active" href="#">Active</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>
        <div className="dropdown-menu">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <a className="dropdown-item" href="#">Something else here</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Separated link</a>
        </div>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Link</a>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
  ))
  // Navbar
  .add('Navbar', withCodePreview(Navbar, withVariableNavBar(() =>
    <div style={{
      overflow: 'hidden', height: 320,
      backgroundColor: '#fff',
    }}>
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
    </div>
  )))
  // Navbar (Animated)
  .add('Navbar (Animated)', withCleanPreview(NavbarAnimated, withVariableNavBar(() =>
    <div style={{
      overflow: 'hidden', height: 320,
      backgroundColor: '#5F2987',
      backgroundImage: 'radial-gradient(circle at 50% 255%, #29cb96, #5f2987 80.6%)'
    }}>
      <nav className="navbar navbar-dark navbar-expand-lg navbar--toggle-bg" id="navbar" style={{opacity: 0}}>
        <div className="container">
          <a href="/" className="navbar-brand d-block">Winding Tree</a>
          <button className="navbar-toggler px-0 border-0" id="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-content" aria-controls="navbar-content" aria-expanded="false" aria-label="Toggle navigation">
            <i className="mdi mdi-24px mdi-menu"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbar-content">
            {/* <ul className="navbar-nav ml-auto" id="navbar-nav" style={{transform: 'translateX(212px)'}}> */}
            <ul className="navbar-nav ml-auto navbar-nav--animated-btn" id="navbar-nav">

              {/* Normal item */}
              <li className="nav-item">
                <a href="/" className="nav-link">
                Normal item
                </a>
              </li>

              {/* Dropdown */}
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Dropdown
                </a>
                <div className="dropdown-menu">
                  <a href="/" className="dropdown-item">
                    Dropdown item
                  </a>
                </div>
              </li>

              {/* Action button */}
              <li className="nav-item" id="navbar-btn">
                <a href="/" className="btn btn-block btn-primary">
                  Join Platform
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )))
  // Breadcrumb
  .add('Breadcrumb', withCodePreview(Breadcrumb, () =>
    <div>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item active" aria-current="page">Home</li>
        </ol>
      </nav>

      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="#">Home</a></li>
          <li className="breadcrumb-item active" aria-current="page">Library</li>
        </ol>
      </nav>

      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="#">Home</a></li>
          <li className="breadcrumb-item"><a href="#">Library</a></li>
          <li className="breadcrumb-item active" aria-current="page">Data</li>
        </ol>
      </nav>
    </div>
  ))
  // Dropdown
  .add('Dropdown', withCodePreview(Dropdown, withDropdown(() =>
    <div>
      {/* Single button dropdown */}
      <div className="d-inline-block mr-2 mb-2">
        <div className="dropdown">
          <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Dropdown button
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a className="dropdown-item" href="#">Action</a>
            <a className="dropdown-item" href="#">Another action</a>
            <a className="dropdown-item" href="#">Something else here</a>
          </div>
        </div>
      </div>
      {/* Split outline-dark button */}
      <div className="d-inline-block">
        <div className="btn-group">
          <button type="button" className="btn btn-outline-dark">Action</button>
          <button type="button" className="btn btn-outline-dark dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <span className="sr-only">Toggle Dropdown</span>
          </button>
          <div className="dropdown-menu">
            <a className="dropdown-item" href="#">Action</a>
            <a className="dropdown-item" href="#">Another action</a>
            <a className="dropdown-item" href="#">Something else here</a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="#">Separated link</a>
          </div>
        </div>
      </div>
    </div>
  )))
  // Pagination
  .add('Pagination', withCodePreview(Pagination, () =>
    <div>
      <nav aria-label="Pagination Example">
        <ul className="pagination">
          <li className="page-item disabled">
            <a className="page-link" href="#" tabIndex="-1">Previous</a>
          </li>
          <li className="page-item"><a className="page-link" href="#">1</a></li>
          <li className="page-item active">
            <a className="page-link" href="#">2 <span className="sr-only">(current)</span></a>
          </li>
          <li className="page-item"><a className="page-link" href="#">3</a></li>
          <li className="page-item">
            <a className="page-link" href="#">Next</a>
          </li>
        </ul>
      </nav>

      <hr className="my-1"/>

      <nav aria-label="Pagination Example Small">
        <ul className="pagination pagination-sm justify-content-center">
          <li className="page-item disabled">
            <a className="page-link" href="#" tabIndex="-1">Previous</a>
          </li>
          <li className="page-item"><a className="page-link" href="#">1</a></li>
          <li className="page-item active">
            <a className="page-link" href="#">2 <span className="sr-only">(current)</span></a>
          </li>
          <li className="page-item"><a className="page-link" href="#">3</a></li>
          <li className="page-item">
            <a className="page-link" href="#">Next</a>
          </li>
        </ul>
      </nav>

      <hr className="my-1"/>

      <nav aria-label="Pagination Example Large">
        <ul className="pagination justify-content-end">
          <li className="page-item disabled">
            <a className="page-link" href="#" tabIndex="-1">Previous</a>
          </li>
          <li className="page-item"><a className="page-link" href="#">1</a></li>
          <li className="page-item active">
            <a className="page-link" href="#">2 <span className="sr-only">(current)</span></a>
          </li>
          <li className="page-item"><a className="page-link" href="#">3</a></li>
          <li className="page-item">
            <a className="page-link" href="#">Next</a>
          </li>
        </ul>
      </nav>
    </div>
  ))
  // Scrollspy
  .add('Scrollspy', withCodePreview(Scrollspy, withScrollSpy(() =>
    <div className="row">
      <div className="col-3">
      <div id="list-example" className="list-group">
        <a className="list-group-item list-group-item-action" href="#list-item-1" style={{pointerEvents: 'none'}}>Item 1</a>
        <a className="list-group-item list-group-item-action" href="#list-item-2" style={{pointerEvents: 'none'}}>Item2</a>
        <a className="list-group-item list-group-item-action" href="#list-item-3" style={{pointerEvents: 'none'}}>Item 3</a>
        <a className="list-group-item list-group-item-action" href="#list-item-4" style={{pointerEvents: 'none'}}>Item 4</a>
      </div>
      </div>

      <div className="col-9">
      <div data-spy="scroll" data-target="#list-example" data-offset="0" className="scrollspy-example" style={{height: 190, overflowY: 'scroll'}}>
        <h4 id="list-item-1">Item 1</h4>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        <h4 id="list-item-2">Item 2</h4>
        <p>Magni optio doloremque nulla corporis id reprehenderit.</p>
        <h4 id="list-item-3">Item 3</h4>
        <p>Repellat tempora, vel dolorem temporibus praesentium sequi ipsa aperiam quod.</p>
        <h4 id="list-item-4">Item 4</h4>
        <p style={{marginBottom: 130}}>Officiis id quis aspernatur beatae.</p>
      </div>
      </div>
    </div>
  )))
