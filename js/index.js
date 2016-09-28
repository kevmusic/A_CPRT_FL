$(document).ready(function() {
    var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
    var month = monthNames[new Date().getMonth()];
    $(".thisMonth").text(month);
    
    /*+++++++++*/
    
    /*$(".thumbnail").height(Math.max.apply(null, $(".thumbnail").map(function() { return $(this).height(); })));*/
});