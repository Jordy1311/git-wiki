// SCROLLSPY
$('body').scrollspy({target: '#main-nav'});

// ANIMATED SCROLLING FOR SMOOTH SCROLLING
$('#main-nav a').on('click', function(e) {
    // CHECK FOR A HASH VALUE
    if(this.hash !== '') {
    // PREVENT DEFAULT BEHAVIOUR
    e.preventDefault();

    // STORE HASH
    const hash = this.hash;

    // ANIMATE SMOOTH SCROLL
    $('html, body').animate({
        scrollTop: $(hash).offset().top
    }, 500, function() {
        // ADD HASH TO URL AFTER SCROLL
        window.location.hash = hash;
    });
    }
});