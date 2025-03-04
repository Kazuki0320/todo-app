import { useState } from 'react';
import './App.css'

type Todo = {
  value: string;
};

export const App = () => {
  const [text, setText] = useState('');
  const [todos, setTodos] = useState<Todo[]>([]);

  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <input type="test" value={text} onChange={(e) => setText(e.target.value)} />
        <input type="submit" value="追加" onSubmit={(e) => e.preventDefault()} />
      </form>

      <p>{text}</p>
    </div>
  );
}

