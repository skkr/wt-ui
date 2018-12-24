import React from 'react';
import { storiesOf } from "@storybook/react";
import StoryRouter from 'storybook-react-router';

// Included addons
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import { doc } from 'storybook-readme';

// Included components
import { withCodePreview } from './HOCs/with-docs'
import { withCollapse } from "./HOCs/bootstrap";
import Slider from "react-slick";

// Readme files
import User from './preset-blocks/user.md';
import DevsMarquee from './preset-blocks/devs-marquee.md';
import PartnersMarquee from './preset-blocks/partners-marquee.md';
import LogoGallery from './preset-blocks/logo-gallery.md';

// COMPONENTS
// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *


const slider = {
  settings: {
    arrows: false,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    draggable: false,
    pauseOnFocus: true,
    pauseOnHover: true,
    speed: 10000,
    touchMove: false,
    variableWidth: true
  },
  data: {
    developers: [
      {name: "Maksim Izmaylov", img: "https://windingtree.com/assets/img/already-with-us/developers/max.jpg"},
      {name: "Jakub Vysoky", img: "https://windingtree.com/assets/img/already-with-us/developers/jakub.jpg"},
      {name: "Matias Oveja Smith", img: "https://windingtree.com/assets/img/already-with-us/developers/matias.jpg"},
      {name: "Augusto Lemble", img: "https://windingtree.com/assets/img/already-with-us/developers/augusto.jpg"},
      {name: "Jirka Chadima", img: "https://windingtree.com/assets/img/already-with-us/developers/jirka.jpg"},
      {name: "Nico Calabrese", img: "https://windingtree.com/assets/img/already-with-us/developers/nico.jpg"},
      {name: "Alex Menschikov", img: "https://windingtree.com/assets/img/already-with-us/developers/alex.jpg"},
      {name: "Robin Gottfried", img: "https://windingtree.com/assets/img/already-with-us/developers/robin.jpg"},
      {name: "OG Satoshi", img: "https://windingtree.com/assets/img/already-with-us/developers/og-satoshi.jpg"},
      {name: "Dave Montali", img: "https://windingtree.com/assets/img/already-with-us/developers/dave.jpg"},
      {name: "Pablo", img: "https://windingtree.com/assets/img/already-with-us/developers/pablo.jpeg"},
      {name: "Juan Ignacio Gipponi", img: "https://windingtree.com/assets/img/already-with-us/developers/juan.jpeg"}
    ],
    partners: [
      [
        {name: 'air-new-zealand', img: "https://windingtree.com/assets/img/partners/slider-1/air-new-zealand.svg"},
        {name: 'airfranceklm', img: "https://windingtree.com/assets/img/partners/slider-1/airfranceklm.svg"},
        {name: 'austrian', img: "https://windingtree.com/assets/img/partners/slider-1/austrian.svg"},
        {name: 'nordic', img: "https://windingtree.com/assets/img/partners/slider-1/nordic.png"},
        {name: 'siesta', img: "https://windingtree.com/assets/img/partners/slider-1/siesta.png"},
        {name: 'swiss', img: "https://windingtree.com/assets/img/partners/slider-1/swiss.svg"}
      ],
      [
        {name: 'brussels', img: "https://windingtree.com/assets/img/partners/slider-2/brussels.svg"},
        {name: 'citizen', img: "https://windingtree.com/assets/img/partners/slider-2/citizen.png"},
        {name: 'eurowings', img: "https://windingtree.com/assets/img/partners/slider-2/eurowings.svg"},
        {name: 'logo-swissport', img: "https://windingtree.com/assets/img/partners/slider-2/logo-swissport.png"},
        {name: 'lufthansa', img: "https://windingtree.com/assets/img/partners/slider-2/lufthansa.svg"}
      ],
      [
        {name: 'Sciant', img: "https://windingtree.com/assets/img/partners/slider-3/Sciant.png"},
        {name: 'airgateway', img: "https://windingtree.com/assets/img/partners/slider-3/airgateway.jpg"},
        {name: 'erevmax', img: "https://windingtree.com/assets/img/partners/slider-3/erevmax.png"},
        {name: 'rsk', img: "https://windingtree.com/assets/img/partners/slider-3/rsk.png"},
        {name: 'zeppelin', img: "https://windingtree.com/assets/img/partners/slider-3/zeppelin.svg"}
      ]
    ]
  }
}


const gallery = {
  data: {
    items: [
        {
          name: 'The Cointelegraph',
          img: "https://windingtree.com/assets/img/in-the-press/mentions/Cointelegraph.png",
          url: "https://cointelegraph.com/news/swiss-aviation-services-company-launches-blockchain-pilot-for-cargo-handling?utm_source=Telegram&amp;utm_medium=Social"
        },
        {
          name: 'Cash',
          img: "https://windingtree.com/assets/img/in-the-press/mentions/cash.png",
          url: "https://www.cash.ch/news/boersenticker-firmen/swissport-lotet-moeglichkeiten-der-blockchain-technologie-aus-1177476"
        },
        {
          name: 'Le Figaro',
          img: "https://windingtree.com/assets/img/in-the-press/mentions/Le_Figaro.png",
          url: "http://bourse.lefigaro.fr/indices-actions/actu-conseils/lufthansa-signe-un-partenariat-avec-la-start-up-suisse-winding-tree-6293447"
        },
        {
          name: 'Reuters',
          img: "https://windingtree.com/assets/img/in-the-press/mentions/reuters.png",
          url: "https://www.reuters.com/article/us-blockchain-travel-airnewzealand/air-new-zealand-swiss-travel-platform-winding-tree-in-blockchain-tie-up-idUSKBN1DM2KQ?il=0"
        },
        {
          name: 'Venture Beat',
          img: "https://windingtree.com/assets/img/in-the-press/mentions/VentureBeat.png",
          url: "https://venturebeat.com/2017/08/23/blockchain-startup-winding-tree-could-upend-the-travel-industry/"
        },
        {
          name: 'Forbes',
          img: "https://windingtree.com/assets/img/in-the-press/mentions/Forbes.png",
          url: "https://www.forbes.com/sites/francistapon/2018/02/12/what-winding-trees-ico-and-its-blockchain-based-technology-mean-to-the-travel-industry/#9fd472244dcf"
        },
        {
          name: 'Nasdaq',
          img: "https://windingtree.com/assets/img/in-the-press/mentions/nasdaq.png",
          url: "https://www.nasdaq.com/g00/article/what-might-lufthansas-adoption-of-the-blockchain-technology-mean-for-the-otas-cm859538?i10c.encReferrer=&amp;i10c.ua=1&amp;i10c.dv=14"
        },
        {
          name: 'Tagesspiegel',
          img: "https://windingtree.com/assets/img/in-the-press/mentions/spiegel.png",
          url: "https://www.tagesspiegel.de/wirtschaft/airbnb-ohne-airbnb-wie-konzerne-die-blockchain-nutzen/20425860.html"
        },
        {
          name: 'Cryptocoin News',
          img: "https://windingtree.com/assets/img/in-the-press/mentions/ccn.png",
          url: "https://www.ccn.com/lufthansa-partners-blockchain-startup-travel-apps-participates-ico/"
        },
        {
          name: 'Tnooz',
          img: "https://windingtree.com/assets/img/in-the-press/mentions/tnooz.png",
          url: "https://www.tnooz.com/article/applications-of-blockchain-travel/"
        },
        {
          name: 'The Next Web',
          img: "https://windingtree.com/assets/img/in-the-press/mentions/tnw.svg",
          url: "https://thenextweb.com/money/2017/09/08/1075124/"
        },
        {
          name: 'Financial Times',
          img: "https://windingtree.com/assets/img/in-the-press/mentions/financial-times.png",
          url: "https://www.ft.com/content/06bb9a76-c7b7-11e8-ba8f-ee390057b8c9"
        },
        {
          name: 'Yahoo! Finance',
          img: "https://windingtree.com/assets/img/in-the-press/mentions/yahoofinance.png",
          url: "https://finance.yahoo.com/news/world-fifth-largest-airline-firm-134000588.html"
        },
        {
          name: 'Investing.com',
          img: "https://windingtree.com/assets/img/in-the-press/mentions/investingcom.png",
          url: "https://www.investing.com/news/cryptocurrency-news/leading-airline-consortium-air-franceklm-mulls-blockchain-solutions-1634081"
        }
    ]
  }
}

// APP HEADER
storiesOf('Preset Blocks', module)


  // User
  .add('User', withCodePreview(User, withCollapse(() =>
    <div>

      <div className="user user-sm">
        <img className="user-img" src="http://windingtree.com/assets/img/in-the-press/quotes/avatars/lisa-farrar.jpg" width="60" height="60" alt="Lisa Farrar"/>
        <div className="user-data">
          <p className="user-name">Lisa Farrar</p>
          <p className="user-role">Chief digital officer at Nordic Choice Hotels</p>
        </div>
      </div>

      <hr className="my-1"/>

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

      <hr className="my-1"/>

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

    </div>
  )))
  // Devs Marquee
  .add('Devs Marquee', withCodePreview(DevsMarquee, () =>
    <Slider className="devs-marquee" {...slider.settings}>

      {slider.data.developers.map(developer => {
        return (

        <div className="devs-marquee-dev">
          <svg xmlns="http://www.w3.org/2000/svg" width="54" height="60" viewBox="0 0 54 60" className="devs-marquee-dev-img">
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <mask id="mask2" fill="white">
                <path d="M26.76,0a7.17,7.17,0,0,0-3.41,1L3.41,12.58A6.62,6.62,0,0,0,0,18.39V41.61a6.72,6.72,0,0,0,3.41,5.81L23.35,59a7.4,7.4,0,0,0,3.41,1,7.9,7.9,0,0,0,3.89-1L50.59,47.42A6.76,6.76,0,0,0,54,41.61V18.39a6.66,6.66,0,0,0-3.41-5.81L30.65,1A7.7,7.7,0,0,0,26.76,0Z" id="path2"></path>
              </mask>
              <image mask="url(#mask2)" width="54" height="60" xlinkHref={developer.img}></image>
            </g>
          </svg>
          <p className="devs-marquee-dev-name">{developer.name}</p>
        </div>

      )})}

    </Slider>
  ))
  // Partners Marquee
  .add('Partners Marquee', withCodePreview(PartnersMarquee, () =>
    <div>
      <Slider className="partners-marquee" {...slider.settings}>
        <h4 className="partners-marquee-title">Already joined us</h4>
        {slider.data.partners[0].map(partner => {
        return (
          <img className="partners-marquee-img" src={partner.img} alt={partner.name}/>
        )})}
      </Slider>

      <Slider className="partners-marquee" {...slider.settings} rtl={true}>
        <h4 className="partners-marquee-title">Already joined us</h4>
        {slider.data.partners[1].map(partner => {
        return (
          <img className="partners-marquee-img" src={partner.img} alt={partner.name}/>
        )})}
      </Slider>

      <Slider className="partners-marquee" {...slider.settings}>
        <h4 className="partners-marquee-title">Tech partners</h4>
        {slider.data.partners[2].map(partner => {
        return (
          <img className="partners-marquee-img" src={partner.img} alt={partner.name}/>
        )})}
      </Slider>
    </div>

  ))

  // Logo Gallery
  .add('Logo Gallery', withCodePreview(LogoGallery, () =>
    <div>

      <ul className="logo-gallery">
        {gallery.data.items.map(item => {
          return (
            <li className="logo-gallery-item">
              <a href={item.url}>
                <img src={item.img} alt={item.name} title={item.name}/>
              </a>
            </li>
          )})}
      </ul>

      <div className="row">
        <div className="col-lg-6">
          <h3 className="mt-4">Gallery without links</h3>
          <p className="mb-2">Simply remove the links, the the logos will be shown on their original color.</p>

          <ul className="logo-gallery">
            {gallery.data.items.map(item => {
              return (
                <li className="logo-gallery-item">
                  <img src={item.img} alt={item.name} title={item.name}/>
                </li>
              )})}
          </ul>
        </div>

        <div className="col col-sm-6">
         <h3 className="mt-4">Gallery without links and gray logos</h3>
          <p className="mb-2">Use the <code>.logo-gallery-muted</code> modifier to turn the logos gray.</p>

          <ul className="logo-gallery logo-gallery-muted">
            {gallery.data.items.map(item => {
              return (
                <li className="logo-gallery-item">
                  <img src={item.img} alt={item.name} title={item.name}/>
                </li>
              )})}
          </ul>
        </div>
      </div>

    </div>
  ))
