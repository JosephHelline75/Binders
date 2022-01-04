$(".jumbotron").hover(function () {
        // over
        $(".jumbotron").addClass("jumbotronHovered");
        $("h1").removeClass("hero");
        $("h1").addClass("heroHovered");
    }, function () {
        // out
        $(".jumbotron").removeClass("jumbotronHovered");
        $("h1").removeClass("heroHovered");
        $("h1").addClass("hero");

    }
);