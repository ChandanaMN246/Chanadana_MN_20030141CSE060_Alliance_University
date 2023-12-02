function loginUser() {
    var formData = {
        email: $('#email').val(),
        password: $('#password').val()
    };

    $.ajax({
        type: 'POST',
        url: 'PHP/login.php', 
        data: formData,
        contentType: 'application/x-www-form-urlencoded',
        success: function (response) {
            console.log(response);
            alert(response.message);

            if (response.status === 'success') {
                window.location.href = 'profile.html';
            }
        },
        error: function (error) {
            console.error(error);
            alert('Error during login. Please try again.');
        }
    });
}
