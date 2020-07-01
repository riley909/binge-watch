<?php
require 'menu/db.php';
error_reporting(E_ALL);
ini_set("display_errors", 1);

function console_log($data){
    echo "<script>console.log('PHP_CONSOLE : ".$data."');</script>";
}

$reviewNum = $_POST['review_num'];
//한 게시글 안의 모든 댓글을 출력하기 위해 해당 게시글 번호를 가진 모든 댓글을 조회한다
$sql = queryResult("SELECT *FROM comments WHERE review_num = '$reviewNum'");
//댓글 개수도 반영해야 하기 때문에 같이 조회함
$totalCommentNum = mysqli_num_rows($sql);
$commentList = array();
while ($row = $sql->fetch_array()) {
    $commentList[] = array('idx' => $row[0], 'id' => $row[1], 'review_num' => $row[2], 'comment_content' => $row[3],
        'comment_date' => $row[4], 'comment_time' => $row[5], 'total'=>$totalCommentNum);
}
echo json_encode($commentList);

?>