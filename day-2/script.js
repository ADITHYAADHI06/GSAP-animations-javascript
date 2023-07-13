let t1 = gsap.timeline()

t1.from(".main .logo img, .main .nav-links h4, .main .nav-link-button h5, .main .nav-link-button button", {
    y: -100,
    duration: 1,
    delay: 0.5,
    opacity: 0,
    // stagger: 0.5
})

t1.from(".body .heading h1", {
    opacity: 0,
    scale: 0,
    stagger: 0.5

})

t1.from(".body img", {
    scale: 0,
    opacity: 0,
    stagger: 0.3
})