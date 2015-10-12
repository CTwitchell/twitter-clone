$(document).ready(function () {
    $("textarea").click(function () {
        $(".tweet-compose").css("height", "5em");
    });
    $(".tweet-compose").click(function () {
        $("#tweet-controls").css("display", "inline-block")

    });
    var maxLength = 40;
    $(".tweet-compose").keyup(function () {
        var length = $(this).val().length;
        var length = maxLength - length;
        $("#char-count").text(length);
        if(length <= 10)
            $("#char-count").css("color", "red");
        if(length >= 11)
            $("#char-count").css("color", "black");
        if(length > maxLength)
            $(".button").prop("disabled", true);
        if(length <= maxLength)
            $(".button").prop('disabled', false);
    });
});