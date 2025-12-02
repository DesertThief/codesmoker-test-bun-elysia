import { Elysia } from 'elysia';

// Types
interface Todo {
  id: number;
  name: string;
  isComplete: boolean;
}

// In-memory database
let todos: Todo[] = [
  { id: 1, name: 'Learn Bun', isComplete: false },
  { id: 2, name: 'Build with Elysia', isComplete: false },
];

let nextId = 3;

// Create Elysia app
const app = new Elysia()
  // Root endpoint
  .get('/', () => '🦊 Welcome to Elysia on Bun!')

  // GET all todos
  .get('/todos', () => todos)

  // GET completed todos
  .get('/todos/complete', () => todos.filter((t) => t.isComplete))

  // GET todo by id
  .get('/todos/:id', ({ params: { id } }) => {
    const todo = todos.find((t) => t.id === parseInt(id));
    if (!todo) {
      return new Response('Not Found', { status: 404 });
    }
    return todo;
  })

  // POST create todo
  .post('/todos', ({ body }) => {
    const { name, isComplete = false } = body as { name: string; isComplete?: boolean };
    const todo: Todo = {
      id: nextId++,
      name,
      isComplete,
    };
    todos.push(todo);
    return new Response(JSON.stringify(todo), {
      status: 201,
      headers: { 'Content-Type': 'application/json' },
    });
  })

  // PUT update todo
  .put('/todos/:id', ({ params: { id }, body }) => {
    const todoIndex = todos.findIndex((t) => t.id === parseInt(id));
    if (todoIndex === -1) {
      return new Response('Not Found', { status: 404 });
    }
    const { name, isComplete } = body as { name: string; isComplete: boolean };
    todos[todoIndex] = { ...todos[todoIndex], name, isComplete };
    return new Response(null, { status: 204 });
  })

  // DELETE todo
  .delete('/todos/:id', ({ params: { id } }) => {
    const todoIndex = todos.findIndex((t) => t.id === parseInt(id));
    if (todoIndex === -1) {
      return new Response('Not Found', { status: 404 });
    }
    todos.splice(todoIndex, 1);
    return new Response(null, { status: 204 });
  })

  // Start server
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
