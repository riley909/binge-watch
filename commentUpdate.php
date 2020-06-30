<?php
require 'menu/db.php';
error_reporting(E_ALL);
ini_set("display_errors", 1);

$reviewNum = $_POST['review_num'];
//한 게시글 안의 모든 댓글을 출력하기 위해 해당 게시글 번호를 가진 모든 댓글을 조회한다
$sql = queryResult("SELECT *FROM comments WHERE review_num = '$reviewNum'");
//댓글 개수도 반영해야 하기 때문에 같이 조회함
$totalCommentNum = mysqli_num_rows($sql);
$row = $sql->fetch_array();
//TODO: 여러개의 행을 전부 가져올수 있도록 수정하기
$commentIdx = $row['idx'];
$id = $row['id'];
$commentContent = $row['comment_content'];
$commentDate = $row['comment_date'];
$commentTime = $row['comment_time'];
echo(json_encode(array('comment_idx' => $commentIdx, 'id' => $id, 'comment_content' => $commentContent, 'comment_date' => $commentDate,
    'comment_time' => $commentTime, 'total_comment_num' => $totalCommentNum)));
?>