import { React } from "react";

function TodoList(props){
    return(
        <section className="ContainerTodoList">
            <ul className="TodoList">
                {props.children}
            </ul>
        </section>
    );
}

export { TodoList};