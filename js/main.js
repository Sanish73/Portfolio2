



//hide banner
let banner = document.querySelector(".banner_wrapper.container");
// document.getElementById("case").style.visibility = 'visible';
// header Scroll
let nav = document.querySelector(".navbar");

window.onscroll = function () {

    if (document.documentElement.scrollTop > 26) {
        nav.classList.add("header-scrolled");

    } else {
        nav.classList.remove("header-scrolled");

    }
}


//hide nav

let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".collapse");


navBar.forEach(function (a) {

    a.addEventListener("click", function () {
        navCollapse.classList.remove("show");



    })
})

//jquery
// $(document).ready(function () {
//     $(".Web-site").hover(function () {
//         // $(".Web-site").css("opacity", "0.5");
//         $(".Web-site").css("max-width", "auto");
//         $(".Web-site").css("display", "flex");
//         $(".Web-site").css("margin", "auto");
//         // $(".Web-site").css("back", "0.1");
//     },

//         function () {
//             $(".Web-site").css("opacity", "1");
//             $(".Web-site").css("max-width", "auto");
//             $(".Web-site").css("display", "content");
//             // $(".Web-site").css("margin", "auto");
//             // $(".Web-site").css("back", "0.1");
//         })


//     $(".services_wrapper .card .website-body").hover(function () {
        
//         $(".services_wrapper .card .website-body .web-site1 ").css("width", "30px");

//     },
//     function () {
//         $(".services_wrapper .card .website-body .web-site1").css("width", "50px");
//     })


//     })