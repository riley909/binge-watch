<?php
require 'menu/db.php';
error_reporting(E_ALL);
ini_set("display_errors", 1);

$reviewNum = $_POST['review_num'];
$commentIdx = $_POST['comment_idx'];
echo (json_encode(array('review_num'=>$reviewNum, 'comment_idx'=>$commentIdx)));

$sql = queryResult("DELETE FROM comments WHERE review_num = '$reviewNum' AND idx = '$commentIdx'");

?>