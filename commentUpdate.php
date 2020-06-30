<?php
require 'menu/db.php';
error_reporting(E_ALL);
ini_set("display_errors", 1);

$reviewNum = $_POST['reviewNum'];
$sql = queryResult("SELECT *FROM comments WHERE review_num = '$reviewNum'");
$row = $sql->fetch_array();

$commentIdx = $row['idx'];
$id = $row['id'];
$commentContent = $row['comment_content'];
$commentDate = $row['comment_date'];
$commentTime = $row['comment_time'];
echo (json_encode(array('commentIdx'=>$commentIdx, 'id'=>$id, 'commentContent'=>$commentContent, 'commentDate'=>$commentDate,
                  'commentTime'=>$commentTime)));
?>