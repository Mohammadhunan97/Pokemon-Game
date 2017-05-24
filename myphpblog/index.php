<?php 
	$dbconn = pg_connect("host=localhost port=5432 dbname=myphpblog");
?>



<!DOCTYPE html>
<html>
<head>
	<title>My Php Blog</title>
</head>
<body>
	<h2>Create a new blog post</h2>
	<form method="POST" action="insert.php">
		Title:<input type="text" name="title" />
		Content:<input type="text" name="content"/>
		<input type="submit"/>
	</form>
	<?php 
		$query = "SELECT * FROM POSTS";
	$allPosts = pg_query($dbconn, $query);
	while($post = pg_fetch_assoc($allPosts)){
		echo "<hr>";
		echo $post["title"] . "<button class='delete'>Delete</button><button class='update'>Update</button><br/>"; 
		echo $post["content"] . "<br>";
	}
	?>

<script
  src="https://code.jquery.com/jquery-3.2.1.min.js"
  integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4="
  crossorigin="anonymous"></script>
<script>
</script>
</body>
</html>