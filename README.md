# CodeSmoker Test: Bun + Elysia (#15)

A test repository for the CodeSmoker test suite demonstrating a Bun project with the Elysia framework.

## Project Structure

```
├── src/
│   ├── index.ts          # Main Elysia application
│   └── index.test.ts     # Tests
├── package.json          # Dependencies and scripts
└── tsconfig.json         # TypeScript configuration
```

## Features

- **Bun Runtime**: Ultra-fast JavaScript runtime
- **Elysia Framework**: Ergonomic and type-safe web framework
- **TypeScript**: Full TypeScript support out of the box
- **Built-in Testing**: Bun's native test runner

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | Welcome message |
| GET | `/todos` | Get all todos |
| GET | `/todos/complete` | Get completed todos |
| GET | `/todos/:id` | Get todo by ID |
| POST | `/todos` | Create a new todo |
| PUT | `/todos/:id` | Update a todo |
| DELETE | `/todos/:id` | Delete a todo |

## Getting Started

### Prerequisites

- Bun >= 1.0.0

### Install Bun

```bash
# macOS/Linux
curl -fsSL https://bun.sh/install | bash

# Windows
powershell -c "irm bun.sh/install.ps1 | iex"
```

### Installation

```bash
bun install
```

### Development

```bash
bun dev
```

Server runs at http://localhost:3000

### Build

```bash
bun run build
```

### Run Tests

```bash
bun test
```

## Example Usage

```typescript
import { Elysia } from 'elysia';

const app = new Elysia()
  .get('/', () => 'Hello Elysia')
  .get('/todos', () => todos)
  .listen(3000);

console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`);
```

## Documentation

Built using latest documentation from:
- [ElysiaJS](https://elysiajs.com) - Elysia framework documentation
- [Bun](https://bun.sh) - Bun runtime documentation

---

*This is a CodeSmoker test repository*
