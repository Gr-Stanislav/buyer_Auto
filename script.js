const links = document.querySelectorAll(".page-header ul a");

for (const link of links) {
  link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop;

  scroll({
    top: offsetTop,
    behavior: "smooth"
  });
}
// const Head = document.querySelector('header');
// const Icon = document.querySelector('.logo');
// let Itom;
// let WidthHead = Head.offsetWidth;
// let HeighthHead = Head.offsetHeight;
// console.log (WidthHead);

// Icon.addEventListener('click', () => {
//     let color = document.createElement('div');
//     Head.appendChild(color);
//     color.style.position = 'fixed';
//     color.style.backgroundColor = 'yellow';
//     color.style.padding = '3px';
//     color.style.borderRadius = '50%';
//     color.style.top = `14.5vh`;

//     color.animate([
//         {transform: 'translateX(0)'},
//         {transform: `translateX(${WidthHead}px)`}
//     ], {
//         duration: 1000
//     })
    
//     if (color.animate.transform == WidthHead){
//         color.remove();
//     }
// });
// import $ from 'jquery';
// $('.car_sale_window').slick();

$('.car_sale_window').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 6000,
  });



const Item_FAQ = document.querySelectorAll('.item__p'),
      listing = document.querySelectorAll('.listing'),
      ItemText = document.querySelectorAll('.listing');

let ImgFAQ = document.querySelectorAll('.item__p img');
console.log(listing);


function HiddenList (){
    ItemText.forEach(item => {
        item.classList.add('close');
    });
}
HiddenList();


Item_FAQ.forEach((item, i) => {
    item.addEventListener('click', function(){
        ItemText[i].classList.toggle('close');

        if (!ItemText[i].classList.contains('close')){
            ImgFAQ[i].style.transition = '0.5s';
            ImgFAQ[i].style.transform = 'rotate(180deg)';
            ImgFAQ[i].src = "../images/minus.png";
        } else {
            ImgFAQ[i].style.transition = '0.5s';
            ImgFAQ[i].style.transform = 'rotate(90deg)';
            ImgFAQ[i].src = "../images/plus.png";
        }


    });
});
