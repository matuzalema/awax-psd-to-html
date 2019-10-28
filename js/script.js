const topNav = document.querySelector(".top-nav");
const bar = document.querySelector('.fa-bars');
const li = document.querySelectorAll('.top-nav>ul>li');

bar.addEventListener("click", () => {
   topNav.classList.add('show');
   bar.classList.add('hide');
});

li.forEach(item => {
   item.addEventListener('click', () => {
      topNav.classList.remove('show');
      bar.classList.remove('hide');
   })
});