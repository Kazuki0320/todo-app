import { useState } from 'react';
import './App.css'

type Todo = {
  value: string;
  readonly id: number;
};

export const App = () => {
  const [text, setText] = useState('');
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleSubmit = () => {
    if (!text) return

    // 新しいTodoを作成
    const newTodo: Todo = {
      value: text,
      id: new Date().getTime()
    }

    setTodos((todos) => [newTodo, ...todos])
    setText('')
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }

  const handleEdit = (id: number, value: string) => {
    setTodos((todos) => {
      const newTodos = todos.map((todo) => {
        if (todo.id === id) {
          todo.value = value
        }
        return todo
      })

      // todos ステートが書き換えられていないかチェック
      console.log('=== Original todos ===');
      todos.map((todo) => {
        console.log(`id: ${todo.id}, value: ${todo.value}`);
      });

      return newTodos;
    })
  }

  return (
    <div>
      <form onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}>
        <ul>
          {todos.map((todo) => {
            return (
              <li key={todo.id}>
                <input
                  type="text"
                  value={todo.value}
                  onChange={(e) => handleEdit(todo.id, e.target.value)}
                />
              </li>
            )
          })}
        </ul>
        <input type="test" value={text} onChange={(e) => handleChange(e)} />
        <input type="submit" value="追加"/>
      </form>
    </div>
  );
}

