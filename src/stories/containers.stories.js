import React from 'react';

import { storiesOf } from '@storybook/react';

// Included addons
import { withCleanPreview, withCodePreview} from './HOCs/with-docs';
import { withCollapse, withVariableNavBar } from "./HOCs/bootstrap";

// Included components
import Slider from "react-slick";
import BSCarousel from  "../components/Carousel";

// Readme files
// import Jumbotron from './containers/jumbotron.md'; UNDER REVIEW
import Table from './containers/table.md';
import ListGroup from './containers/list-group.md';
import TabbablePanes from './containers/tabbable-panes.md';
import Figure from './containers/figure.md';
import Card from './containers/card.md';
import Collapse from './containers/collapse.md';

import Carousel from './containers/carousel.md';
import PhotoSlider from './containers/photo-slider.md';

import Modal from './containers/modal.md';
import ModalMedia from './containers/modal-image.md';
import ModalCarousel from './containers/modal-carousel.md';

// Icon images
import airplaneTicket from '@windingtree/wt-ui-assets/custom-icons/wt-icon--airplane-ticket.svg';


function NavArrow(props) {
  const { className, style, onClick, dir } = props;
  return (
    <button
      type="button"
      className={dir=="left" ? "slick-prev" : "slick-next"}
      onClick={onClick}
    >
      <i className={"mdi mdi-lg mdi-chevron-" + (dir=="left" ? "left" : "right")} aria-hidden="true"/>
      <span className="sr-only">{(dir=="left" ? "Previows" : "Next")}</span>
    </button>
  );
}

const photoSlider = {
  settings: {
    arrows: true,
    draggable: false, // REVIEW: modals are launched unintentionally when dragging
    nextArrow: <NavArrow dir="right"/>,
    prevArrow: <NavArrow dir="left"/>,
    centerMode: true,
    centerPadding: 0,
    slidesToShow: 3,
    dots: true,
    responsive: [{
      breakpoint: 992,
      settings: {
        arrows: false,
        slidesToShow: 1,
      }
    }]
  },
  data: [
    {src: "https://windingtree.com/assets/img/photo-gallery/1.jpg", desc: "Travel Tech Con 2018 (San Francisco)"},
    {src: "https://windingtree.com/assets/img/photo-gallery/7.jpeg", desc: "Travel Startup Pitch Competition (San Francisco)"},
    {src: "https://windingtree.com/assets/img/photo-gallery/6.jpeg", desc: "Travel Tech Meetup (San Francisco)"},
    {src: "https://windingtree.com/assets/img/photo-gallery/2.jpg", desc: "Travel Tech Con 2018 (San Francisco)"},
    {src: "https://windingtree.com/assets/img/photo-gallery/3.jpg", desc: "Travel Tech Con 2018 (San Francisco)"},
    {src: "https://windingtree.com/assets/img/photo-gallery/4.jpg", desc: "Travel Tech Con 2018 (San Francisco)"},
    {src: "https://windingtree.com/assets/img/photo-gallery/5.jpg", desc: "Travel Tech Con 2018 (San Francisco)"},
  ]
}

const mediaGallery = {
data: [
  {src: "https://windingtree.com/assets/img/photo-gallery/1.jpg", desc: "Travel Tech Con 2018 (San Francisco)"},
  {mediaType: "video", src: "https://www.youtube.com/embed/LHjwNqvLTak", desc: "Travel Tech Con 2018 (San Francisco)"},
  {src: "https://windingtree.com/assets/img/photo-gallery/7.jpeg", desc: "Travel Startup Pitch Competition (San Francisco)"},
  {src: "https://windingtree.com/assets/img/photo-gallery/6.jpeg", desc: "Travel Tech Meetup (San Francisco)"},
  {src: "https://windingtree.com/assets/img/photo-gallery/2.jpg", desc: "Travel Tech Con 2018 (San Francisco)"},
  {src: "https://windingtree.com/assets/img/photo-gallery/3.jpg", desc: "Travel Tech Con 2018 (San Francisco)"},
  {src: "https://windingtree.com/assets/img/photo-gallery/4.jpg", desc: "Travel Tech Con 2018 (San Francisco)"},
  {src: "https://windingtree.com/assets/img/photo-gallery/5.jpg", desc: "Travel Tech Con 2018 (San Francisco)"},
]
}


// COMPONENTS
// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *


storiesOf('Containers', module)

  // Jumbotron
  // .add('Jumbotron', withCodePreview(Jumbotron, () =>
  //   <div className="jumbotron">
  //     <h1 className="display-4">Hello, world!</h1>
  //     <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
  //     <hr className="my-4"/>
  //     <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
  //     <p className="lead">
  //       <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
  //     </p>
  //   </div>
  // ))
  // Table
  .add('Table', withCodePreview(Table, () =>
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Handle</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Larry</td>
          <td>the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </table>
  ))
  // List Group
  .add('List Group', withCodePreview(ListGroup, () =>
    <div className="row">

    <div className="col">
      <ul className="list-group">
        <li className="list-group-item active">Cras justo odio</li>
        <li className="list-group-item">Dapibus ac facilisis in</li>
        <li className="list-group-item d-flex justify-content-between align-items-center">Morbi leo risus <span className="badge badge-primary badge-pill">14</span></li>
        <li className="list-group-item">Porta ac consectetur ac</li>
        <li className="list-group-item disabled">Vestibulum at eros</li>
      </ul>
    </div>

    <div className="col">
      <div className="list-group list-group-flush">
        <a href="#" className="list-group-item list-group-item-action active">
          Cras justo odio
        </a>
        <a href="#" className="list-group-item list-group-item-action">Dapibus ac facilisis in</a>
        <a href="#" className="list-group-item d-flex justify-content-between align-items-center list-group-item-action">Morbi leo risus <span className="badge badge-primary badge-pill">14</span></a>
        <a href="#" className="list-group-item list-group-item-action">Porta ac consectetur ac</a>
        <a href="#" className="list-group-item list-group-item-action disabled">Vestibulum at eros</a>
      </div>
    </div>

    </div>
  ))
  // Tabbable Panes
  .add('Tabbable Panes', withCodePreview(TabbablePanes, () =>
    <div>
      <ul className="nav nav-tabs mb-3" id="myTab" role="tablist">
        <li className="nav-item">
          <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Profile</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Contact</a>
        </li>
      </ul>
      <div className="tab-content" id="myTabContent">
        <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">Panel 1</div>
        <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">Panel 2</div>
        <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">Panel 3</div>
      </div>
    </div>
  ))
  // Figure
  .add('Figure', withCodePreview(Figure, () =>
    <figure className="figure">
      <img src="http://via.placeholder.com/300x200" className="figure-img img-fluid rounded" alt="A generic square placeholder image with rounded corners in a figure."/>
      <figcaption className="figure-caption">A caption for the above image.</figcaption>
    </figure>
  ))
  // Card
  .add('Card', withCodePreview(Card, () =>
    <div>

      <div className="row">

        <div className="col-md-6 col-lg-3">
          <div className="card">
            <div class="card-header pb-0 d-none d-md-block text-center bg-white">
              <i className="mdi mdi-lg mdi-github-circle"/>
            </div>
            <div className="card-body text-center">
              <h3 className="card-title h3">Card title</h3>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-3">
          <div className="card">
            <div className="card-body text-center">
              <h3 className="card-title card-title-lg">Support</h3>
              <p className="card-text">Whether it's technology expertise or sponsorship - put your organization in the spotlight of the top industry innovators and travel startups.</p>
            </div>
            <div class="card-footer text-center">
              <p className="py-1">Admission: Free 2 days</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-3">
          <div className="card">
            <img className="card-img-top" src="http://via.placeholder.com/286x180" alt="Card image cap"/>
            <div className="card-body text-center">
              <h3 className="card-title">Suppliers</h3>
              <p className="card-text">New proffitable distribution channel.</p>
              <a href="#" className="btn btn-primary">Learn more <span className="d-none">about Winding Tree suppliers</span></a>
            </div>
          </div>
        </div>

      </div>

      <h6 className="mt-2">Link-cards</h6>
      <p className="mb-2">Turn cards into links by adding the <code>.card</code> class to the coninainer link, and replacce the inner link with a spann with class <code>.card-link</code>.</p>

      <div className="row">
        <div className="col-md-6 col-lg-3">
          <a className="card" href="#">
            <div class="card-header d-none d-md-block text-center">
              <img src={airplaneTicket} width="80" alt="Card image cap"/>
            </div>
            <div className="card-body">
              <h5 className="card-title">Suppliers</h5>
              <p className="card-text">Suppliers can distribute inventory directly to points of sale, skipping costly intermediaries and bottlenecks to data.</p>
              <span className="card-link">Load more</span>
            </div>
          </a>
        </div>
      </div>

    <h6 className="mt-2">Carousel-cards</h6>
    <p className="mb-2">Is possible to add a carousel on top of the card, simple combine the <code>.card-deader</code> with the <code>.carousel</code> component.</p>

    <div className="row">

        <div className="col-md-6 col-lg-3">
          <div className="card">

              <div id="img-carousel" className="card-header carousel slide" data-ride="carousel" style={{maxWidth: 300}}>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img className="d-block w-100" src="http://via.placeholder.com/300x180/9f09e0/ffffff" alt="First slide"/>
                  </div>
                  <div className="carousel-item">
                    <img className="d-block w-100" src="http://via.placeholder.com/300x180/1ac592/ffffff" alt="Second slide"/>
                  </div>
                  <div className="carousel-item">
                    <img className="d-block w-100" src="http://via.placeholder.com/300x180/0b8fdf/ffffff" alt="Third slide"/>
                  </div>
                </div>
                <a className="carousel-control-prev" href="#img-carousel" role="button" data-slide="prev">
                  <i className="mdi mdi-48px mdi-chevron-left" aria-hidden="true"/>
                  <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#img-carousel" role="button" data-slide="next">
                  <i className="mdi mdi-48px mdi-chevron-right" aria-hidden="true"/>
                  <span className="sr-only">Next</span>
                </a>
              </div>

            <div className="card-body text-center">
              <h3 className="card-title">Suppliers</h3>
              <p className="card-text">New proffitable distribution channel.</p>
              <a href="#" className="btn btn-primary">Learn more <span className="d-none">about Winding Tree suppliers</span></a>
            </div>
          </div>
        </div>

    </div>

    </div>
  ))
  // Collapse
  .add('Collapse', withCodePreview(Collapse, withCollapse(() =>
    <div>
      <p>
        <a className="btn btn-primary mr-2" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
          Link with href
        </a>
        <button className="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
          Button with data-target
        </button>
      </p>
      <div className="collapse" id="collapseExample">
        <div className="card card-body">
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
        </div>
      </div>
    </div>
  )))


// SLIDER
storiesOf('Containers/ Slider', module)
  // Carousel
  .add('Carousel', withCodePreview(Carousel, () =>
  <div id="img-carousel" className="carousel slide" data-ride="carousel" style={{maxWidth: 300}}>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img className="d-block w-100" src="http://via.placeholder.com/300x180/9f09e0/ffffff" alt="First slide"/>
      </div>
      <div className="carousel-item">
        <img className="d-block w-100" src="http://via.placeholder.com/300x180/1ac592/ffffff" alt="Second slide"/>
      </div>
      <div className="carousel-item">
        <img className="d-block w-100" src="http://via.placeholder.com/300x180/0b8fdf/ffffff" alt="Third slide"/>
      </div>
    </div>
    <a className="carousel-control-prev" href="#img-carousel" role="button" data-slide="prev">
      <i className="mdi mdi-48px mdi-chevron-left" aria-hidden="true"/>
      <span className="sr-only">Previous</span>
    </a>
    <a className="carousel-control-next" href="#img-carousel" role="button" data-slide="next">
      <i className="mdi mdi-48px mdi-chevron-right" aria-hidden="true"/>
      <span className="sr-only">Next</span>
    </a>
  </div>
))
// Photo Sider
.add('Photo Sider', withCodePreview(PhotoSlider, () =>
  <div>
    {/* Slider */}
    <Slider className="photo-slider" {...photoSlider.settings}>
      {photoSlider.data.map((item, index) => {
        return (
        <figure data-toggle="modal" data-target={'#modal-media-' + (index + 1)}>
          <img src={item.src} alt={item.desc} className="img-fluid"/>
          <figcaption>
            {item.desc}
          </figcaption>
        </figure>
      )})}
    </Slider>
    {/* Modals */}
    {photoSlider.data.map((item, index) => {
      return (
        <div className="modal-media modal fade" id={'modal-media-' + (index + 1)} tabIndex={'-'+ (index + 1)} role="preview" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-body">
                <img src={item.src} alt={item.desc} className="img-fluid"/>
              </div>
            </div>
          </div>
        </div>
    )})}
  </div>
))


// MODALS
storiesOf('Containers/ Modal', module)
  // Modal
  .add('Modal', withCodePreview(Modal, () =>
    <div className="bg-accent">
      <div className="modal" tabIndex="-1" role="dialog" style={{display: 'block', position: 'static'}}>
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Modal title</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <i className="mdi mdi-close"></i>
              </button>
            </div>
            <div className="modal-body">
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-link" data-dismiss="modal">Cancel</button>
              <button type="button" className="btn btn-primary">Accept</button>
            </div>
          </div>
        </div>
      </div>

      <button type="button" className="btn btn-outline-light btn-sm m-1" data-toggle="modal" data-target="#exampleModal2">
        Launch demo modal
      </button>

      <div className="modal fade" id="exampleModal2" tabIndex="-1" role="dialog" aria-labelledby="exampleModal2Label" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModal2Label">Modal title</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <i className="mdi mdi-close"></i>
              </button>
            </div>
            <div className="modal-body">
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-link" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Save</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  ))
  // Modal (media)
  .add('Modal (media)', withCodePreview(ModalMedia, () =>
    <div className="bg-accent">

      <button type="button" className="btn btn-outline-light btn-sm m-1" data-toggle="modal" data-target="#img-modal-demo">
        Launch image modal
      </button>

      <button type="button" className="btn btn-outline-light btn-sm m-1" data-toggle="modal" data-target="#video-modal-demo">
        Launch video modal
      </button>

      <div className="modal modal-media fade" id="img-modal-demo" tabIndex="-1" role="preview" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <img src={mediaGallery.data[0].src} alt={mediaGallery.data[0].desc}/>
            </div>
          </div>
        </div>
      </div>

      <div className="modal modal-media fade" id="video-modal-demo" tabIndex="-1" role="preview" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <div className="video-fluid">
                <iframe
                  className="youtube-video"
                  src={mediaGallery.data[1].src}
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  ))
  // Modal (carousel)
  .add('Modal (carousel)', withCodePreview(ModalCarousel, () =>
    <div className="bg-accent">

      <button type="button" className="btn btn-outline-light btn-sm m-1" data-toggle="modal" data-target="#carousel-modal-demo">
        Launch carousel modal
      </button>

      <div className="modal modal-carousel" id="carousel-modal-demo" tabIndex="-1" role="slideshow" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              {/* Album Title */}
              <h5 className="modal-title">
                Travel Tech Con 2018
                </h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <i className="mdi mdi-close"></i>
              </button>
            </div>
            <div className="modal-body d-flex align-items-center">
              <BSCarousel list={mediaGallery.data} hasIndicators />
            </div>
          </div>
        </div>
      </div>

    </div>
  ))

