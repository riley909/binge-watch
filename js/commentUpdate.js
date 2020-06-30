function updateCommentList(myId, reviewNum) {
    let url = "commentUpdate.php";
    $.ajax({
        type: 'POST',
        url: url,
        data: {'review_num': reviewNum},
        dataType: 'json',
        success: function (result) {
            console.log(result.length);
            let id = result.id;
            let idx = result.comment_idx;
            let commentContent = result.comment_content;
            let commentDate = result.comment_date;
            let commentTime = result.comment_time;
            let totalCommentNum = result.total_comment_num;
            // 총 댓글의 개수는 댓글의 삭제, 수정, 작성과 상관없이 항상 반영한다
            $("#totalCommentNum").val(totalCommentNum);
            for (let i = 0; i < result.length; i++) {
                console.log(result);
                // id가 로그인된 것과 일치할 경우에만 수정, 삭제버튼 출력
                if (myId === result[i].id) {
                    $(".comments-list").append("<div class=\"media\">"
                        + "<a class=\"media-left\" href=\"#\">"
                        + "<img src=\"http://lorempixel.com/40/40/people/1/\">"
                        + "</a>"
                        + "<div class=\"media-body\">"
                        + "<h4 class=\"media-heading user_name\">" + id + "</h4>"
                        + "<div id=\"commentContent\">" + commentContent + "</div>"
                        + "<input type=\"hidden\" id=\"reviewNum\" value=" + reviewNum + "/>"
                        + "<input type=\"hidden\" id=\"commentIdx\" value=" + idx + "/>"
                        + "<p><small><button type=\"button\" style=\"border: 0; outline:0; color:blue;\">수정</button>"
                        + "<button type=\"button\" style=\"border: 0; outline:0; color:blue;\" onclick=\"deleteComment()\">삭제"
                        + "</button></small></p></div>"
                        + "<p class=\"pull-right\">"
                        + "<small>" + commentDate + "</small><br>"
                        + "<small>" + commentTime + "</small>"
                        + "</p> </div>");
                } else {
                    $(".comments-list").append("<div class=\"media\">"
                        + "<a class=\"media-left\" href=\"#\">"
                        + "<img src=\"http://lorempixel.com/40/40/people/1/\">"
                        + "</a>"
                        + "<div class=\"media-body\">"
                        + "<h4 class=\"media-heading user_name\">" + id + "</h4>"
                        + "<div id=\"commentContent\">" + commentContent + "</div>"
                        + "<input type=\"hidden\" id=\"reviewNum\" value=" + reviewNum + "/>"
                        + "<input type=\"hidden\" id=\"commentIdx\" value=" + idx + "/></div>"
                        + "<p class=\"pull-right\">"
                        + "<small>" + commentDate + "</small><br>"
                        + "<small>" + commentTime + "</small>"
                        + "</p> </div>");
                }
            }
        }
    });
}