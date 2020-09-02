import React from 'react'
import { useState } from 'react'
import './style.css'
function TodoList() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      content: '体育新闻',
      isCompeted: true
    },
    {
      id: 2,
      content: '国际新闻',
      isCompeted: true
    }
  ])
  return (
    <div className="app">
      <form className="todo-list">
        <ul>
          {
            todos.map((item) => (
              <li className="todo" key={item.id}>
                <div className="checkbox">
                  <input type="checkbox" value={item.content} />
                </div>
                {item.content}
              </li>
            ))
          }
        </ul>
        <input type="text" />
        <button onClick={(e) => handleClick(e)}>添加</button>
      </form>
    </div>
  )
}

export default TodoList