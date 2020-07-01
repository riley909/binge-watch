function updateCommentList(myId, reviewNum) {
    let url = "commentUpdate.php";
    $.ajax({
        type: 'POST',
        url: url,
        data: {'review_num': reviewNum},
        dataType: 'json',
        success: function (result) {
            console.log(result);
            // 댓글 목록이 중복 출력되는 것을 피하기 위해 목록 출력 전에 창을 초기화한다
            $(".comments-list").empty();
            let totalCommentNum = result[0].total;
            console.log('total: ', totalCommentNum);
            // 총 댓글의 개수는 댓글의 삭제, 수정, 작성과 상관없이 항상 반영한다
            // 텍스르에 접근하려면 .val() 이 아니라 .html()을 사용할 것
            $("#totalCommentNum").html(totalCommentNum);
            // 반복문에서는 필요 없는 정보인 총 댓글 개수를 배열에서 삭제한다
            for (let i = 0; i < result.length; i++) {
                let id = result[i].id;
                let idx = result[i].idx;
                let commentContent = result[i].comment_content;
                let commentDate = result[i].comment_date;
                let commentTime = result[i].comment_time;
                // id가 로그인된 것과 일치할 경우에만 수정, 삭제버튼 출력
                if (myId === result[i].id) {
                    $(".comments-list").append("<div class=\"media\">"
                        + "<a class=\"media-left\" href=\"#\">"
                        + "</a>"
                        + "<div class=\"media-body\">"
                        + "<h4 class=\"media-heading user_name\">" + id + "</h4>"
                        + "<div id=\"commentContent\">" + commentContent + "</div>"
                        + "<input type=\"hidden\" id=\"reviewNum\" value=" + reviewNum + "/>"
                        + "<input type=\"hidden\" id=\"commentIdx\" value=" + idx + "/>"
                        + "<p><small><button type=\"button\" style=\"border: 0; outline:0; color:blue;\" onclick=editComment(\"" + idx + "\")>수정</button>"
                        + "<button type=\"button\" style=\"border: 0; outline:0; color:blue;\" onclick=deleteComment(\"" + idx + "\")>삭제"
                        + "</button></small></p></div>"
                        + "<p class=\"pull-right\">"
                        + "<small>" + commentDate + "</small><br>"
                        + "<small>" + commentTime + "</small>"
                        + "</p></div>");
                } else {
                    $(".comments-list").append("<div class=\"media\">"
                        + "<a class=\"media-left\" href=\"#\">"
                        + "</a>"
                        + "<div class=\"media-body\">"
                        + "<h4 class=\"media-heading user_name\">" + id + "</h4>"
                        + "<div id=\"commentContent\">" + commentContent + "</div>"
                        + "<input type=\"hidden\" id=\"reviewNum\" value=" + reviewNum + "/>"
                        + "<input type=\"hidden\" id=\"commentIdx\" value=" + idx + "/></div>"
                        + "<p class=\"pull-right\">"
                        + "<small>" + commentDate + "</small><br>"
                        + "<small>" + commentTime + "</small>"
                        + "</p></div>");
                }
            }
        }
    });
}