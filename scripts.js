$(document).ready(function () {
    $("#downBtn").on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        var target = this.hash;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top + 2
        }, 1000, 'swing', function () {
            window.location.hash = target;
        });
    });
});