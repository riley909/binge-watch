function updateCommentList(reviewNum){
    let url = "commentUpdate.php";
    $.ajax({
        type: 'POST',
        url: url,
        data: reviewNum,
        dataType: 'json',
        success: function(result) {
            console.log(result);
            if(result.length > 1){
                $(result).each(function(){
                    if($sessionId == $id){
                        // 내가 쓴 댓글일 경우만 수정, 삭제버튼 노출
                    $(".comments-list").append("<div class=\"media\">"
                    +"<a class=\"media-left\" href=\"#\">"
                    +"<img src=\"http://lorempixel.com/40/40/people/1/\">"
                        +"</a>"
                        +"<div class=\"media-body\">"
                        +"<h4 class=\"media-heading user_name\">"+username+"</h4>"
                        +"<div id=\"commentContent\">"+content+"</div>"
                        +"<input type=\"hidden\" id=\"reviewNum\" value=\"\"/>"
                        +"<input type=\"hidden\" id=\"commentIdx\" value=\"\"/>"

                        +"<p><small><button type=\"button\" style=\"border: 0; outline:0; color:blue;\">수정</button>"
                        +"<button type=\"button\" style=\"border: 0; outline:0; color:blue;\" onclick=\"deleteComment()\">삭제</button></small></p>"
                    +"</div>"
                    +"<p class=\"pull-right\">"
                    +"<small>"+ date +"</small><br>"
                    +"<small>"+ time +"</small>"
                    +"</p> </div>");
                }
                });	
            }
            // $("#comments-list").html(htmls);
        }	 
    });	
}


// htmls += '<div class="media">';
// htmls += '<a class="media-left" href="#">';
// htmls += '<img src="http://lorempixel.com/40/40/people/1/">';
// htmls += '</a>';
// htmls += '<div class="media-body">';
// htmls += '<h4 class="media-heading user_name"><?=$id?></h4>';
// htmls += '<div id="commentContent"><?=$commentContent?></div>';
// htmls += '<input type="hidden" id="reviewNum" value="<?=$reviewNum?>"/>';
// htmls += '<p><small><a href="#" id="editComment">수정</a> - <a href="#" id="deleteComment">삭제</a></small></p>';
// htmls += '</div>';
// htmls += '<p class="pull-right">';
// htmls += '<small><?= $commentDate ?></small><br>';
// htmls += '<small><?= $commentTime ?></small>';
// htmls += '</p>';
// htmls += '</div>';