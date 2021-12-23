const div = document.createElement('nav');
const grayBgDiv = document.createElement('div');
const hamburgerBttn = document.querySelector('.menu-bars');

hamburgerBttn.addEventListener('click', () => {
  div.id = 'overlay';
  div.classList.add('overlay');
  grayBgDiv.id = 'overlay-menu-bg';
  grayBgDiv.classList.add('overlay');
  div.innerHTML = '<img src="./media/cancel.png" class="cancelBttn"></img>'
    + '<ul class="mobile-menu-ul">'
    + '<li class="mobile-menu-li"><a href="#projects">Porfolio</a></li>'
    + '<img class="overlay-bg-separator" src="./media/separator-mobile.png"></img>'
    + '<li class="mobile-menu-li"><a href="#about-me">About</a></li>'
    + '<img class="overlay-bg-separator" src="./media/separator-mobile.png"></img>'
    + '<li class="mobile-menu-li"><a href="#contact">Contact</a></li>'
    + '<img class="overlay-bg-separator" src="./media/separator-mobile.png"></img>'
    + '</ul>';
  document.body.appendChild(div);
  document.body.appendChild(grayBgDiv);
  div.style.display = 'block';
  grayBgDiv.style.display = 'block';

  // Add listener for closing menu
  const mobileMenu = document.querySelector('.cancelBttn');
  mobileMenu.addEventListener('click', () => {
    div.remove();
    grayBgDiv.remove();
  });

  // Adding listeners to li tags
  const sections = document.querySelectorAll('.mobile-menu-li');
  for (let i = 0; i < sections.length; i += 1) {
    sections[i].addEventListener('click', () => {
      div.remove();
      grayBgDiv.remove();
    });
  }
});