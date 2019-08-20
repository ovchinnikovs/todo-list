import React, { useState } from 'react'
import './TodoList.css'
import ListItem from '../ListItem/index'
import Button from '../Button/index'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';


function TodoList() {
  const [inputValue, setInputValue] = useState('');
  const [exampleList, setExampleList] = useState(['React', 'Redux']);

  const handleRemoveItem = (indexItem) => {
    
    setExampleList(exampleList.filter((_item, index) => index !== indexItem));
  };

    return (
      <>
        <div className="content-form">
          <div className="text">
            <div className="title">Welcome!</div>
            <div>To get started, add some items to your list:</div>
          </div>

          <form className="form" autoComplete="on">
            <input value={inputValue} onChange={(e) => setInputValue(e.target.value)}
              type="text" className="input" name="todo-item" aria-label="Todo item description"
              placeholder="I want to do..."
            />
            
            <Button type="submit" className="btn btn-orange" onClick={(e) => setInputValue('') ||
              e.preventDefault() || setExampleList([...exampleList, inputValue])} disabled={!inputValue}
              title={<FontAwesomeIcon icon={faPlus} size="sm" />}
            />
          </form>
        </div>

        <div className="list">
        {
          exampleList.map((item, index) =>
            <ListItem key={index} item={item} index={index} handleRemoveItem={handleRemoveItem} />
         )
        }
        </div>
      </>
    );
}

export default TodoList;
