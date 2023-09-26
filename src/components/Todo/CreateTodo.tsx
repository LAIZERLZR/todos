import React, { useState } from 'react';
import close from '../images/close.png';

interface CreateTodoProps {
  // Опять же я понятия не имею что это такое React.Dispatch<React.SetStateAction<boolean>>;
  setModalCreateTodo: React.Dispatch<React.SetStateAction<boolean>>;
  changeState: (index: number, type: string, valueTitle: string, valueDesc: string) => void;
}

const CreateTodo: React.FC<CreateTodoProps> = ({ setModalCreateTodo, changeState }) => {
  const [titleValue, setTitleValue] = useState<string>('');
  const [descValue, setDescValue] = useState<string>('');

  return (
    <div className="modal_edit_todo">
      <div style={{ position: 'relative' }}>
        <div
          onClick={() => setModalCreateTodo(false)}
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
        <div onClick={() => changeState(0, 'create', titleValue, descValue)} className="edit_todo">
          <button>Сохранить</button>
        </div>
      </div>
    </div>
  );
};

export default CreateTodo;
