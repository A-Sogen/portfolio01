window.addEventListener('load', () => {
  document.body.classList.add('is-show');
});

document.querySelectorAll('.c-link').forEach(link => {
  link.addEventListener('click', function(e) {
    const url = this.getAttribute('href');
    if (!url || url === '#') return;
    e.preventDefault();
    document.body.classList.remove('is-show');
    setTimeout(() => {
      window.location.href = url;
    },500);
  });
});

const btn = document.querySelector('.c-menu');
const nav = document.querySelector('.p-headerMenu--body');

btn.addEventListener('click', function(){
  this.classList.toggle('is-open');
  nav.classList.toggle('is-open');

if(this.classList.contains('is-open')) {
  this.querySelector('.c-menuText').textContent = 'CLOSE';
  } else {
  this.querySelector('.c-menuText').textContent = 'MENU';
  }
});