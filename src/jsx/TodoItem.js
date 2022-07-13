import { react } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'



function TodoItem(props) {
    const onComplete = () => {
        alert("ya completaste el todo " + props.text)
    }

    const onDelete = () => {
        alert("ya eliminaste el todo " + props.text)
    }
    
    return(
        <li className="TodoItem">
            <span className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`} onClick = {onComplete}>
                <FontAwesomeIcon icon={faCheck}/>
            </span>

            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
                {props.text}
            </p>
            
            <span className="Icon Icon-delete" onClick={onDelete}>
                <FontAwesomeIcon icon={faTrash}/>
            </span>
        </li>
    )
}

export { TodoItem }