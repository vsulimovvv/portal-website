const body = document.querySelector('body');
// * ==== Show Menu =====
const showMenu = (navId, toggleId) => {
  const navMenu = document.getElementById(navId);
  const toggleBtn = document.getElementById(toggleId);

  if (toggleBtn && navMenu) {
    toggleBtn.addEventListener('click', (e) => {
      navMenu.classList.toggle('active');
      toggleBtn.classList.toggle('active');
    });
  }

  const navLink = document.querySelectorAll('.nav__link');
  function removeActive() {
    navLink.forEach((item) => {
      item.addEventListener('click', () => {
        navMenu.classList.remove('active');
        toggleBtn.classList.remove('active');
      });
    });
  }
  removeActive();
};
showMenu('nav-menu', 'nav-toggle');

// * Scroll Top Btn
const scrollTopBtn = document.querySelector('.scroll-top');
window.addEventListener('scroll', (e) => {
  if (scrollY >= 560) {
    scrollTopBtn.classList.add('active');
  } else {
    scrollTopBtn.classList.remove('active');
  }
});
// * scroll top
scrollTopBtn.addEventListener('click', (e) => {
  scrollTo(0, 0);
});

// * ShowPopup
const showPopup = (popupId, openBtn) => {
  const popup = document.getElementById(popupId);
  const openBtnEl = document.querySelectorAll(openBtn);

  openBtnEl.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      popup.classList.add('active');
      body.classList.add('lock');
    });
  });

  popup.addEventListener('click', (e) => {
    let target = e.target;
    console.log(target);
    if (target.matches('.popup') || target.matches('.popup__close')) {
      popup.classList.remove('active');
      body.classList.remove('lock');
    }
  });
};
showPopup('login', '.log-btn');
showPopup('signup', '.sign-up');

// * Spinner
const spinner = (button, content) => {
  let working = false;
  const loginBtn = document.querySelector(button);
  console.log(loginBtn);
  const loginContent = document.querySelector(content);
  console.log(loginContent);
  loginBtn.addEventListener('click', function (e) {
    e.preventDefault();
    if (working) return;
    working = true;

    loginContent.classList.add('loading');
    setTimeout(function () {
      loginContent.classList.add('ok');
      setTimeout(function () {
        loginContent.classList.remove('ok');
        loginContent.classList.remove('loading');
        working = false;
      }, 4000);
    }, 3000);
  });
};
spinner('#login .popup__btn', '#login .popup__content');
spinner('#signup .popup__btn', '#signup .popup__content');
// spinner();
// //* Scroll Section Active Link *//
const sections = document.querySelectorAll('.section[id]');
console.log(sections);
function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 250;
    sectionId = current.getAttribute('id');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector('.nav__menu a[href*=' + sectionId + ']')
        .classList.add('active');
    } else {
      document
        .querySelector('.nav__menu a[href*=' + sectionId + ']')
        .classList.remove('active');
    }
  });
}
window.addEventListener('scroll', scrollActive);
