$('a[href^="#"]').on('click', function(event) {
    const target = $(this.getAttribute('href'));
    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 900);
    }
});

let slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    let i;
    let x = $('.screenshots__slider-image');
    if (n > x.length) {slideIndex = 1} 
    if (n < 1) {slideIndex = x.length} ;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = 'none'; 
    }
    x[slideIndex-1].style.display = 'block'; 
}

$('.screenshots__previous-image').click(() =>{
    plusDivs(-1);
});
$('.screenshots__next-image').click(() =>{
    plusDivs(+1);
});
