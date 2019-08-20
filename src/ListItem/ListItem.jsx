import React, { useState } from 'react'
import './ListItem.css'
import Button from '../Button/index'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';


function ListItem({ item, index, handleRemoveItem }) {

  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className={`todoItem ${isChecked ? 'opacity' : ''}`}>
      <div className="inputItem" onClick={() => setIsChecked(!isChecked)}>
        <input className="checkbox" type="checkbox" onClick={() =>
          setIsChecked(!isChecked)} checked={isChecked}
        />
        <div className='checkbox-state'></div>

        <span>{item}</span>
      </div>
      <div className="remove-btn">
        <Button className="btn btn-red" onClick={() => handleRemoveItem(index)}
          title={<FontAwesomeIcon icon={faTrashAlt} size="sm" />}
        />
      </div>
    </div>
  )
}

export default ListItem;
