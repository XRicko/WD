const hamburger = document.querySelector('.nav__hamburger');
const navigation = document.querySelector('.navigation');
const nav_link = document.querySelectorAll('.navigation__list-link');

hamburger.addEventListener('click', () => {
  navigation.classList.toggle('open');
});

nav_link.forEach((nav_link) => {
  nav_link.addEventListener('click', () => {
    navigation.classList.toggle('open');
  });
}); 