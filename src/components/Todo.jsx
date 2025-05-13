import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addTodo,
  featchTodoData,
  removeItem,
} from '../redux/featurs/Todo/todoSlice';

const Todo = () => {
  const todos = useSelector(state => state.todo?.items);

  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const handleData = () => {
    if (text.trim()) {
      dispatch(addTodo(text));
    }
    setText('');
  };
  const handleDataDelete = id => {
    dispatch(removeItem(id));
  };

  useEffect(() => {
    dispatch(featchTodoData());
  }, [dispatch]);

  return (
    <div className="flex items-center justify-center ">
      <div className="w-[500px] bg-blue-600 p-4 rounded">
        <div>
          <div className="flex space-x-1">
            <input
              type="text"
              name="name"
              id="name"
              onChange={e => setText(e.target.value)}
              className="border border-white rounded p-1 text-white outline-none w-[80%]"
              placeholder="Enter year Task"
            />
            <button
              className="bg-green-500 p-1.5 rounded text-base text-white cursor-pointer"
              onClick={handleData}
            >
              Add Task
            </button>
          </div>
          <div className="mt-[10px]">
            {todos.length > 0 ? (
              todos.map((item, index) => (
                <li
                  key={index}
                  className="flex justify-between w-[97%] mt-[10px]"
                >
                  <span className="text-white text-lg">
                    {item?.title || item?.text}
                  </span>
                  <button
                    className="bg-red-600 p-1.5 rounded text-white cursor-pointer"
                    onClick={() => handleDataDelete(item.id)}
                  >
                    Delete
                  </button>
                </li>
              ))
            ) : (
              <p className="text-white font-medium text-2xl text-center">
                not found task !!
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;
