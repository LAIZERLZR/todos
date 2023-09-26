import React from 'react';
import trash from '../images/trash.png';
import change from '../images/pencil.png';
import check from '../images/check.png';

interface TaskProps {
  item: {
    title: string;
    desc: string;
    state: boolean;
    id: number;
  };
  index: number;
  changeState: (index: number, type: string) => void;
}

const Task: React.FC<TaskProps> = ({ item, index, changeState }) => {
  return (
    <div key={index} className="todo">
      <div className="todo_name">
        <span>{item.title}</span>
        <div className="todo_panel">
          <img
            onClick={() => changeState(index, 'change')}
            style={{ width: 30 }}
            src={change}
            alt="Edit"
          />
          <img
            onClick={() => changeState(index, 'delete')}
            style={{ width: 30 }}
            src={trash}
            alt="Delete"
          />
        </div>
      </div>
      <div onClick={() => changeState(index, 'state')} className="todo_desc">
        <div>{item.desc}</div>
        <div className="todo_state">
          {item.state && <img style={{ width: 40 }} src={check} alt="Check" />}
        </div>
      </div>
    </div>
  );
};

export default Task;
