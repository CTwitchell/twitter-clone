$(document).ready(function () {
    $(".tweet-compose").click(function () {
        $(".tweet-compose").css("height", "5em");
    });

    $(".tweet-reply").click(function () {
        $(".tweet-reply").css("height", "5em");
    });

    $(".tweet-compose").click(function () {
        $("#tweet-controls").css("display", "inline-block")

    });

    $('#tweet-content textarea').on('keyup', function () {
        $('#char-count').html('140' - $('#tweet-content textarea').val().length);
        if ($('#tweet-content textarea').val().length >= 141) {
            $('#tweet-controls .button').prop('disabled', true);
        } else {
            $('#tweet-controls .button').prop('disabled', false);
        }
        if ($('#tweet-content textarea').val().length >= 130) {
            $('#char-count').css('color', 'red');
        } else {
            $('#char-count').css('color', 'black');
        }
    });

    $(".tweet").mouseenter(function () {
        $(".tweet-actions li").css("display", "inline-block");
    });

    $(".tweet").mouseleave(function () {
        $(".tweet-actions li").css("display", "none");
    });

    $(".tweet").click(function () {
        $(".time").css("display", "block");
    });

    $(".reply-button").click(function () {
        $(".reply").css("display", "block");
    });

    $(".tweet-reply").blur(function () {
        $(".reply").css("display", "none");
        $(".tweet-reply").css("height", "2.5em");
    });

    $("#tweet-submit").on("click", function () {
        $('#stream').prepend(
            '<div class="tweet">' +
            '<img class="avatar" src="img/alagoon.jpg" />' +
            '<strong class="fullname">Your Name Here </strong>' +
            '<span class="username">@YourNameHere</span>' +
            '<p class="tweet-text">' + $('#tweet-content textarea').val() + '</p>' +
            '</div>');
        $("#stream").append(".tweet-actions").clone();
        $("#tweet-content textarea").val("");
        $("#tweet-controls").css("display", "none");
        $(".tweet-compose").css("height", "2.5em");
    });
});