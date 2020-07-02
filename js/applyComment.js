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
    clearInput();
    let id = formData[1].value;
    let reviewNum = formData[2].value;
    console.log(id);
    console.log(reviewNum);
    // TODO: 댓글 작성시 새로고침이 제대로 반영되지 않음
    updateCommentList(id, reviewNum);
});

$("#commentForm").submit(function () {
    return false;
});

function clearInput() {
    $("#commentInput").val('');
}



