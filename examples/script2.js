(function () {
    // var popup = document.getElementById("myPopup");
    // popup.classList.toggle("show");

    document
        .querySelector(".contactbtn")
        .addEventListener("click", function () {
            console.log("yes");
            document.querySelector("#menunew").classList.remove("on");
            document.querySelector(".overlay").classList.add("on");
        });
    var vib = false;
    document.querySelector(".ham").addEventListener("click", function () {
        if (!slideslid) {
            console.log("yes");
            document.querySelector(".over").classList.add("on");
        } else {
            if (!vib) {
                document.querySelector("#menunew").classList.add("onx");
                document.querySelectorAll(".fp-prev")[1].style.visibility =
                    "hidden";
                document.querySelectorAll(".fp-next")[1].style.visibility =
                    "hidden";
                document.querySelectorAll(".fp-prev")[0].style.visibility =
                    "hidden";
                document.querySelectorAll(".fp-next")[0].style.visibility =
                    "hidden";

                vib = true;
            } else {
                document.querySelector("#menunew").classList.remove("onx");
                document.querySelectorAll(".fp-prev")[0].style.visibility =
                    "visible";
                document.querySelectorAll(".fp-next")[0].style.visibility =
                    "visible";
                vib = false;
                document.querySelectorAll(".fp-prev")[1].style.visibility =
                    "visible";
                document.querySelectorAll(".fp-next")[1].style.visibility =
                    "visible";
                vib = false;
            }
        }
    });
    document.querySelector(".x").addEventListener("click", function () {
        console.log("yes");
        document.querySelector(".overlay").classList.remove("on");
    });
    document.querySelector(".x1").addEventListener("click", function () {
        console.log("yes");
        document.querySelector(".over").classList.remove("on");
    });
    const zoomelem = document.querySelector(".zooming");
    let zoom = 1;
    window.addEventListener(
        "hashchange",
        function (e) {
            if (location.hash == "#Story") {
                console.log("strooooo");
                document.querySelector(".backsec2").play();
                document.querySelector(".video-2").play();
            }
        },
        false
    );
    document.addEventListener("wheel", function (e) {
        console.log("nopppooo");
        if (location.hash == "#Imprint") {
            if (e.deltaY > 0) {
                // console.log( zoomelem.style.transform);
                zoomelem.style.transform = "scale(" + (zoom += 0.3) + ")";

                console.log(zoomelem.style.transform);
                // console.log(location.hash);
                if (zoom > 20) {
                    location.hash = "#Home";
                    zoomelem.style.transform = "scale(" + (zoom = 1) + ")";
                }
            } else {
                zoomelem.style.transform = "scale(" + (zoom = 1) + ")";
                console.log("erorro");
                // e.preventDefault();
            }
        }
    });
})();
