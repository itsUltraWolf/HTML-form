$(".clear").click(function () {
    $(this).closest('section').find("input[type=text], input[type=password], input[type=email], textarea").val("");
    $(this).closest('section').find('input:checkbox').prop('checked', false);
});