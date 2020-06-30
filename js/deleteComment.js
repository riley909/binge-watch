function deleteComment(idx) {
    // Uncaught RangeError: Maximum call stack size exceeded 수정
    // XXX: input태그의 값이 아니라 태그 자체를 넘기는 실수를 하면 위의 오류가 발생
    idx = $("#commentIdx").val();
    let reviewNum = $("#reviewNum").val();
    $.confirm({
        icon: 'fas fa-exclamation-triangle',
        title: '',
        content: '댓글을 삭제할까요?',
        buttons: {
            delete: function () {
                console.log("클릭");
                $.ajax({
                    type: 'POST',
                    url: "deleteComment.php",
                    data: {'review_num': reviewNum, 'comment_idx': idx},
                    dataType: 'json',
                    success: function (result) {
                        console.log(result);
                        let id = result.id;
                        let reviewNum = result.review_num;
                        updateCommentList(id, reviewNum);
                    }
                });
                $.alert('삭제되었습니다.');

            },
            cancel: function () {
                $.alert('취소되었습니다.');
            }
        }
    });
}