$("[data-fancybox]").fancybox();

$("items").isotope({
    filter: '*',
    animationOptions: {
        duration: 1500,
        easing: 'linear',
        queue: false
    }
});


$("#filters a").click(function() {

    $("#filters .current").removeClass("current");
    $(this).addClass("current");

    var selector = $(this).attr("data-filter");
    
    $("items").isotope({
        filter: selector,
        animationOptions: {
            duration: 1500,
            easing: 'linear',
            queue: false
        }
    });

    return false;

});


// Initialize tooltip component
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })
  
  // Initialize popover component
  $(function () {
    $('[data-toggle="popover"]').popover()
  })