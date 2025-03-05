import { useState } from 'react';
import './App.css'

type Todo = {
  value: string;
};

export const App = () => {
  const [text, setText] = useState('');
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleSubmit = () => {
    if (!text) return

    // 新しいTodoを作成
    const newTodo: Todo = {
      value: text
    }

    setTodos((todos) => [newTodo, ...todos])
    setText('')
  };

  return (
    <div>
      <form onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}>
        <input type="test" value={text} onChange={(e) => setText(e.target.value)} />
        <input type="submit" value="追加"/>
      </form>
    </div>
  );
}

