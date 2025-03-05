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

  return (
    <div>
      <form onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}>
        <ul>
          {todos.map((todo) => {
            return <li key={todo.id}>{todo.value}</li>
          })}
        </ul>
        <input type="test" value={text} onChange={(e) => handleChange(e)} />
        <input type="submit" value="追加"/>
      </form>
    </div>
  );
}

