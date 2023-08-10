const resize = $('.resizing-img');
const open = $('.gallery-resize-btn');
const exitBtn = $('.exit-btn');

open.on('click', (e) => {
    const src = e.currentTarget.previousElementSibling.style['backgroundImage'].substring(e.currentTarget.previousElementSibling.style['backgroundImage'].indexOf('"') + 1, e.currentTarget.previousElementSibling.style['backgroundImage'].lastIndexOf('"'));
    $('.resize-img').css({'display': 'block'});
    resize.attr('src', src); 
})

exitBtn.on('click', () => {
    $('.resize-img').css({'display': 'none'})
})
