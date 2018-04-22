/**
 * Created by owner on 22/04/2018.
 */
$(function () {
    $('#name').keyup(function () {
        $('#greet').text('Hello' + $('#name').val())
    })
})
