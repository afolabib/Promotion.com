/*! lazysizes - v5.3.0 */

!function (e) { var t = function (u, D, f) { "use strict"; var k, H; if (function () { var e; var t = { lazyClass: "lazyload", loadedClass: "lazyloaded", loadingClass: "lazyloading", preloadClass: "lazypreload", errorClass: "lazyerror", autosizesClass: "lazyautosizes", fastLoadedClass: "ls-is-cached", iframeLoadMode: 0, srcAttr: "data-src", srcsetAttr: "data-srcset", sizesAttr: "data-sizes", minSize: 40, customMedia: {}, init: true, expFactor: 1.5, hFac: .8, loadMode: 2, loadHidden: true, ricTimeout: 0, throttleDelay: 125 }; H = u.lazySizesConfig || u.lazysizesConfig || {}; for (e in t) { if (!(e in H)) { H[e] = t[e] } } }(), !D || !D.getElementsByClassName) { return { init: function () { }, cfg: H, noSupport: true } } var O = D.documentElement, i = u.HTMLPictureElement, P = "addEventListener", $ = "getAttribute", q = u[P].bind(u), I = u.setTimeout, U = u.requestAnimationFrame || I, o = u.requestIdleCallback, j = /^picture$/i, r = ["load", "error", "lazyincluded", "_lazyloaded"], a = {}, G = Array.prototype.forEach, J = function (e, t) { if (!a[t]) { a[t] = new RegExp("(\\s|^)" + t + "(\\s|$)") } return a[t].test(e[$]("class") || "") && a[t] }, K = function (e, t) { if (!J(e, t)) { e.setAttribute("class", (e[$]("class") || "").trim() + " " + t) } }, Q = function (e, t) { var a; if (a = J(e, t)) { e.setAttribute("class", (e[$]("class") || "").replace(a, " ")) } }, V = function (t, a, e) { var i = e ? P : "removeEventListener"; if (e) { V(t, a) } r.forEach(function (e) { t[i](e, a) }) }, X = function (e, t, a, i, r) { var n = D.createEvent("Event"); if (!a) { a = {} } a.instance = k; n.initEvent(t, !i, !r); n.detail = a; e.dispatchEvent(n); return n }, Y = function (e, t) { var a; if (!i && (a = u.picturefill || H.pf)) { if (t && t.src && !e[$]("srcset")) { e.setAttribute("srcset", t.src) } a({ reevaluate: true, elements: [e] }) } else if (t && t.src) { e.src = t.src } }, Z = function (e, t) { return (getComputedStyle(e, null) || {})[t] }, s = function (e, t, a) { a = a || e.offsetWidth; while (a < H.minSize && t && !e._lazysizesWidth) { a = t.offsetWidth; t = t.parentNode } return a }, ee = function () { var a, i; var t = []; var r = []; var n = t; var s = function () { var e = n; n = t.length ? r : t; a = true; i = false; while (e.length) { e.shift()() } a = false }; var e = function (e, t) { if (a && !t) { e.apply(this, arguments) } else { n.push(e); if (!i) { i = true; (D.hidden ? I : U)(s) } } }; e._lsFlush = s; return e }(), te = function (a, e) { return e ? function () { ee(a) } : function () { var e = this; var t = arguments; ee(function () { a.apply(e, t) }) } }, ae = function (e) { var a; var i = 0; var r = H.throttleDelay; var n = H.ricTimeout; var t = function () { a = false; i = f.now(); e() }; var s = o && n > 49 ? function () { o(t, { timeout: n }); if (n !== H.ricTimeout) { n = H.ricTimeout } } : te(function () { I(t) }, true); return function (e) { var t; if (e = e === true) { n = 33 } if (a) { return } a = true; t = r - (f.now() - i); if (t < 0) { t = 0 } if (e || t < 9) { s() } else { I(s, t) } } }, ie = function (e) { var t, a; var i = 99; var r = function () { t = null; e() }; var n = function () { var e = f.now() - a; if (e < i) { I(n, i - e) } else { (o || r)(r) } }; return function () { a = f.now(); if (!t) { t = I(n, i) } } }, e = function () { var v, m, c, h, e; var y, z, g, p, C, b, A; var n = /^img$/i; var d = /^iframe$/i; var E = "onscroll" in u && !/(gle|ing)bot/.test(navigator.userAgent); var _ = 0; var w = 0; var M = 0; var N = -1; var L = function (e) { M--; if (!e || M < 0 || !e.target) { M = 0 } }; var x = function (e) { if (A == null) { A = Z(D.body, "visibility") == "hidden" } return A || !(Z(e.parentNode, "visibility") == "hidden" && Z(e, "visibility") == "hidden") }; var W = function (e, t) { var a; var i = e; var r = x(e); g -= t; b += t; p -= t; C += t; while (r && (i = i.offsetParent) && i != D.body && i != O) { r = (Z(i, "opacity") || 1) > 0; if (r && Z(i, "overflow") != "visible") { a = i.getBoundingClientRect(); r = C > a.left && p < a.right && b > a.top - 1 && g < a.bottom + 1 } } return r }; var t = function () { var e, t, a, i, r, n, s, o, l, u, f, c; var d = k.elements; if ((h = H.loadMode) && M < 8 && (e = d.length)) { t = 0; N++; for (; t < e; t++) { if (!d[t] || d[t]._lazyRace) { continue } if (!E || k.prematureUnveil && k.prematureUnveil(d[t])) { R(d[t]); continue } if (!(o = d[t][$]("data-expand")) || !(n = o * 1)) { n = w } if (!u) { u = !H.expand || H.expand < 1 ? O.clientHeight > 500 && O.clientWidth > 500 ? 500 : 370 : H.expand; k._defEx = u; f = u * H.expFactor; c = H.hFac; A = null; if (w < f && M < 1 && N > 2 && h > 2 && !D.hidden) { w = f; N = 0 } else if (h > 1 && N > 1 && M < 6) { w = u } else { w = _ } } if (l !== n) { y = innerWidth + n * c; z = innerHeight + n; s = n * -1; l = n } a = d[t].getBoundingClientRect(); if ((b = a.bottom) >= s && (g = a.top) <= z && (C = a.right) >= s * c && (p = a.left) <= y && (b || C || p || g) && (H.loadHidden || x(d[t])) && (m && M < 3 && !o && (h < 3 || N < 4) || W(d[t], n))) { R(d[t]); r = true; if (M > 9) { break } } else if (!r && m && !i && M < 4 && N < 4 && h > 2 && (v[0] || H.preloadAfterLoad) && (v[0] || !o && (b || C || p || g || d[t][$](H.sizesAttr) != "auto"))) { i = v[0] || d[t] } } if (i && !r) { R(i) } } }; var a = ae(t); var S = function (e) { var t = e.target; if (t._lazyCache) { delete t._lazyCache; return } L(e); K(t, H.loadedClass); Q(t, H.loadingClass); V(t, B); X(t, "lazyloaded") }; var i = te(S); var B = function (e) { i({ target: e.target }) }; var T = function (e, t) { var a = e.getAttribute("data-load-mode") || H.iframeLoadMode; if (a == 0) { e.contentWindow.location.replace(t) } else if (a == 1) { e.src = t } }; var F = function (e) { var t; var a = e[$](H.srcsetAttr); if (t = H.customMedia[e[$]("data-media") || e[$]("media")]) { e.setAttribute("media", t) } if (a) { e.setAttribute("srcset", a) } }; var s = te(function (t, e, a, i, r) { var n, s, o, l, u, f; if (!(u = X(t, "lazybeforeunveil", e)).defaultPrevented) { if (i) { if (a) { K(t, H.autosizesClass) } else { t.setAttribute("sizes", i) } } s = t[$](H.srcsetAttr); n = t[$](H.srcAttr); if (r) { o = t.parentNode; l = o && j.test(o.nodeName || "") } f = e.firesLoad || "src" in t && (s || n || l); u = { target: t }; K(t, H.loadingClass); if (f) { clearTimeout(c); c = I(L, 2500); V(t, B, true) } if (l) { G.call(o.getElementsByTagName("source"), F) } if (s) { t.setAttribute("srcset", s) } else if (n && !l) { if (d.test(t.nodeName)) { T(t, n) } else { t.src = n } } if (r && (s || l)) { Y(t, { src: n }) } } if (t._lazyRace) { delete t._lazyRace } Q(t, H.lazyClass); ee(function () { var e = t.complete && t.naturalWidth > 1; if (!f || e) { if (e) { K(t, H.fastLoadedClass) } S(u); t._lazyCache = true; I(function () { if ("_lazyCache" in t) { delete t._lazyCache } }, 9) } if (t.loading == "lazy") { M-- } }, true) }); var R = function (e) { if (e._lazyRace) { return } var t; var a = n.test(e.nodeName); var i = a && (e[$](H.sizesAttr) || e[$]("sizes")); var r = i == "auto"; if ((r || !m) && a && (e[$]("src") || e.srcset) && !e.complete && !J(e, H.errorClass) && J(e, H.lazyClass)) { return } t = X(e, "lazyunveilread").detail; if (r) { re.updateElem(e, true, e.offsetWidth) } e._lazyRace = true; M++; s(e, t, r, i, a) }; var r = ie(function () { H.loadMode = 3; a() }); var o = function () { if (H.loadMode == 3) { H.loadMode = 2 } r() }; var l = function () { if (m) { return } if (f.now() - e < 999) { I(l, 999); return } m = true; H.loadMode = 3; a(); q("scroll", o, true) }; return { _: function () { e = f.now(); k.elements = D.getElementsByClassName(H.lazyClass); v = D.getElementsByClassName(H.lazyClass + " " + H.preloadClass); q("scroll", a, true); q("resize", a, true); q("pageshow", function (e) { if (e.persisted) { var t = D.querySelectorAll("." + H.loadingClass); if (t.length && t.forEach) { U(function () { t.forEach(function (e) { if (e.complete) { R(e) } }) }) } } }); if (u.MutationObserver) { new MutationObserver(a).observe(O, { childList: true, subtree: true, attributes: true }) } else { O[P]("DOMNodeInserted", a, true); O[P]("DOMAttrModified", a, true); setInterval(a, 999) } q("hashchange", a, true);["focus", "mouseover", "click", "load", "transitionend", "animationend"].forEach(function (e) { D[P](e, a, true) }); if (/d$|^c/.test(D.readyState)) { l() } else { q("load", l); D[P]("DOMContentLoaded", a); I(l, 2e4) } if (k.elements.length) { t(); ee._lsFlush() } else { a() } }, checkElems: a, unveil: R, _aLSL: o } }(), re = function () { var a; var n = te(function (e, t, a, i) { var r, n, s; e._lazysizesWidth = i; i += "px"; e.setAttribute("sizes", i); if (j.test(t.nodeName || "")) { r = t.getElementsByTagName("source"); for (n = 0, s = r.length; n < s; n++) { r[n].setAttribute("sizes", i) } } if (!a.detail.dataAttr) { Y(e, a.detail) } }); var i = function (e, t, a) { var i; var r = e.parentNode; if (r) { a = s(e, r, a); i = X(e, "lazybeforesizes", { width: a, dataAttr: !!t }); if (!i.defaultPrevented) { a = i.detail.width; if (a && a !== e._lazysizesWidth) { n(e, r, i, a) } } } }; var e = function () { var e; var t = a.length; if (t) { e = 0; for (; e < t; e++) { i(a[e]) } } }; var t = ie(e); return { _: function () { a = D.getElementsByClassName(H.autosizesClass); q("resize", t) }, checkElems: t, updateElem: i } }(), t = function () { if (!t.i && D.getElementsByClassName) { t.i = true; re._(); e._() } }; return I(function () { H.init && t() }), k = { cfg: H, autoSizer: re, loader: e, init: t, uP: Y, aC: K, rC: Q, hC: J, fire: X, gW: s, rAF: ee } }(e, e.document, Date); e.lazySizes = t, "object" == typeof module && module.exports && (module.exports = t) }("undefined" != typeof window ? window : {});


"use strict";

$(function () {

    // =================================
    // Preloader
    // =================================
    $(".pre-loader").delay(500).fadeOut("slow");
    // =================================
    // Preloader
    // =================================

    // =================================
    // Sidebar expand
    // =================================
    $(".left-bar .hamburger").on("click", function (argument) {
        // body...
        $(".expandable-panel .navik-fixed-sidebar")
            .toggleClass("show");
        $(this).toggleClass("is-active");
    });
    // =================================
    // End Sidebar expand
    // =================================



    // =================================
    // Header Overlay toggle
    // =================================
    $(".toggle-overlay").on("click", function (argument) {
        // body...
        $(".overlay-header .overlay-section")
            .toggleClass("show");
    });
    // =================================
    // End Header Overlay toggle
    // =================================


    // =================================
    // Header Top Fixed
    // =================================

    function makeHeaderFixed() {
        var header = $('.top-fixed');

        if ($(document).scrollTop() >= 250) {
            header.addClass('visible');
            if (header.find('.top-search').length) {
                // found!
                header.find('.top-search').css('height', $(window).height());
            }
            if (header.find('.transparent')) {
                header.find('.transparent').removeClass("no-background");
            }
        } else {
            header.removeClass('visible');
        }
    }

    makeHeaderFixed();

    $(document).scroll(function () {
        makeHeaderFixed();
    });

    // =================================
    // End Header Top Fixed
    // =================================

    $(".attr-nav.search a").on('click', function () {
        $("header.navik-header .top-search").slideDown("1000");
    });

    $(".close-search").on('click', function () {
        $("header.navik-header .top-search").slideUp("1000");
    });

    // =================================
    // Making header cover height full
    // screen
    // =================================

    /*if($("nav.navbar").hasClass("transparent"))
        $('.header-cover').css('height', $(window).height());
    $('.wrap-nav-sidebar .header-cover').css('height', $(window).height());

    $(window).resize(function(){
        if($("nav.navbar").hasClass("transparent"))
            $('.header-cover').css('height', $(window).height());
        $('.wrap-nav-sidebar .header-cover').css('height', $(window).height());
    });*/
    // =================================
    // End Making header cover height full
    // screen
    // =================================


    // ======================================
    // Modal video initialize
    // ======================================
    $(".js-modal-btn.youtube-video").modalVideo({
        channel: 'youtube'
    });
    $(".js-modal-btn.vimeo-video").modalVideo({
        channel: 'vimeo'
    });

    var wow = new WOW({
        animateClass: 'animated',
        offset: 200
    });
    wow.init();
    // ======================================
    // End Modal video initialize
    // ======================================

    // ======================================
    // Projects filter
    // ======================================

    var $grid = $('.gallery_area').isotope({
        itemSelector: '.element-item',
        percentPosition: true,
        masonry: {
            columnWidth: '.grid-sizer'
        }
    });
    // layout Isotope after each image loads
    $grid.imagesLoaded().progress(function () {
        $grid.isotope('layout');
    });

    // bind filter button click
    $('.galleryFilter').on('click', '.button', function () {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({
            filter: filterValue
        });
    });
    // change is-checked class on buttons
    $('.galleryFilter.button-group').each(function (i, buttonGroup) {
        var $buttonGroup = $(buttonGroup);
        $buttonGroup.on('click', '.button', function () {
            $buttonGroup.find('.is-checked').removeClass('is-checked');
            $(this).addClass('is-checked');
        });
    });

    // ======================================
    // Magnific Popup
    // ======================================

    $('.image-popup-vertical-fit').magnificPopup({
        type: 'image',
        mainClass: 'mfp-with-zoom',
        gallery: {
            enabled: true
        },

        zoom: {
            enabled: true,

            duration: 300, // duration of the effect, in milliseconds
            easing: 'ease-in-out', // CSS transition easing function

            opener: function (openerElement) {
                return openerElement.is('img') ? openerElement : openerElement.find('img');
            }
        }

    });

    $('.magnific_popup_link').magnificPopup({
        type: 'image'
    });

    // ======================================
    // End Magnific Popup
    // ======================================

    // ======================================
    // Owl Carousel (Partner section)
    // ======================================

    $('.brands-carousel-three-items').owlCarousel({
        loop: true,
        margin: 10,
        dots: false,
        autoplay: true,
        autoplayTimeout: 3000,
        // nav:true,
        responsive: {
            0: {
                items: 2
            },
            800: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });

    $('.brands-carousel-four-items').owlCarousel({
        loop: true,
        margin: 50,
        dots: false,
        autoplay: true,
        autoplayTimeout: 3000,
        nav: false,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    });

    // ======================================
    // Owl Carousel (Partner section)
    // ======================================


    // ======================================
    // Owl Carousel (Blog image slider)
    // ======================================
    $('.blog-img-slider').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 5000,
        // center: true,
        navText: ["<i class='ti-arrow-left'></i>", "<i class='ti-arrow-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
    // ======================================
    // End Owl Carousel (Blog image slider)
    // ======================================


    // ======================================
    // Owl Carousel 
    // ======================================

    $('.one-item-owlcarousel').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 5000,
        // center: true,
        navText: ["<i class='ti-angle-left'></i>", "<i class='ti-angle-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    $('.two-item-owlcarousel').owlCarousel({
        // loop:true,
        margin: 30,
        nav: true,
        dots: false,
        // center: true,
        navText: ["<i class='ti-angle-left'></i>", "<i class='ti-angle-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 2
            }
        }
    });

    $('.three-item-owlcarousel').owlCarousel({
        // loop:true,
        margin: 20,
        nav: true,
        dots: false,
        // center: true,
        navText: ["<i class='ti-angle-left'></i>", "<i class='ti-angle-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    });

    $('.four-item-owlcarousel').owlCarousel({
        loop: true,
        margin: 50,
        nav: true,
        dots: false,
        navText: ["<i class='ti-angle-left'></i>", "<i class='ti-angle-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    });

    // ======================================
    // End Owl Carousel
    // ======================================

    // ======================================
    // Owl Carousel (index page slider)
    // ======================================

    $('.template_carousel').owlCarousel({
        loop: true,
        margin: 50,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplaySpeed: 1000,
        navText: ["<i class='ti-angle-left'></i>", "<i class='ti-angle-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    });

    $('.header_display_carousel').owlCarousel({
        loop: true,
        margin: 0,
        autoplay: true,
        slideTransition: "linear",
        autoplayTimeout: 0,
        autoHeight: false,
        autoHeightClass: 'owl-height',
        autoplaySpeed: 9000,
        autoplayHoverPause: true,
        autoWidth: false,
        nav: false,
        dots: false,
        center: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });

    $('.header_display_carousel2').owlCarousel({
        loop: true,
        margin: 0,
        autoplay: true,
        slideTransition: "linear",
        autoplayTimeout: 0,
        autoplaySpeed: 9000,
        autoplayHoverPause: true,
        autoWidth: false,
        nav: false,
        dots: false,
        center: true,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 6
            }
        }
    });


    $('.client-speaks').owlCarousel({
        loop: false,
        margin: 30,
        autoplay: false,
        autoWidth: false,
        nav: false,
        dots: false,
        // center: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 3
            }
        }
    });

    $(document).ready(function () {
        $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
            disableOn: 300,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,

            fixedContentPos: false
        });
    });
    // ======================================
    // End Owl Carousel (index page slider)
    // ======================================


    // ======================================
    // Owl Carousel (team slider)
    // ======================================

    $('.team-owlcarousel').owlCarousel({
        loop: true,
        margin: 50,
        nav: true,
        dots: false,
        center: true,
        navText: ["<i class='ti-angle-left'></i>", "<i class='ti-angle-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    });

    // ======================================
    // End Owl Carousel (team slider)
    // ======================================

    // ======================================
    // Owl Carousel (testimonial section)
    // ======================================
    $('.testimonial-style3-owlcarousel, .testimonial-style1-owlcarousel').owlCarousel({
        loop: true,
        margin: 50,
        nav: false,
        dots: true,
        center: true,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    var testimonialStyle4Owlcarousel = $('.testimonial-style4-owlcarousel').owlCarousel({
        loop: false,
        margin: 40,
        nav: true,
        dots: false,
        // center: true,
        navText: ["<i class='ti-angle-left'></i>", "<i class='ti-angle-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 4
            },
            1000: {
                items: 4
            }
        }
    });

    addClassesToTestimonialS4Carousel();

    testimonialStyle4Owlcarousel.on('translated.owl.carousel', function (event) {
        addClassesToTestimonialS4Carousel();
    });


    // This function adds additional class to the
    // first and last active items
    function addClassesToTestimonialS4Carousel() {
        var total = $('.testimonial-style4-owlcarousel .owl-stage .owl-item.active').length;

        $('.testimonial-style4-owlcarousel .owl-stage .owl-item').removeClass('firstActiveItem lastActiveItem');

        $('.testimonial-style4-owlcarousel .owl-stage .owl-item.active').each(function (index) {
            if (index === 0) {
                // this is the first one
                $(this).addClass('firstActiveItem');
            }
            if (index === total - 1 && total > 1) {
                // this is the last one
                $(this).addClass('lastActiveItem');
            }
        });
    }

    $('.testimonial-style5-owlcarousel').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        dots: false,
        // center: true,
        navText: ["<i class='ti-angle-left'></i>", "<i class='ti-angle-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            800: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });

    // ======================================
    // End Owl Carousel (testimonial section)
    // ======================================

    // ======================================
    // Up counter
    // ======================================
    $(".counter-number").appear(function () {
        $(".counter-number .num").each(function () {
            var end = $(this).attr("data-to");
            $(this).jQuerySimpleCounter({
                end: end,
                duration: 4000,
                complete: function () {
                    // Enter Code
                }
            });
        });
    });
    // ======================================
    // End Up counter
    // ======================================

    // =================================
    // Cicle animation
    // =================================

    $('.circle').appear(function () {

        $('.circle').circleProgress({
            startAngle: -360
        });

    });

    // =================================
    // End Cicle animation
    // =================================

    // =================================
    // Accordion icon change
    // =================================

    $('.accordion .panel').on('shown.bs.collapse', function () {
        $(this).children().find(".ti-angle-down").removeClass("ti-angle-down").addClass("ti-angle-up");

    }).on('hidden.bs.collapse', function () {
        $(this).children().find(".ti-angle-up").removeClass("ti-angle-up").addClass("ti-angle-down");
    });

    // =================================
    // End Accordion icon change
    // =================================

    // =================================
    // Light Slider
    // =================================

    $('#image-gallery').lightSlider({
        gallery: true,
        item: 1,
        thumbItem: 9,
        slideMargin: 0,
        speed: 500,
        auto: false,
        loop: true,
        prevHtml: '<span class="ti-angle-left"></span>',
        nextHtml: '<span class="ti-angle-right"></span>',
        pause: 5000,
        onSliderLoad: function () {
            $('#image-gallery').removeClass('cS-hidden');
        }
    });

    // =================================
    // End Light Slider
    // =================================

    // =================================
    // LineProgressbar
    // =================================


    $('#sd-style1').appear(function () {
        $('#sd-style1').LineProgressbar({
            percentage: 90,
            radius: '3px',
            height: '5px',
            fillBackgroundColor: '#ff5252',
            backgroundColor: '#EDEDED',
        });
    });

    $('#gd-style1').appear(function () {
        $('#gd-style1').LineProgressbar({
            percentage: 95,
            radius: '3px',
            height: '5px',
            fillBackgroundColor: '#ff5252',
            backgroundColor: '#EDEDED',
        });
    });


    $('#wd-style1').appear(function () {
        $('#wd-style1').LineProgressbar({
            percentage: 93,
            radius: '3px',
            height: '5px',
            fillBackgroundColor: '#ff5252',
            backgroundColor: '#EDEDED',
        });
    });

    $('#seo-style1').appear(function () {
        $('#seo-style1').LineProgressbar({
            percentage: 98,
            radius: '3px',
            height: '5px',
            fillBackgroundColor: '#ff5252',
            backgroundColor: '#EDEDED',
        });
    });

    $('#sd-style2').appear(function () {
        $('#sd-style2').LineProgressbar({
            percentage: 90,
            radius: '3px',
            height: '5px',
            fillBackgroundColor: '#ff5252',
            backgroundColor: '#EDEDED',
        });
    });

    $('#gd-style2').appear(function () {
        $('#gd-style2').LineProgressbar({
            percentage: 95,
            radius: '3px',
            height: '5px',
            fillBackgroundColor: '#05AE0E',
            backgroundColor: '#EDEDED',
        });
    });


    $('#wd-style2').appear(function () {
        $('#wd-style2').LineProgressbar({
            percentage: 93,
            radius: '3px',
            height: '5px',
            fillBackgroundColor: '#3878ff',
            backgroundColor: '#EDEDED',
        });
    });

    $('#seo-style2').appear(function () {
        $('#seo-style2').LineProgressbar({
            percentage: 98,
            radius: '3px',
            height: '5px',
            fillBackgroundColor: '#FF9900',
            backgroundColor: '#EDEDED',
        });
    });


    $('#sd-style3').appear(function () {
        $('#sd-style3').LineProgressbar({
            percentage: 90,
            radius: '0px',
            height: '25px',
            fillBackgroundColor: '#ff5252',
            backgroundColor: '#222222',
        });
    });

    $('#gd-style3').appear(function () {
        $('#gd-style3').LineProgressbar({
            percentage: 95,
            radius: '0px',
            height: '25px',
            fillBackgroundColor: '#ff5252',
            backgroundColor: '#222222',
        });
    });


    $('#wd-style3').appear(function () {
        $('#wd-style3').LineProgressbar({
            percentage: 93,
            radius: '0px',
            height: '25px',
            fillBackgroundColor: '#ff5252',
            backgroundColor: '#222222',
        });
    });

    $('#seo-style3').appear(function () {
        $('#seo-style3').LineProgressbar({
            percentage: 98,
            radius: '0px',
            height: '25px',
            fillBackgroundColor: '#ff5252',
            backgroundColor: '#222222',
        });
    });


    $('#sd-style4').appear(function () {
        $('#sd-style4').LineProgressbar({
            percentage: 90,
            radius: '3px',
            height: '5px',
            fillBackgroundColor: '#222222',
            backgroundColor: '#EDEDED',
        });
    });

    $('#gd-style4').appear(function () {
        $('#gd-style4').LineProgressbar({
            percentage: 95,
            radius: '3px',
            height: '5px',
            fillBackgroundColor: '#222222',
            backgroundColor: '#EDEDED',
        });
    });


    $('#wd-style4').appear(function () {
        $('#wd-style4').LineProgressbar({
            percentage: 93,
            radius: '3px',
            height: '5px',
            fillBackgroundColor: '#222222',
            backgroundColor: '#EDEDED',
        });
    });

    $('#seo-style4').appear(function () {
        $('#seo-style4').LineProgressbar({
            percentage: 98,
            radius: '3px',
            height: '5px',
            fillBackgroundColor: '#222222',
            backgroundColor: '#EDEDED',
        });
    });

    // =================================
    // End LineProgressbar
    // =================================


    // =================================
    // Bootstrap Tooltip Popover init
    // =================================

    $('[data-toggle="tooltip"]').tooltip();
    $('[data-toggle="popover"]').popover();
    // =================================
    // Bootstrap Tooltip Popover init
    // =================================

    // =================================
    // Blog Masonry layout
    // =================================
    $('.masonry-blog-post').masonry({
        itemSelector: '.blog-post'
    });
    // =================================
    // End Blog Masonry layout
    // =================================

    // =================================
    // Process Section
    // =================================
    $('.process_section').appear(function () {
        var total_process_animation_area = $(".process_section .process_item").length;

        rotate_process(total_process_animation_area, 3000);

        function rotate_process(total_process_animation_area, time_out) {

            var current_item = 1;

            $(".process_section .process_item").removeClass("active");
            $(".process_section .process_item:nth-child(" + current_item + ")").addClass("active");
            $(".process_section .process_item:nth-child(" + current_item + ") .rotating_area").addClass("goUp");

            current_item++;

            setInterval(function () {
                if (current_item <= total_process_animation_area) {
                    if (current_item % 2 === 0) {
                        $(".process_section .process_item").removeClass("active");
                        $(".process_section .process_item:nth-child(" + current_item + ")").addClass("active");

                        $(".process_section .process_item:nth-child(" + current_item + ") .rotating_area").addClass("goDown");
                    } else {
                        $(".process_section .process_item").removeClass("active");
                        $(".process_section .process_item:nth-child(" + current_item + ")").addClass("active");

                        $(".process_section .process_item:nth-child(" + current_item + ") .rotating_area").addClass("goUp");
                    }
                    current_item++;
                } else {
                    $(".process_section .process_item .rotating_area").removeClass("goDown");
                    $(".process_section .process_item .rotating_area").removeClass("goUp");
                    current_item = 1;
                }
            }, time_out);
        }
    });

    // =================================
    // End Process Section
    // =================================


    // =================================
    // Scrool Parallax
    // =================================
    $('.pointparallax').pointparallax();
    // =================================
    // End Scrool Parallax
    // =================================


    // =================================
    // Section Parallax
    // =================================
    $('.parallax').parallaxie({
        "speed": 0.5
    });
    // =================================
    // End Section Parallax
    // =================================

    // =================================
    // Cart product counter
    // =================================
    $('.spinner .updown-btn:first-of-type').on('click', function () {

        $(this).parents('.spinner').find('input').
            val(parseInt($(this).parents('.spinner').find('input').val(), 10) + 1);

    });

    $('.spinner .updown-btn:last-of-type').on('click', function () {

        if (parseInt($(this).parents('.spinner').find('input').val(), 10) > 1) {
            $(this).parents('.spinner').find('input').
                val(parseInt($(this).parents('.spinner').find('input').val(), 10) - 1);
        }

    });
    // =================================
    // End Cart product counter
    // =================================

    // =================================
    // Shop Product Carousel
    // =================================
    $('.product-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        navText: ["<i class='ti-angle-left'></i>", "<i class='ti-angle-right'></i>"],
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    });
    // =================================
    // End Shop Product Carousel
    // =================================

    // =================================
    // Shop Product Details
    // image slider
    // =================================

    var owl_1 = $('#single-img-slider');
    var owl_2 = $('#all-img-slider');

    owl_1.owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        items: 1,
        dots: false
    });

    owl_2.owlCarousel({
        margin: 10,
        nav: true,
        items: 4,
        dots: false
    });

    owl_2.find(".item").click(function (e) {
        var slide_index = owl_2.find(".item").index(this);
        owl_1.trigger('to.owl.carousel', [slide_index, 300]);
    });

    // =================================
    // End Shop Product Details
    // image slider
    // =================================


    // =================================
    // Shop featured product filter
    // =================================
    var $featuredProductGrid = $('.featuredProduct').isotope({
        itemSelector: '.element-item',
        percentPosition: true,
        masonry: {
            columnWidth: '.grid-sizer'
        }
    });
    // layout Isotope after each image loads
    $featuredProductGrid.imagesLoaded().progress(function () {
        $featuredProductGrid.isotope('layout');
    });

    // bind filter button click
    $('.featuredProductFilter').on('click', '.button', function () {
        var filterValue = $(this).attr('data-filter');
        $featuredProductGrid.isotope({
            filter: filterValue
        });
    });
    // change is-checked class on buttons
    $('.featuredProductFilter.button-group').each(function (i, buttonGroup) {
        var $buttonGroup = $(buttonGroup);
        $buttonGroup.on('click', '.button', function () {
            $buttonGroup.find('.is-checked').removeClass('is-checked');
            $(this).addClass('is-checked');
        });
    });

    // =================================
    // End Shop featured product filter
    // =================================

    // best deals product
    var $bestDealProductGrid = $('.bestDealProduct').isotope({
        itemSelector: '.element-item',
        percentPosition: true,
        masonry: {
            columnWidth: '.grid-sizer'
        }
    });
    // layout Isotope after each image loads
    $bestDealProductGrid.imagesLoaded().progress(function () {
        $bestDealProductGrid.isotope('layout');
    });

    // bind filter button click
    $('.bestDealProductFilter').on('click', '.button', function () {
        var filterValue = $(this).attr('data-filter');
        $bestDealProductGrid.isotope({
            filter: filterValue
        });
    });
    // change is-checked class on buttons
    $('.bestDealProductFilter.button-group').each(function (i, buttonGroup) {
        var $buttonGroup = $(buttonGroup);
        $buttonGroup.on('click', '.button', function () {
            $buttonGroup.find('.is-checked').removeClass('is-checked');
            $(this).addClass('is-checked');
        });
    });

    // =================================
    // init bootstrap  carousel
    // =================================

    $('.carousel').carousel({
        interval: 6000,
        ride: true,
        pause: false
    });


    // =================================
    // Custom effect carousel
    // =================================

    //Function to animate slider captions
    function doAnimations(elems) {
        //Cache the animationend event in a variable
        var animEndEv = "webkitAnimationEnd animationend";

        elems.each(function () {
            var $this = $(this),
                $animationType = $this.data("animation");
            $this.addClass($animationType).one(animEndEv, function () {
                $this.removeClass($animationType);
            });
        });
    }

    //Variables on page load
    var $myCarousel = $(".custom-effect-carousel .carousel"),
        $firstAnimatingElems = $myCarousel
            .find(".carousel-item:first")
            .find("[data-animation ^= 'animated']");

    $myCarousel.addClass("blur");

    // Initialize carousel
    // $myCarousel.carousel();

    // Animate captions in first slide on page load
    // doAnimations($firstAnimatingElems);

    //Other slides to be animated on carousel slide event
    $myCarousel.on("slide.bs.carousel", function (e) {
        var $animatingElems = $(e.relatedTarget).find(
            "[data-animation ^= 'animated']"
        );
        doAnimations($animatingElems);
    });

    // =================================
    // End Custom effect carousel
    // =================================


    // =================================
    // Adding swipe listener in 
    // bootstrap carousel
    // =================================

    $("#myCarousel").swipe({
        swipe: function (event, direction, distance, duration, fingerCount, fingerData) {
            if (direction == 'left') $(this).carousel('next');
            if (direction == 'right') $(this).carousel('prev');
        },

        allowPageScroll: "vertical"

    });


    // =================================
    // End Adding swipe listener in 
    // bootstrap carousel
    // =================================


    // =================================
    // Mouse parallax
    // =================================

    $(".mouse-parallax").mousemove(function (e) {
        parallaxIt(e, ".left_image", -50);
        parallaxIt(e, ".right_image", -50);
        parallaxIt(e, ".lg_image", -20);

    });

    function parallaxIt(e, target, movement) {
        var $this = $(".mouse-parallax");
        var relX = e.pageX - $this.offset().left;
        var relY = e.pageY - $this.offset().top;

        TweenMax.to(target, 1, {
            x: (relX - $this.width() / 2) / $this.width() * movement,
            y: (relY - $this.height() / 2) / $this.height() * movement
        });
    }

    // =================================
    // End Mouse parallax
    // =================================

    // =================================
    // Portfolio image animation
    // =================================
    $(".author-image").addClass("img-zoom-out");
    $(".cover-circle").addClass("circle-animation");
    // =================================
    // End Portfolio image animation
    // =================================

    // =================================
    // Scroll to Top
    // =================================

    // declare variable
    var scrollTop = $(".scrollTopButton");

    $(window).on('scroll', function () {
        // declare variable
        var topPos = $(this).scrollTop();

        // Show scroll to top button while scrolling
        if (topPos > 100) {
            $(scrollTop).css("opacity", "1");
        } else {
            $(scrollTop).css("opacity", "0");
        }
    });

    $(scrollTop).on('click', function () {
        $('html, body').animate({
            scrollTop: 0
        }, 800);

        return false;
    });

    // =================================
    // End Scroll to Top
    // =================================

    $("li.dropdown_menu").hover(function () {
        $(this).children(':nth-child(2)').addClass("menu-block");
        var menu_space = $(this).children(':nth-child(2)').offset().left + $(this).children(':nth-child(2)').width(),
            window_space = $(window).width();

        console.log("menu_space" + menu_space);
        window_space = window_space - 20;
        console.log("window_space" + window_space);

        if (menu_space > window_space) {
            console.log("true");
            $(this).addClass("submenu-right");
        }
        // $(this).addClass("submenu-right");
    }, function () {
    });


    $('.owl-carousel.header-cover-carousel').owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        smartSpeed: 500,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })


    // Bootstrap Form Validation

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function (form) {
        form.addEventListener('submit', function (event) {
            if (form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add('was-validated');
        }, false);
    });

});