function registerUser() {
    var formData = {
        username: $('#username').val(),
        email: $('#email').val(),
        password: $('#password').val()
    };

    $.ajax({
        type: 'POST',
        url: 'PHP/register.php', 
        data: formData,
        contentType: 'application/x-www-form-urlencoded', 
        success: function (response) {
            console.log(response);
            alert(response.message);
        },
        error: function (error) {
            console.error(error);
            alert('Error during registration. Please try again.');
        }
    });
}