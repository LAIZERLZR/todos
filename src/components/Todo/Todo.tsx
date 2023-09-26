import React, { useState } from 'react';
import Task from './Task';
import EditTodo from './EditTodo';
import plus from '../images/plus.png';
import CreateTodo from './CreateTodo';

interface TodoItem {
  title: string;
  desc: string;
  state: boolean;
  id: number;
}

enum ModifiedType {
  Create = 'create'
  
}

const Todo: React.FC = () => {
  const [modalEditTodo, setModalEditTodo] = useState<boolean>(false);
  const [modalCreateTodo, setModalCreateTodo] = useState<boolean>(false);
  const [currentTodo, setCurrentTodo] = useState<TodoItem | undefined>();

  const [arr, setArr] = useState<TodoItem[]>([
    { title: 'Заголовок 1', desc: 'Описание', state: false, id: 0 },
    { title: 'Заголовок 2', desc: 'Описание', state: true, id: 1 },
    { title: 'Заголовок 3', desc: 'Описание', state: false, id: 2 },
    { title: 'Заголовок 4', desc: 'Описание', state: false, id: 3 },
    { title: 'Заголовок 5', desc: 'Описание', state: false, id: 4 },
    { title: 'Заголовок 6', desc: 'Описание', state: true, id: 5 },
  ]);

  let num = 0
  function uniqId (){
    num += 1
    return Number(`${Date.now()}${num}`)
  }

  const changeState = (index: number, type: string, valueTitle?: string, valueDesc?: string) => {
    let copy = [...arr];
    if (type === 'state') {
      copy[index].state = !copy[index].state;
      setArr(copy);
    } else if (type === 'delete') {
      copy.splice(index, 1);
      setArr(copy);
    } else if (type === 'change') {
      setCurrentTodo(copy[index]);
      setModalEditTodo(true);
    } else if (type === 'changeTwo') {
      let res = copy.find((item) => item.id === index);
      if (res) {
        res.title = valueTitle || '';
        res.desc = valueDesc || '';
        setArr(copy);
        setModalEditTodo(false);
      }
    } else if (type === 'create') {
      copy = [
        ...copy,
        { title: valueTitle || '', desc: valueDesc || '', state: false, id: uniqId() },
      ];
      setArr(copy);
      setModalCreateTodo(false);
    }
  };


  function modifiedTodoList(type: ModifiedType) {
    switch (type) {
      case ModifiedType.Create:
         handleCreateTodo()
    }
  }

  return (
    <div className="todo_container">
      <div onClick={() => setModalCreateTodo(true)} className="todo_title">
        <img src={plus} alt="Add" width={40} height={40} />
      </div>
      <div className="todos">
        {arr.map((item, index) => (
          <Task key={item.id} item={item} index={index} changeState={changeState} />
        ))}
      </div>
      {modalEditTodo && currentTodo && (
        <EditTodo
          setModalEditTodo={setModalEditTodo}
          currentTodo={currentTodo}
          changeState={changeState}
        />
      )}
      {modalCreateTodo && (
        <CreateTodo setModalCreateTodo={setModalCreateTodo} changeState={changeState} />
      )}
    </div>
  );
};

export default Todo;
