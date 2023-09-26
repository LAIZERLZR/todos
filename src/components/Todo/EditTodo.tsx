import React, { useState } from 'react';
import close from '../images/close.png';

interface EditTodoProps {
  //Этот интерфейс для setModalEditTodo написал GPT
  setModalEditTodo: React.Dispatch<React.SetStateAction<boolean>>;
  currentTodo: {
    id: number;
    title: string;
    desc: string;
  };
  changeState: (index: number, type: string, valueTitle: string, valueDesc: string) => void;
}

const EditTodo: React.FC<EditTodoProps> = ({ setModalEditTodo, currentTodo, changeState }) => {
  const [titleValue, setTitleValue] = useState<string>(currentTodo.title);
  const [descValue, setDescValue] = useState<string>(currentTodo.desc);

  return (
    <div className="modal_edit_todo">
      <div style={{ position: 'relative' }}>
        <div
          onClick={() => setModalEditTodo(false)}
          style={{ position: 'absolute', left: 365, cursor: 'pointer' }}>
          <img src={close} alt="Close" style={{ width: 25, height: 25 }} />
        </div>
        <div className="edit_todo">
          <h4>Заголовок</h4>
          <input
            value={titleValue}
            onChange={(e) => setTitleValue(e.target.value)}
            type="text"
            placeholder="title"
          />
        </div>
        <div className="edit_todo">
          <h4>Описание</h4>
          <input
            value={descValue}
            onChange={(e) => setDescValue(e.target.value)}
            type="text"
            placeholder="description"
          />
        </div>
        <div
          onClick={() => changeState(currentTodo.id, 'changeTwo', titleValue, descValue)}
          className="edit_todo">
          <button>Сохранить</button>
        </div>
      </div>
    </div>
  );
};

export default EditTodo;
