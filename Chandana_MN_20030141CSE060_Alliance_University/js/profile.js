$(document).ready(function () {
    $('#fileInput').change(function () {
        var file = this.files[0];

        if (file) {
            var reader = new FileReader();
            reader.onload = function (e) {
                $('#profilePic').attr('src', e.target.result);
            };
            reader.readAsDataURL(file);
            $('#imageUploadModal').modal('hide');
        }
    });
    $.ajax({
        type: 'GET',
        url: 'PHP/profile.php',  
        success: function (data) {
            var user = JSON.parse(data);
            $('#usernameDisplay').text("User Name: " + user.username);
            $('#emailDisplay').text("Email: " + user.email);
        },
        error: function (error) {
            console.error(error);
        }
    });

});

$('#fileInput').change(function () {
    var file = this.files[0];
    var formData = new FormData();
    formData.append('file', file);

    $.ajax({
        type: 'POST',
        url: 'upload.php',
        data: formData,
        processData: false,
        contentType: false,
        success: function (response) {
            var imagePath = response;
            $('#profilePic').attr('src', imagePath);
            storeImagePathInMongo(imagePath);
        },
        error: function (error) {
            console.error(error);
        }
    });
});

function storeImagePathInMongo(imagePath) {
    $.ajax({
        type: 'POST',
        url: 'PHP/profile.php', 
        data: { imagePath: imagePath },
        success: function (response) {
        },
        error: function (error) {
            console.error(error);
        }
    });
}


$('.edit-icon').click(function () {
    $('#fileInput').click();
});

$('#fileInput').change(function () {
    var file = this.files[0];
    var formData = new FormData();
    formData.append('file', file);
    $.ajax({
        type: 'POST',
        url: 'PHP/profile.php', 
        data: formData,
        processData: false,
        contentType: false,
        success: function (response) {
            var imagePath = response;
            $('#profilePic').attr('src', imagePath);
        },
        error: function (error) {
            console.error(error);
        }
    });
});


$('#fileInput').change(function () {
    var file = this.files[0];

    if (file) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#profilePic').attr('src', e.target.result);
        };
        reader.readAsDataURL(file);
        $('#imageUploadModal').modal('hide');
    }
});

