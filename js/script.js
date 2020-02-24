$(document).ready(function () {
    $('#submit').click(function () {
        var Name = $('#name').val();
        var Email = $('#email').val();
        var Message = $('#message');
        var key = '43ab10333d46e19325f96d210ed40c49-us5';
        if (Name == '' || Email == '' || Message == '') {
            alert('Please make sure you have filled your credentials in the form correctly!');
        } else {
            alert(' Hello ' + Name + ' We have received your message. Thank you for messaging us. We try to be as responsive as possible. We will get back to you as soon as possible.');
        }

    });
});
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