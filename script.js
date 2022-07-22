
$('.car_sale_window').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 6000,
  });



const Item_FAQ = document.querySelectorAll('.item__p'),
    //   listing = document.querySelectorAll('.FAQ_content__item ul'),
      ItemText = document.querySelectorAll('.listing');

let ImgFAQ = document.querySelectorAll('.item__p img');


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
            ImgFAQ[i].src = "./images/minus.png";
            // listing[i].style.transform = "translateX(-100%)";
        } else {
            ImgFAQ[i].style.transition = '0.5s';
            ImgFAQ[i].style.transform = 'rotate(90deg)';
            ImgFAQ[i].src = "./images/plus.png";
            // listing[i].style.transform = "translateX(0%)";
        }
    });
});
