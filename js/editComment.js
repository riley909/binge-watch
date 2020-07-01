function editComment(idx) {
    $.ajax({
        type: 'POST',
        url: 'editComment.php',
        data: {'idx': idx},
        dataType: 'json',
        success: function (result) {
            console.log(result);

        }
    });
}