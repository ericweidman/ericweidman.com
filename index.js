$(document).ready(function() {
    $("#page").addClass("animated zoomInDown");
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
    $("#fixedheader").addClass("animated rollIn");
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

//  $("#b1").addClass("animated bounceIn infinite");
//  $("#b2").addClass("animated bounceIn");
//  $("#b3").addClass("animated bounceIn");

var waypoint = new Waypoint({
  element: document.getElementById('butts'),
  handler: function() {
     $("#b1").addClass("animated bounceIn");
     $("#b2").addClass("animated bounceIn");
     $("#b3").addClass("animated bounceIn");
  },
  offset: 700
})
