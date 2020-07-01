function updateCommentList(myId, reviewNum) {
    let url = "commentUpdate.php";
    $.ajax({
        type: 'POST',
        url: url,
        data: {'review_num': reviewNum},
        dataType: 'json',
        success: function (result) {
            let resultArr = result;
            console.log(resultArr);
            // 댓글 목록이 중복 출력되는 것을 피하기 위해 목록 출력 전에 창을 초기화한다
            $(".comments-list").empty();
            let totalCommentNum = resultArr.total_comment_num;
            console.log('total: ', totalCommentNum);
            // 총 댓글의 개수는 댓글의 삭제, 수정, 작성과 상관없이 항상 반영한다
            // 텍스르에 접근하려면 .val() 이 아니라 .html()을 사용할 것
            $("#totalCommentNum").html(totalCommentNum);
            // 반복문에서는 필요 없는 정보인 총 댓글 개수를 배열에서 삭제한다
            delete resultArr['total_comment_num'];
            console.log('재확인: ', resultArr);
            for (let i = 0; i < totalCommentNum; i++) {
                let id = resultArr[i].id;
                let idx = resultArr[i].idx;
                let commentContent = resultArr[i].comment_content;
                let commentDate = resultArr[i].comment_date;
                let commentTime = resultArr[i].comment_time;
                // id가 로그인된 것과 일치할 경우에만 수정, 삭제버튼 출력
                if (myId === resultArr[i].id) {
                    let commentIdx = $('#commentIdx').val();
                    $(".comments-list").append("<div class=\"media\">"
                        + "<a class=\"media-left\" href=\"#\">"
                        // + "<img src=\"http://lorempixel.com/40/40/people/1/\">"
                        + "</a>"
                        + "<div class=\"media-body\">"
                        + "<h4 class=\"media-heading user_name\">" + id + "</h4>"
                        + "<div id=\"commentContent\">" + commentContent + "</div>"
                        + "<input type=\"hidden\" id=\"reviewNum\" value=" + reviewNum + "/>"
                        + "<input type=\"hidden\" id=\"commentIdx\" value=" + idx + "/>"
                        + "<p><small><button type=\"button\" style=\"border: 0; outline:0; color:blue;\">수정</button>"
                        + "<button type=\"button\" style=\"border: 0; outline:0; color:blue;\" onclick=\"deleteComment(" + commentIdx + ")\">삭제"
                        + "</button></small></p></div>"
                        + "<p class=\"pull-right\">"
                        + "<small>" + commentDate + "</small><br>"
                        + "<small>" + commentTime + "</small>"
                        + "</p></div>");
                } else {
                    $(".comments-list").append("<div class=\"media\">"
                        + "<a class=\"media-left\" href=\"#\">"
                        // + "<img src=\"http://lorempixel.com/40/40/people/1/\">"
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