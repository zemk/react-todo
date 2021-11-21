import React, {Component} from "react";
import './post-list-item.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faHeart,faStar } from '@fortawesome/free-solid-svg-icons';
export default class PostListItem extends Component {

  render(){
    const {label,onDelete,onToggleLike,onToggleImportant, important,like} =this.props;
    
    let  classNames= 'app-list-item d-flex justify-content-between';
    if(important) {
      classNames += ' important';
    }
    if(like) {
      classNames += ' like';
    }
    return (
      <div className={classNames}>
          <span className='app-list-item-label' onClick={onToggleLike}>
            
            {label}
          </span>
          <div className='d-flex justify-content-center align-items-center'>
            <button type='button'  onClick={onToggleImportant} className='btn-star btn-sm'>
             
              <FontAwesomeIcon icon={faStar} />
            </button>
            <button type='button' onClick={onDelete } className='btn-trash btn-sm'>
              
              <FontAwesomeIcon icon={faTrashAlt} />
            </button >
            
            <FontAwesomeIcon icon={faHeart} />
          </div>

        </div>
      )
  }
}
