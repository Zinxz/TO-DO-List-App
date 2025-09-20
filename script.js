  let todos = [];
        let nextId = 1;

        function renderTodos() {
            const todoList = document.getElementById('todoList');
            
            if (todos.length === 0) {
                todoList.innerHTML = '<li class="empty-state">No tasks yet. Add one above!</li>';
                return;
            }

            todoList.innerHTML = todos.map(todo => `
                <li class="todo-item">
                    <span class="todo-text ${todo.completed ? 'completed' : ''}">${todo.text}</span>
                    <button class="complete-btn" onclick="toggleTodo(${todo.id})">
                        ${todo.completed ? 'Undo' : 'Done'}
                    </button>
                    <button class="delete-btn" onclick="deleteTodo(${todo.id})">Delete</button>
                </li>
            `).join('');
        }

        function addTodo() {
            const input = document.getElementById('todoInput');
            const text = input.value.trim();
            
            if (text === '') {
                alert('Please enter a task!');
                return;
            }

            todos.push({
                id: nextId++,
                text: text,
                completed: false
            });

            input.value = '';
            renderTodos();
        }

        function toggleTodo(id) {
            const todo = todos.find(t => t.id === id);
            if (todo) {
                todo.completed = !todo.completed;
                renderTodos();
            }
        }

        function deleteTodo(id) {
            todos = todos.filter(t => t.id !== id);
            renderTodos();
        }

        // Allow adding todos by pressing Enter
        document.getElementById('todoInput').addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                addTodo();
            }
        });

        renderTodos()