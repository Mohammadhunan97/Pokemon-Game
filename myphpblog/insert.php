<?php
include("index.php");
$title = pg_escape_string($_POST['title']); 
$content = pg_escape_string($_POST['content']); 

$query = "INSERT INTO POSTS(title, content) VALUES('" . $title . "', '" . $content. "')";
pg_query($query); 

echo "<script>
window.location = '/';
</script>";

exit();
?>