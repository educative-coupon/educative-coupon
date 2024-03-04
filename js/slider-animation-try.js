$('#dp-prev-btn').click(()=>{
    $('.discount-img-cntr-1').addClass("animate__animated animate__slideOutLeft");
    $('.discount-img-cntr-2').addClass("animate__animated animate__slideOutLeft");
})

$('#dp-next-btn').click(()=>{
    $('.discount-img-cntr-1').addClass("animate__animated animate__slideOutRight");
    $('.discount-img-cntr-2').addClass("animate__animated animate__slideOutRight");
})