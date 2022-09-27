'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector(' .btn--scroll-to');
const section1 = document.querySelector('#section--1');
const nav = document.querySelector('.nav');
const tabs = document.querySelectorAll('.operations__tab');
const tabscontent = document.querySelectorAll('.operations__content');
const tabscontainer = document.querySelector('.operations__tab-container');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//button scroling
btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(e.target.getBoundingClientRect());
  console.log('Current Scroll (x/y)', window.pageXOffset, window.pageYOffset);

  console.log(
    'Current clint viewport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset
  // );
  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });
  section1.scrollIntoView({ behavior: 'smooth' });
});

// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     console.log(id);
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });'
document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  //Matching Strat
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

tabscontainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');
  console.log(clicked);
  if (!clicked) return;
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabscontent.forEach(t => t.classList.remove('operations__content--active'));
  clicked.classList.add('operations__tab--active');
  console.log(clicked.dataset.tab);
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});
const handleHover = function (e, opacity) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const sibling = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');
    sibling.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1));

const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;
const stickyNav = function (entries) {
  const [entry] = entries;
  //console.log(entry);
  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};
const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});
headerObserver.observe(header);
const allSections = document.querySelectorAll('.section');
const revealSection = function (entries, observe) {
  const [entry] = entries;
  // console.log(entries);
  // console.log(entry);
  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  headerObserver.unobserve(entry.target);
};
const secttionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});
allSections.forEach(function (section) {
  secttionObserver.observe(section);
  // section.classList.add('section--hidden');
});
const imgTarget = document.querySelectorAll('img[data-src]');
const loading = function (entries, observe) {
  const [entry] = entries;
  // console.log(entry);
  if (!entry.isIntersecting) return;
  entry.target.src = entry.target.dataset.src;
  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });
  observe.unobserve(entry.target);
};
const imgObserver = new IntersectionObserver(loading, {
  root: null,
  threshold: 0,
  rootMargin: '200px',
});
imgTarget.forEach(img => imgObserver.observe(img));
//slider
const slider = function () {
  const slides = document.querySelectorAll('.slide');

  const btnleft = document.querySelector('.slider__btn--left');
  const btnright = document.querySelector('.slider__btn--right');
  const dotContainer = document.querySelector('.dots');
  let currentSlide = 0;
  const maxSlide = slides.length;
  // slides.forEach((s, i) => {
  //   s.style.transform = `translateX(${100 * i}%)`;
  //   //console.log(s);
  // });
  const creatDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        'beforeEnd',
        `<button class="dots__dot" data-slides=${i}></button>`
      );
    });
  };
  const activatDots = function (slide) {
    document
      .querySelectorAll('.dots__dot')
      .forEach(dot => dot.classList.remove('dots__dot--active'));
    document
      .querySelector(`.dots__dot[data-slides='${slide}']`)
      .classList.add('dots__dot--active');
    console.log(slide);
  };
  const goTOslide = function (slide) {
    slides.forEach((s, i) => {
      s.style.transform = `translateX(${100 * (i - slide)}%)`;
    });
    console.log(slide);
  };
  goTOslide(0);
  const nextSlide = function () {
    if (currentSlide === maxSlide - 1) {
      currentSlide = 0;
    } else {
      currentSlide++;
    }
    goTOslide(currentSlide);
    activatDots(currentSlide);
  };
  const prevSlide = function () {
    if (currentSlide === 0) {
      currentSlide = maxSlide - 1;
    } else {
      currentSlide--;
    }
    goTOslide(currentSlide);
    activatDots(currentSlide);
  };
  const init = function () {
    creatDots();
    goTOslide(0);
    activatDots(0);
  };
  init();
  btnright.addEventListener('click', nextSlide);
  btnleft.addEventListener('click', prevSlide);
  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') prevSlide();
    if (e.key === 'ArrowRight') nextSlide();
  });
  dotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      const slide = e.target.dataset.slides;
      goTOslide(slide);
      activatDots(slide);
    }
  });
};
slider();
/*
/////////////////////////////////////
////////////////////////////
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);
const header = document.querySelector('.header');
console.log(document.querySelectorAll('.section'));
document.getElementById('section--1');
console.log(document.getElementsByTagName('button'));
console.log(document.getElementsByClassName('btn'));

// insertAdjecentHtml
const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent =
message.innerHTML =
  'we use cookies for improve your expernice . <button class="btn btn--close-cookie"> Got it ! </button> ';
// header.prepend(message);
header.append(message);
// header.append(message.cloneNode)
// header.before(message);
// header.after(message);
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    // message.remove();
    message.parentElement.removeChild(message);
  });

//styles
message.style.backgroundColor = '#37383d';
message.style.width = '120';
console.log(message.style.backgroundColor);
console.log(getComputedStyle(message).color);
message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';
console.log(20 + 30 + 'px');
document.documentElement.style.setProperty('--color-primary', 'orangered');

const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.src);
console.log(logo.className);
console.log(logo.getAttribute('designer'));
logo.setAttribute('compony', 'Bankist');
console.log(logo.getAttribute('src'));
const link = document.querySelector('.nav__link--btn');
console.log(link.href);
console.log(link.getAttribute('href'));
console.log(logo.dataset.versionNumber);
//class
logo.classList.add('c');
logo.classList.remove('c');
logo.classList.toggle('c');
logo.classList.contains('c');
//don't use
logo.className = 'jonas';
const btnScrollTo = document.querySelector(' .btn--scroll-to');
const section1 = document.querySelector('#section--1');
btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(e.target.getBoundingClientRect());
  console.log('Current Scroll (x/y)', window.pageXOffset, window.pageYOffset);
  
  console.log(
    'Current clint viewport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset
  // );
  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });
  section1.scrollIntoView({ behavior: 'smooth' });
});
const h1 = document.querySelector('h1');
const alertH1 = function (e) {
  alert('addEventLinset:Great You are reading the heading');
};
h1.addEventListener('mouseenter', alertH1);
setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 100000);
// h1.onmouseenter function (e) {
  const randomColor = () =>
    `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;
  console.log(randomColor());
  document.querySelector('.nav__link').addEventListener('click', function (e) {
    this.style.backgroundColor = randomColor();
    console.log('LINK', e.target, e.currentTarget);
    // e.stopPropagation();
  });
  document.querySelector('.nav__links').addEventListener('click', function (e) {
    this.style.backgroundColor = randomColor();
    console.log('contaniner', e.target, e.currentTarget);
    console.log(e.currentTarget == this);
  });
  document.querySelector('.nav').addEventListener('click', function (e) {
    this.style.backgroundColor = randomColor();
    console.log('nav', e.target, e.currentTarget);
  });
//   alert('addEventLinset:Great You are reading the heading');
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
  const h1 = document.querySelector('h1');
  console.log(h1.querySelectorAll('.highlight'));
  console.log(h1.childNodes);
  console.log(h1.children);
  h1.firstElementChild.color = 'white';
  h1.lastElementChild.color = 'orangred';
  console.log(h1.parentNode);
  console.log(h1.parentElement);
  h1.closest('.header').style.background = 'var( --gradient-secondary';
  h1.closest('h1').style.background = 'var( --gradient-primary';
  console.log(h1.previousElementSibling);
  console.log(h1.nextElementSibling);
  
  console.log(h1.previousSibling);
  console.log(h1.nextSibling);
  console.log(h1.parentElement.children);
  [...h1.parentElement.children].forEach(function (el) {
    if (el !== h1) el.style.transform = 'scale(0.5)';
  });
  // document.addEventListener('DOMContantLoaded', function (e) {
//   console.log('HTML pasrsed and DOM tree built', e);
// });
// window.addEventListener('load', function (e) {
//   console.log('finsh window', e);
// });
// window.addEventListener('beforeunload', function (e) {
//   e.preventDefault();
//   console.log('beforeUnload', e);
//   e.returnValue = 'message';
// });
//
// const initcoords = section1.getBoundingClientRect();
// console.log(initcoords);
// window.addEventListener('scroll', function (e) {
//   console.log(window.scrollY);
//   if (this.window.screenY > initcoords.top) nav.classList.add('sticky');
//   else nav.classList.remove('sticky');
// });
// const obsCallback = function (entries, observer) {
//   entries.forEach(entry => console.log(entry));
// };
// const obsOptions = {
//   root: null,
//   threshold: [0,0.2],
// };
// const observer = new IntersectionObserver(obsCallback, obsOptions);
// observer.observe(section1);

*/
