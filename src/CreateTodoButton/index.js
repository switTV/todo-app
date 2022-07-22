import react from "react";

function CreateTodoButton(props){
    const onComplete = () => {
        alert("ya completaste el todo " + props.text)
    }

    return(
        <button className="CreateTodoButton" onClick={onComplete}>+</button>
    );
}

export { CreateTodoButton };