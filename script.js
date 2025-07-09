// script.js - Main JavaScript for Portfolio homepage
// Add your custom JS below

document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  const intro = document.querySelector('.intro-section');
  if (intro) {
    setTimeout(() => {
      intro.classList.add('animated');
    }, 200); 
  }

  // About Me 섹션 애니메이션 (스크롤 진입 시)
  const about = document.querySelector('.about-section');
  if (about) {
    function handleAboutAnimation() {
      const rect = about.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.85) {
        about.classList.add('animated');
        window.removeEventListener('scroll', handleAboutAnimation);
      }
    }
    window.addEventListener('scroll', handleAboutAnimation);
    // 페이지 진입 시 바로 보이면 바로 실행
    handleAboutAnimation();
  }

  // projects 섹션 애니메이션 (스크롤 진입 시)
  const projects = document.querySelector('.project-section');
  if (about) {
    function handleAboutAnimation() {
      const rect = projects.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.85) {
        projects.classList.add('animated');
        window.removeEventListener('scroll', handleAboutAnimation);
      }
    }
    window.addEventListener('scroll', handleAboutAnimation);
   
    handleAboutAnimation();
  }

  // Contact Me 섹션 애니메이션 (스크롤 진입 시)
  const contact = document.querySelector('.contact-section');
  if (about) {
    function handleAboutAnimation() {
      const rect = contact.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.85) {
        contact.classList.add('animated');
        window.removeEventListener('scroll', handleAboutAnimation);
      }
    }
    window.addEventListener('scroll', handleAboutAnimation);
    // 페이지 진입 시 바로 보이면 바로 실행
    handleAboutAnimation();
  }

  const snsContainer = document.querySelector('.intro-sns');
  if (snsContainer) {
    const snsIcons = snsContainer.querySelectorAll('a, img, button, .sns-icon');
    function bounceSequence() {
      snsIcons.forEach((icon, idx) => {
        setTimeout(() => {
          icon.classList.add('bounce');
          icon.addEventListener('animationend', () => {
            icon.classList.remove('bounce');
          }, { once: true });
        }, idx * 180);
      });
    }
    bounceSequence();
    setInterval(bounceSequence, snsIcons.length * 180 + 800);
  }
   
});

