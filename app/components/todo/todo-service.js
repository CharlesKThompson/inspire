function TodoService() {
	// A local copy of your todos
	var todoList = []
	var baseUrl = 'https://inspire-server.herokuapp.com/api/YOURNAMEHERE'

	function logError(err) {
		console.error('UMM SOMETHING BROKE: ', err)
		//CAN YOU NOTIFY THE USER IF SOMETHING BREAKS? 
		//do this without breaking the controller/service responsibilities
	}

	this.getTodos = function (draw) {
		$.get(baseUrl)
			.then(function (res) { // <-- WHY IS THIS IMPORTANT????
				draw(res)
			})
			.fail(logError)
	}

	this.addTodo = function (todo, cb) {
		// WHAT IS THIS FOR???
		$.post(baseUrl, todo)
			.then(function(res){ 
				console.log(res.data)
				todoList.push(todo)
				// // <-- WHAT DO YOU DO AFTER CREATING A NEW TODO?
				 cb()
			}) 
			.fail(logError)
	}

	this.getTodoById = function findTodoById(arr, id) {
		for (let i = 0; i < arr.length; i++) {
			var todoId = arr[i];
			if (id == todo.id) {
				return todoId
			}
		}
	}

	this.toggleTodoStatus = function (todoId) {
		// MAKE SURE WE THINK THIS ONE THROUGH
		//STEP 1: Find the todo by its index **HINT** todoList

		//STEP 2: Change the completed flag to the opposite of what is is **HINT** todo.completed = !todo.completed

		//STEP 3: Here is that weird Ajax request because $.put doesn't exist
		$.ajax({
			method: 'PUT',
			contentType: 'application/json',
			url: baseUrl + '/' + todoId,
			data: JSON.stringify(YOURTODOVARIABLEHERE)
		})
			.then(function (res) {
				//DO YOU WANT TO DO ANYTHING WITH THIS?
			})
			.fail(logError)
	}

	this.removeTodo = function (todo, cb) {console.log("getting here?")
		// Umm this one is on you to write.... It's also unique, like the ajax call above. The method is a DELETE
		$.ajax({
			method: 'DELETE',
			url: baseUrl + '/' + todoId,
		})
			//todoList.pop(todo)
			cb()

	}

}
