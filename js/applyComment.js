$('#writeCommentBtn').click(function () {
    // 폼 내부 태그 값들을 배열로 만든다
    var formData = $('#commentForm').serializeArray();
    // formData[0] : 댓글내용
    // formData[1] : 작성자
    // formData[2] : 글 인덱스
    // formData[3] : 댓글작성일
    // formData[4] : 댓글작성시간
    console.log(formData);
    $.post($("#commentForm").attr("action"), formData, function(info){
        console.log(info);
    });
    $(".comments-list").append("<div class=\"media\">"
    +"<a class=\"media-left\" href=\"#\">"
        +"<img src=\"http://lorempixel.com/40/40/people/1/\">"
    +"</a>"
    +"<div class=\"media-body\">"
        +"<h4 class=\"media-heading user_name\">"+formData[1].value+"</h4>"
        +formData[0].value+"<p><small><a href=\"#\">수정</a>  -  <a href=\"#\">삭제</a></small></p>"
    +"</div>"
    +"<p class=\"pull-right\">"
        +"<small>"+formData[3].value+"</small><br>"
        +"<small>"+formData[4].value+"</small>"
    +"</p></div>");
    clearInput();
});

$("#commentForm").submit(function(){
    return false;
});

function clearInput(){
    $("#commentContent").val('');
}



