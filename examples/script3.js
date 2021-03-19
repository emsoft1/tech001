var slidc;
var slideslid;
var wid;
if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
    )
) {
    // document.getElementsByClassName(".testmob").style.color =
    //     "green";
    console.log("mobile ");
    slidc = 1;
    slideslid = false;
    wid = 600;
    document.querySelector(".testing").classList.remove("section");
} else {
    // document.getElementsByClassName(".testmob").style.color =
    //     "gray";
    document.querySelector("#menunew").classList.remove("over");
    document.querySelector(".testing").classList.add("section");
    console.log("not mobile ");
    slidc = 3;
    slideslid = true;
    wid = 1200;
}
console.log("mobi", slideslid);
$(document).ready(function () {
    $(".l").slick({
        autoplay: true,
        autoplayspeed: 1000,
        // dotss: true,
        arrows: true,
        prevArrow: ".slick-prevv",
        nextArrow: ".slick-nextt",
    });

    $(".sec5-next").slick({
        autoplay: true,
        centerMode: false,
        // centerPadding: "50px",
        // dots: true,
        arrows: true,
        slidesToShow: slidc,
        responsive: [
            {
                breakpoint: 0,
                settings: {
                    arrows: false,
                    centerMode: false,
                    // centerPadding: "40px",
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 0,
                settings: {
                    arrows: false,
                    centerMode: false,
                    // centerPadding: "40px",
                    slidesToShow: 1,
                },
            },
        ],
    });
});

console.log(wid);
new fullpage("#myContainer", {
    licenseKey: "FCE35F8D-67284A68-BB343B9A-068CD8B0",
    sectionsColor: [
        "#000",
        "#4BBFC3",
        "#7BAABE",
        "whitesmoke",
        "#ccddff",
        "#ccc",
    ],
    anchors: [
        "Home",
        "Story",
        "Services",
        "Portfolio",
        "Team",
        "Pricing",
        "Feedback",
        "Imprint",
    ],
    menu: "#menu",
    controlArrows: true,
    slidesNavigation: true,
    scrollHorizontallyKey:
        "c3VjaGVyLnRlY2hfWTQ4YzJOeWIyeHNTRzl5YVhwdmJuUmhiR3g1bkli",
    scrollHorizontally: slideslid,
});
$(".l").on("beforeChange", function (event, slick, currentSlide, nextSlide) {
    if (currentSlide == 0) {
        $("#crypto").css("visibility", "hidden");
        $("#inf").css("visibility", "visible");
    } else {
        $("#inf").css("visibility", "hidden");
        $("#crypto").css("visibility", "visible");
    }
});
