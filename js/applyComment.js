$('#writeCommentBtn').click(function () {
    // 폼 내부 태그 값들을 배열로 만든다
    var formData = $('#commentForm').serializeArray();
    // formData[0] : 댓글내용
    // formData[1] : 작성자
    // formData[2] : 글 인덱스
    // formData[3] : 댓글작성일
    // formData[4] : 댓글작성시간
    console.log(formData);
    $.post($("#commentForm").attr("action"), formData, function (info) {
    });

    // $(".comments-list").append("<div class=\"media\">"
    //     + "<a class=\"media-left\" href=\"#\">"
    //     + "<img src=\"http://lorempixel.com/40/40/people/1/\">"
    //     + "</a>"
    //     + "<div class=\"media-body\">"
    //     + "<h4 class=\"media-heading user_name\">" + formData[1].value + "</h4><div id=\"CommentContent\">"
    //     + formData[0].value + "</div><p><small><button type=\"button\" style=\"border: 0; outline:0; color:blue;\">수정</button>"
    //     + "<button type=\"button\" style=\"border: 0; outline:0; color:blue;\" onclick=\"deleteComment()\">삭제</button></small></p></small></p>"
    //     + "</div>"
    //     + "<p class=\"pull-right\">"
    //     + "<small>" + formData[3].value + "</small><br>"
    //     + "<small>" + formData[4].value + "</small>"
    //     + "</p></div>");
    clearInput();
    let id = formData[1].value;
    let reviewNum = formData[2].value;
    console.log(id);
    console.log(reviewNum);
    updateCommentList(id, reviewNum);
});

$("#commentForm").submit(function () {
    return false;
});

function clearInput() {
    $("#commentInput").val('');
}



