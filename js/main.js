const dataArea = [
    {
      id: 1,
      type: 'Criminal',
      title: 'Direito Criminalista',
      subTitle: 'Latest arrival of the new imported design.',
      image: 'url(/assets/img/new4.png)',
      content: [
        {
          id: 1,
          title: 'Mussum Ipsum cacilds',
          subTitle: 'Delegadis gente finis, bibendum egestas augue arcu ut est.',
          image: 'imagem bacana1'
        },
        {
          id: 2,
          title: 'Mussum Ipsum cacilds',
          subTitle: 'Delegadis gente finis, bibendum egestas augue arcu ut est.',
          image: 'imagem bacana1'
        },
      ]
    },
    {
      id: 2,
      type: 'Civil',
      title: 'Direito Civil',
      subTitle: 'Latest arrival of the new imported design.',
      image: 'url(/assets/img/justice2.png)',
      content: [
        {
          id: 1,
          title: 'Mussum Ipsum cacilds',
          subTitle: 'Delegadis gente finis, bibendum egestas augue arcu ut est.',
          image: 'imagem bacana1'
        },
        {
          id: 2,
          title: 'Mussum Ipsum cacilds',
          subTitle: 'Delegadis gente finis, bibendum egestas augue arcu ut est.',
          image: 'imagem bacana1'
        },
      ]
    }
  ]

/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () =>{
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('scroll-header') 
                       : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== TESTIMONIAL SWIPER ===============*/
let testimonialSwiper = new Swiper(".testimonial-swiper", {
    spaceBetween: 30,
    loop: 'true',

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

/*=============== NEW SWIPER ===============*/
let newSwiper = new Swiper(".new-swiper", {
    spaceBetween: 24,
    loop: 'true',

    breakpoints: {
        576: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
    },
});

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollY = window.pageYOffset

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SHOW CART ===============*/
const cart = document.getElementById('cart'),
      cartShop = document.getElementById('cart-shop'),
      cartClose = document.getElementById('cart-close')

/*===== CART SHOW =====*/
/* Validate if constant exists */
if(cartShop){
    cartShop.addEventListener('click', () =>{
        cart.classList.add('show-cart')
    })
}

/*===== CART HIDDEN =====*/
/* Validate if constant exists */
if(cartClose){
    cartClose.addEventListener('click', () =>{
        cart.classList.remove('show-cart')
    })
}

/*=============== DARK LIGHT THEME ===============*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'

console.log("THEME", themeButton)

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

// const btnId = document.getElementById("civil");
// const btnArea = document.querySelectorAll('.products__card');

function changeIdArea(e) {
    const urlParams = new URLSearchParams(window.location.search);
    const getUrlId = urlParams.get("id");

    const currentUrlParams = window.location.href
    console.log('currentUrlParams', currentUrlParams)

    // if(!!getUrlId) {
    //     const currentUrlParams = window.location.href
    //     const getUrlParamsPartialOne = currentUrlParams.split('html')[0];
    //     const newParams = `${getUrlParamsPartialOne + "html"}` + `${"?id=" + e.id + "&#home"}`
    //     window.location.href = newParams

    //     // return console.log("ISID", newParams)
    // } else {
    //     const currentUrlParams = window.location.href
    //     const getUrlParamsPartialOne = currentUrlParams.split('html')[0];
    //     const newParams = `${getUrlParamsPartialOne + "html"}` + `${"?id=" + e.id + "&#home"}`
    //     window.location.href = newParams
    // }
}

// const parametros = new urlParams(location.search)

// function ativarArea(parametro) {
//   const elemento = document.getElementById('products__card')
//   console.log(elemento);
// }

// parametros.forEach(ativarArea)

initListItem = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const newParams = urlParams.get("id");


    const filter = dataArea.filter((obj) => obj.type === newParams)[0]
    
    console.log("PARAMS", newParams)
    console.log("dataArea", filter)

    const homeImage = document.getElementById("image_home");
    const homeTitle = document.querySelector(".home__title");
    console.log("home", homeTitle.innerHTML)

    homeImage.style.backgroundImage = filter.image
    homeTitle.innerHTML = filter.title
    // home.style.border = "1px solid red"

  
    var productInfo = document.getElementsByClassName("infoProduct");
      productInfo[0].innerHTML +=
        `
        <span class="titleProduto">Seguro Aparelho Eletrônico para: <h2 class="descriptionProduct">Notebook</h2></span>
        <span class="coberturaSelecionada">Cobertura selecionada: <h2 class="coberturaValor">`+'R$: ' + newParams +`</h2></span>
      
        <div class="separator"></div>
    
        <div class="sectionCenterinfo">
          <h3 class="conditionProduction">Valor do seguro:</h3>
          <span class="valorProduct"><span class="valorProd">`+result[1]+'x de'+`</span> ` +
          result[0] +
          `</span>
          <h4 class="debitoProduct">Via débito em conta ou cartão de crédito.</h4>
          <h5 class="validadeSeguro">Validade do seguro: <b>12 meses</b></h5>
        </div>
    
        <span class="tipoProtecao">Seu notebook estará protegido contra:</span>
      `;
  };
  
  initListItem();
