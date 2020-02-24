$(document).ready(function () {
    $("#hussein").click(function () {
        $(this).hide();
        $(".abass").show();
    });
    $('.abass').click(function () {
        $(this).hide();
        $("#hussein").show()
    });
})
$(document).ready(function () {
    $("#img").click(function () {
        $(this).hide();
        $(".dado").show();
    })
})
$('.dado').click(function () {
    $(this).hide();
    $("#img").show()
})
$(document).ready(function () {
    $("#code").click(function () {
        $(this).hide();
        $(".board").show();
    })
})
$('.board').click(function () {
    $(this).hide();
    $("#code").show();
})