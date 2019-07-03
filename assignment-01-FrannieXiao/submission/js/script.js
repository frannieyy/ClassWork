<!-- Reference: http://materializecss.com/getting-started.html -->
<!DOCTYPE html>
<html>

<head>
	<!--Import Google Icon Font-->
	<link href="http://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
	<!--Import materialize.css-->
	<link type="text/css" rel="stylesheet" href="css/materialize.min.css" media="screen,projection" />
	<link type="text/css" rel="stylesheet" href="css/style.css">
	<!--Let browser know website is optimized for mobile-->
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
</head>

<body>
    <div class="container">
      <p>
        <h1 id="newTask" for="new-task">MY TODO LIST</h1>
    </div>

    <div class="adding">
        <input id="addingTask" type="text" placeholder="I need to...">
        <button class="waves-effect waves-teal btn-flat">Add</button>
      </p>
      
      <h3>Todo List</h3>
      <ul id="todoList">
        
      </ul>
    </div>

	<!--Import jQuery before materialize.js-->
	<script type="text/javascript" src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
  <script type="text/javascript" src="js/materialize.min.js"></script>
  <script type="text/javascript" src="js/script.js"></script>
</body>
