$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('#topBtn').fadeIn();
        }
        else { $('#topBtn').fadeOut(); }
    });
    $("#topBtn").click(function () {
        $('html,body').animate({ scrollTop: 0 }, 300);
        return false;
    });
});