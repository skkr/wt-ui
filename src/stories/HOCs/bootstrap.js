import React from 'react'
import 'bootstrap'
import $ from 'jquery'

export function withPopover(WrappedComponent) {
  class WithPopover extends React.Component {
    componentDidMount() {
      $('[data-toggle="popover"]').popover()
    }
    render() {
      return <WrappedComponent {...this.props}/>
    }
  }
  return () => <WithPopover/>
}

export function withTooltip(WrappedComponent) {
  class WithTooltip extends React.Component {
    componentDidMount() {
      $('[data-toggle="tooltip"]').tooltip()
    }
    render() {
      return <WrappedComponent {...this.props}/>
    }
  }
  return () => <WithTooltip/>
}

export function withDropdown(WrappedComponent) {
  class WithDropdown extends React.Component {
    componentDidMount() {
      $('[data-toggle="dropdown"]').dropdown();
    }
    render() {
      return <WrappedComponent {...this.props}/>
    }
  }
  return () => <WithDropdown/>
}

export function withCollapse(WrappedComponent) {
  class WithCollapse extends React.Component {
    componentDidMount() {
      $('[data-toggle="collapse"]').collapse();
    }
    render() {
      return <WrappedComponent {...this.props}/>
    }
  }
  return () => <WithCollapse/>
}

export function withScrollSpy(WrappedComponent) {
  class WithScrollSpy extends React.Component {
    componentDidMount() {
      $('[data-spy="scroll"]').each(function () {
        $(this).scrollspy('refresh')
      })
    }
    render() {
      return <WrappedComponent {...this.props}/>
    }
  }
  return () => <WithScrollSpy/>
}

export function withVariableNavBar(WrappedComponent) {
  class WithVariableNavBar extends React.Component {

    componentDidMount() {

      $('[data-toggle="collapse"]').collapse();

      // Optimized resize
      // https://developer.mozilla.org/ru/docs/Web/Events/resize
      (function () {
        const throttle = function (type, name, obj) {
          obj = obj || window;
          let running = false;
          const func = function () {
            if (running) {
              return;
            }
            running = true;
            requestAnimationFrame(function () {
              obj.dispatchEvent(new CustomEvent(name));
              running = false;
            });
          };
          obj.addEventListener(type, func);
        };

        throttle('resize', 'optimizedResize');
      })();

      const navbar = document.getElementById('navbar');
      const navbarNav = document.getElementById('navbar-nav');
      const navbarToggler = document.getElementById('navbar-toggler');
      const navbarBtn = document.getElementById('navbar-btn');

      const MQ = {
        down: '(max-width: 991.98px)',
        up: '(min-width: 992px)'
      };

      function navbarShow() {
        if (typeof(navbarBtn) != 'undefined' && navbarBtn != null) {
          if (navbarNav.classList.contains("navbar-nav-animated-btn")) {
            if (window.matchMedia(MQ.up).matches) {
              navbarNav.setAttribute('style', 'transform: translateX(' + (navbarBtn.offsetWidth + 30) + 'px)');
            } else {
              navbarNav.removeAttribute('style');
            }
          }

          setTimeout(function() {
            navbar.setAttribute('style', 'opacity: 1; visibility: visible;');
          }, 900); // .navbar-nav translateX transition duration * 2
        }
      }

      function navbarToggle() {
        if (navbar.classList.contains("navbar-toggle-bg")) {
          if (navbarToggler.getAttribute('aria-expanded') === 'false') {
            if (window.pageYOffset > navbar.offsetHeight) {
              navbar.classList.add('navbar-light');
              navbar.classList.add('bg-white');
              navbar.classList.remove('navbar-dark');
            } else {
              navbar.classList.add('navbar-dark');
              navbar.classList.remove('navbar-light');
              navbar.classList.remove('bg-white');
            }
          }
        }
      }

      navbarToggle();
      navbarShow();

      window.addEventListener('scroll', function() {
        navbarToggle();
      });

      window.addEventListener('optimizedResize', function() {
        if (window.matchMedia(MQ.up).matches) {
          if (typeof(navbarBtn) != 'undefined' && navbarBtn != null) {
            navbar.setAttribute('style', 'opacity: 0; visibility: hidden;');
          }
        }
        navbarShow();
      });

      function mobileMenu(toggleButton) {

        const icon = toggleButton.querySelector('.mdi');

        if (toggleButton.getAttribute('aria-expanded') === 'false') {
          if (navbar.classList.contains("navbar-toggle-bg")) {
            navbar.classList.add('navbar-light', 'bg-white');
            navbar.classList.remove('navbar-dark');
          }

          icon.classList.remove('mdi-menu');
          icon.classList.add('mdi-close');
        } else {
          setTimeout(function() {
            if (navbar.classList.contains("navbar-toggle-bg")) {
              if (document.documentElement.scrollTop <= navbar.offsetHeight) {
                navbar.classList.add('navbar-dark');
                navbar.classList.remove('navbar-light', 'bg-white');
              }
            }

            icon.classList.remove('mdi-close');
            icon.classList.add('mdi-menu');
          }, 250); // Bootstrap $transition-collapse transition duration .35s - (substract) .1s
        }
      }

      $('[data-toggle="dropdown"]').dropdown();
      $("#navbar-toggler").on('click', function(){
        mobileMenu(this);
      });

      navbarToggler.addEventListener('touchend', function() {
        mobileMenu(this);
      });
    }

    render() {
      return <WrappedComponent {...this.props}/>
    }

  }
  return () => <WithVariableNavBar/>
}
