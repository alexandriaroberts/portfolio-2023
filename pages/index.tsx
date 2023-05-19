/* eslint-disable @next/next/no-img-element */
/** @jsx jsx */
/** @jsxRuntime classic */
import { jsx } from 'theme-ui';
import { gsap, Expo, Power1, Quint } from 'gsap';

import { Container } from '../components/Container';
import { Divider } from '../components/Divider';
import { H1, H2, P } from '../components/Typography';
import { Socials } from '../components/Socials';
import { HeadingDecoration } from '../components/HeadingDecoration';

export default function Home() {
  if (typeof document !== 'undefined') {
    // body element
    const body = document.body;

    // helper functions
    const MathUtils = {
      // linear interpolation
      lerp: (a: number, b: number, n: number) => (1 - n) * a + n * b,
      // distance between two points
      distance: (x1: number, y1: number, x2: number, y2: number) =>
        Math.hypot(x2 - x1, y2 - y1),
    };

    // get the mouse position
    const getMousePos = (ev: Event | undefined) => {
      let posx = 0;
      let posy = 0;
      const docEl = document.documentElement;
      if (!ev) ev = window.event;
      if ((ev as MouseEvent).pageX || (ev as MouseEvent).pageY) {
        posx = (ev as MouseEvent).pageX;
        posy = (ev as MouseEvent).pageY;
      } else if ((ev as MouseEvent).clientX || (ev as MouseEvent).clientY) {
        posx = (ev as MouseEvent).clientX + body.scrollLeft + docEl.scrollLeft;
        posy = (ev as MouseEvent).clientY + body.scrollTop + docEl.scrollTop;
      }
      return { x: posx, y: posy };
    };

    // mousePos: current mouse position
    // cacheMousePos: previous mouse position
    // lastMousePos: last last recorded mouse position (at the time the last image was shown)
    let cacheMousePos: { x: any; y: any };
    let lastMousePos: { x: any; y: any };
    let mousePos = (lastMousePos = cacheMousePos = { x: 0, y: 0 });

    // update the mouse position
    window.addEventListener('mousemove', (ev) => (mousePos = getMousePos(ev)));

    // gets the distance from the current mouse position to the last recorded mouse position
    const getMouseDistance = () =>
      MathUtils.distance(
        mousePos.x,
        mousePos.y,
        lastMousePos.x,
        lastMousePos.y
      );

    class Image {
      DOM: { el: any };
      defaultStyle: { scale: number; x: number; y: number; opacity: number };
      rect: any;
      constructor(el: any) {
        this.DOM = { el: el };
        // image deafult styles
        this.defaultStyle = {
          scale: 1,
          x: 0,
          y: 0,
          opacity: 0,
        };
        // get sizes/position
        this.getRect();
        // init/bind events
        this.initEvents();
      }
      initEvents() {
        // on resize get updated sizes/position
        window.addEventListener('resize', () => this.resize());
      }
      resize() {
        // reset styles
        gsap.set(this.DOM.el, this.defaultStyle);
        // get sizes/position
        this.getRect();
      }
      getRect() {
        this.rect = this.DOM.el.getBoundingClientRect();
      }
      isActive() {
        // check if image is animating or if it's visible
        return gsap.isTweening(this.DOM.el) || this.DOM.el.style.opacity != 0;
      }
    }

    class ImageTrail {
      DOM: { content: Element | null };
      images: Image[];
      imagesTotal: any;
      imgPosition: number;
      zIndexVal: number;
      threshold: number;
      constructor() {
        // images container
        this.DOM = { content: document.querySelector('.content') };
        // array of Image objs, one per image element
        this.images = [];
        Array.from(this.DOM.content?.querySelectorAll('img') ?? []).forEach(
          (img) => this.images.push(new Image(img))
        );
        // total number of images
        this.imagesTotal = this.images.length;
        // upcoming image index
        this.imgPosition = 0;
        // zIndex value to apply to the upcoming image
        this.zIndexVal = 1;
        // mouse distance required to show the next image
        this.threshold = 100;
        // render the images
        requestAnimationFrame(() => this.render());
      }
      render() {
        // get distance between the current mouse position and the position of the previous image
        let distance = getMouseDistance();
        // cache previous mouse position
        cacheMousePos.x = MathUtils.lerp(
          cacheMousePos.x || mousePos.x,
          mousePos.x,
          0.1
        );
        cacheMousePos.y = MathUtils.lerp(
          cacheMousePos.y || mousePos.y,
          mousePos.y,
          0.1
        );

        // if the mouse moved more than [this.threshold] then show the next image
        if (distance > this.threshold) {
          this.showNextImage();

          ++this.zIndexVal;
          this.imgPosition =
            this.imgPosition < this.imagesTotal - 1 ? this.imgPosition + 1 : 0;

          lastMousePos = mousePos;
        }

        // check when mousemove stops and all images are inactive (not visible and not animating)
        let isIdle = true;
        for (let img of this.images) {
          if (img.isActive()) {
            isIdle = false;
            break;
          }
        }
        // reset z-index initial value
        if (isIdle && this.zIndexVal !== 1) {
          this.zIndexVal = 1;
        }

        // loop..
        requestAnimationFrame(() => this.render());
      }
      showNextImage() {
        // show image at position [this.imgPosition]
        const img = this.images[this.imgPosition];
        // kill any tween on the image
        gsap.killTweensOf(img.DOM.el);

        new gsap.core.Timeline()
          // show the image
          .set(
            img.DOM.el,
            {
              startAt: { opacity: 0, scale: 1 },
              opacity: 1,
              scale: 1,
              zIndex: this.zIndexVal,
              x: cacheMousePos.x - img.rect.width / 2,
              y: cacheMousePos.y - img.rect.height / 2,
            },
            0
          )
          // animate position
          .to(
            img.DOM.el,
            0.9,
            {
              ease: Expo.easeOut,
              x: mousePos.x - img.rect.width / 2,
              y: mousePos.y - img.rect.height / 2,
            },
            0
          )
          // then make it disappear
          .to(
            img.DOM.el,
            1,
            {
              ease: Power1.easeOut,
              opacity: 0,
            },
            0.4
          )
          // scale down the image
          .to(
            img.DOM.el,
            1,
            {
              ease: Quint.easeOut,
              scale: 0.2,
            },
            0.4
          );
      }
    }

    /***********************************/
    /********** Preload stuff **********/

    // Preload images
    var imagesLoaded = require('imagesloaded');
    const preloadImages = () => {
      return new Promise((resolve, reject) => {
        imagesLoaded(document.querySelectorAll('.content__img'), resolve);
      });
    };

    // And then..
    preloadImages().then(() => {
      // Remove the loader
      document.body.classList.remove('loading');
      new ImageTrail();
    });
  }
  return (
    <Container sx={{ overflow: 'hidden' }}>
      <div
        id='Wrap'
        className='content'
        sx={{
          position: 'relative',
          background: 'transparent',
          zIndex: 1,
        }}
      >
        <img
          className='content_img'
          src='../images/bitcoin-btc-logo.svg'
          alt=''
          sx={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: '-100px',
            maxWidth: '70px',
            borderRadius: 0,
            objectFit: 'contain',
          }}
        />
        <img
          className='content_img'
          src='../images/daisy.svg'
          alt=''
          sx={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: '-100px',
            maxWidth: '70px',
            borderRadius: 0,
            objectFit: 'contain',
          }}
        />
        <img
          className='content_img'
          src='../images/reshot-icon-programming-laptop-3UPSGZELA2.svg'
          alt=''
          sx={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: '-100px',
            maxWidth: '70px',
            borderRadius: 0,
            objectFit: 'contain',
          }}
        />
        <img
          className='content_img'
          src='../images/woman-lifting-weights-medium-skin-tone-svgrepo-com.svg'
          alt=''
          sx={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: '-100px',
            maxWidth: '70px',
            borderRadius: 0,
            objectFit: 'contain',
          }}
        />
        <img
          className='content_img'
          src='../images/reshot-icon-books-9KHFUX6M85.svg'
          alt=''
          sx={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: '-100px',
            maxWidth: '70px',
            borderRadius: 0,
            objectFit: 'contain',
          }}
        />
        <img
          className='content_img'
          src='../images/reshot-icon-cooking-6SXQEAC4MT.svg'
          alt=''
          sx={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: '-100px',
            maxWidth: '70px',
            borderRadius: 0,
            objectFit: 'contain',
          }}
        />
      </div>

      <div
        sx={{
          display: 'grid',
          gridTemplateColumns: ['1fr', null, '1fr 1fr'],
          mt: ['104px', '164px'],
          gap: ['16px', '64px'],
        }}
      >
        <div sx={{ gridColumn: 1 }}>
          <H1
            sx={{
              mb: '20px',
            }}
          >
            <span sx={{ textTransform: 'uppercase', mb: '30px' }}>
              Alexandria
            </span>
            <br />
            roberts
          </H1>
          <Divider width='80%' sx={{ mt: '20px' }} />
          <P
            sx={{
              my: '20px',
            }}
          >
            Is an UI Engineer with strong skills in UI design and focus on
            usability and love learning new tech.
          </P>
          <Socials sx={{ mt: '24px' }} />
        </div>
        <div
          sx={{
            gridColumn: [1, 2],
            display: 'grid',
            justifySelf: 'end',
          }}
        >
          <Divider
            width='1px'
            height='130%'
            sx={{
              position: 'absolute',
              top: '-25px',
              right: '0px',
              zIndex: -1,
            }}
          />
          <Divider
            color='primary'
            width='1px'
            height='107%'
            sx={{
              position: 'absolute',
              top: ['0', '60px'],
              right: '120px',
              zIndex: -1,
            }}
          />

          <div
            sx={{ maxWidth: '580px', height: '100%', mt: ['32px', '164px'] }}
          >
            <img
              src='../profile.jpg'
              alt='Head Shot of Lexie'
              sx={{
                width: ['255px', null, '100%'],
                maxWidth: '537px',
                height: 'auto',
                zIndex: 2,
              }}
            />
          </div>
        </div>
      </div>
      <main sx={{ mt: '164px' }}>
        <H2>
          About{' '}
          <span>
            <HeadingDecoration
              left={'49%'}
              width={['44px', null, '60px', '106px']}
            />
            me
          </span>
        </H2>
        <div sx={{ maxWidth: '840px', mx: 'auto', mb: ['104px', '164px'] }}>
          <P>
            Hello, I am Lexie, an UI Engineer/Front-End Developer based in Bali.
            Looking for my next opportunity.
          </P>
          <P sx={{ mt: '32px' }}>
            I love working with CSS, JavaScript, React and absolutely love being
            in crypto space. Anything CSS/JavaScript and I love digging into it
            more! I also love learning new technologies and have worked on
            variety of projects for work and on personal projects, where I could
            quickly pick up new frameworks and languages. Please look at my
            projects section. In 2020, I started learning to surf in my spare
            time, and it&apos;s such a slow progress, so I have also started
            working out a lot which is so much fun.
          </P>
          <P sx={{ mt: '32px' }}>
            If you would like to find out more about me, my skills and how I can
            fit into your team please feel free to message me. I love talking
            about code, so even if you aren’t looking for a new team member
            right now, I would love to connect with you so I can share my
            interests and passions with other like minded people.
          </P>
        </div>
      </main>
    </Container>
  );
}
