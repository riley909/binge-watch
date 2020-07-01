<?php
require 'menu/db.php';
error_reporting(E_ALL);
ini_set("display_errors", 1);

//댓글 정보를 댓글 인덱스로 조회한다
$idx = $_POST['idx'];
$sql = queryResult("SELECT *FROM comments WHERE idx = '$idx'");
$row = $sql->fetch_array();
$commentContent = $row['comment_content'];

echo $commentContent;