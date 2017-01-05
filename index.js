
$(document).ready(function() {
    $("#page").addClass("animated fadeIn");
});
$(document).ready(function() {
    $("#this").hover(function() {
        $("#this").addClass("animated bounce");
    });
});
$(document).ready(function() {
    $("#this1").hover(function() {
        $("#this1").addClass("animated bounce");
    });
});
$(document).ready(function() {
    $("#this2").hover(function() {
        $("#this2").addClass("animated bounce");
    });
});
$(document).ready(function() {
    $("#fixedheader").addClass("animated slideInDown");
});
// $(document).ready(function() {
//     $("#fixedfooter").addClass("animated rollIn");
// });
$(document).ready(function() {
    $("#b1").click(function() {
        $("body").addClass("animated hinge");
        setTimeout(function() {
            window.location.replace("https://github.com/ericweidman");
        }, 1700)
    })
});

var waypoint = new Waypoint({
  element: document.getElementById('butts'),
  handler: function() {
     $("#b1").addClass("animated zoomIn");
     $("#b2").addClass("animated zoomIn");
     $("#b3").addClass("animated zoomIn");
  },
  offset: 850
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

function core() {
  $('html, body').animate({
      scrollTop: $("#stuff").offset().top - 220},
      'slow');
};

function contact() {
  $('html, body').animate({
    scrollTop: $("#fixedfooter").offset().top},
      'slow');
};
function about() {
  $('html, body').animate({
    scrollTop: $("#page").offset().top},
      'slow');
};
