$(document).ready(function() {
    $("#page").addClass("animated fadeIn");

    $("#this").hover(
        function() {
            $(this).addClass("animated bounce infinite");
        },
        function() {
            $(this).removeClass("animated bounce");
        }
    );
    $("#this1").hover(
        function() {
            $(this).addClass("animated bounce infinite");
        },
        function() {
            $(this).removeClass("animated bounce");
        }
    );
    $("#this2").hover(
        function() {
            $(this).addClass("animated bounce infinite");
        },
        function() {
            $(this).removeClass("animated bounce");
        }
    );


    $("#fixedheader").addClass("animated slideInDown");



    $("#b1").click(function() {
        $("body").addClass("animated hinge");
        setTimeout(function() {
            window.location.href = "https://github.com/ericweidman"
        }, 1700)
    })


    var waypoint = new Waypoint({
        element: document.getElementById('butts'),
        handler: function() {
            $("#b1").addClass("animated zoomIn");
            $("#b2").addClass("animated zoomIn");
            $("#b3").addClass("animated zoomIn");
        },
        offset: 1050
    })

    var waypoint = new Waypoint({
        element: document.getElementById('stuff'),
        handler: function() {
            $("#p1").addClass("animated slideInLeft");
            $("#p2").addClass("animated slideInLeft");
            $("#p3").addClass("animated slideInLeft");
            $("#p4").addClass("animated slideInRight");
            $("#p5").addClass("animated slideInRight");
            $("#p6").addClass("animated slideInRight");
        },
        offset: 700
    })
});


function core() {
    $('html, body').animate({
            scrollTop: $("#stuff").offset().top - 220
        },
        'slow');
};

function contact() {
    $('html, body').animate({
            scrollTop: $("#fixedfooter").offset().top
        },
        'slow');
};

function about() {
    $('html, body').animate({
            scrollTop: $("#page").offset().top
        },
        'slow');
};

var waypoint = new Waypoint({
    element: document.getElementById('photo1'),
    handler: function() {
      $("#p1").removeClass("animated slideInLeft");
      $("#p2").removeClass("animated slideInLeft");
      $("#p3").removeClass("animated slideInLeft");
      $("#p4").removeClass("animated slideInRight");
      $("#p5").removeClass("animated slideInRight");
      $("#p6").removeClass("animated slideInRight");
      $("#b1").removeClass("animated zoomIn");
      $("#b2").removeClass("animated zoomIn");
      $("#b3").removeClass("animated zoomIn");
    },
})
