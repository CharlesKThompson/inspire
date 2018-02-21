function TodoController() {
	var todoService = new TodoService(draw)

	var todoElem = document.getElementById('todo')
	var todoListElem = document.getElementById('todoList')
	// You will need four methods
	// getTodos should request your api/todos and give an array of todos to your callback fn
	// addTodo takes in a todo and posts it to the server
	// toggleTodoStatus takes in a todo marks its status as completed and puts it to the server
	// removeTodo takes in a todoId and sends a delete request to the server
	// **** HINT: Everytime you make a change to any todo don't forget to get the todo list again

	// Use this getTodos function as your callback for all other edits
	function getTodos() {
		//FYI DONT EDIT ME :)
		todoService.getTodos(draw)
	}

	function draw(todos) {
		//WHAT IS MY PURPOSE?
		//BUILD YOUR TODO TEMPLATE HERE
		console.log(todos)
		var template = ``
		for (let i = 0; i < todos.length; i++) {
			var todo = todos[i];
			console.log(todo.id)
			template +=
				`
			<form class="${todo.id}" onsubmit="app.controllers.todoCtrl.removeTodo(event)">
				<div class="form-group hidden">
					<label for="add">Still to achieve:</label>
					<p>${todo.description}</p>
				</div>
				<button class="input">Finished with objective</button>
			</form>`
		}
		todoListElem.innerHTML = template
	}

	// this.addTodo = function addTodo(todo, getTodos) {
	// 	todoService.addTodo()
	// }

	this.addTodoFromForm = function (e) {
		e.preventDefault() // <-- hey this time its a freebie don't forget this
		// TAKE THE INFORMATION FORM THE FORM
		var form = e.target
		var todo = {
			description: form.todoObjective.value
		}
		// DONT FORGET TO BUILD YOUR TODO OBJECT

		//PASSES THE NEW TODO TO YOUR SERVICE
		//DON'T FORGET TO REDRAW THE SCREEN WITH THE NEW TODO
		//YOU SHOULDN'T NEED TO CHANGE THIS
		todoService.addTodo(todo, getTodos)
		//^^^^^^^ EXAMPLE OF HOW TO GET YOUR TOODOS AFTER AN EDIT
	}

	this.toggleTodoStatus = function (todoId) {
		// asks the service to edit the todo status
		todoService.toggleTodoStatus(todoId, getTodos)
		// YEP THATS IT FOR ME
	}

	// this.removeTodo = function (id, draw) {
	// 	// ask the service to run the remove todo with this id
	// 	todoService.removeTodo(id)
	// 	// ^^^^ THIS LINE OF CODE PROBABLY LOOKS VERY SIMILAR TO THE toggleTodoStatus
	// }


	//draw()
	this.removeTodo = function (id, cb) {
		// ask the service to run the remove todo with this id
		event.preventDefault()
		//var form = event.target
		//var id = form.getAttribute("data-id")
		console.log("hi")
		todoService.removeTodo(id, cb)
		//draw(todoService.getTodos())
		// ^^^^ THIS LINE OF CODE PROBABLY LOOKS VERY SIMILAR TO THE toggleTodoStatus
	}
	getTodos()// IF YOU WANT YOUR TODO LIST TO DRAW WHEN THE PAGE FIRST LOADS WHAT SHOULD YOU CALL HERE???


}
