import { React } from "react";

function TodoCounter({ total, completed }) {
    return(
        <h2 className="TodoCounter">Haz completado {completed} de {total} Todo's</h2>
    )
}

export { TodoCounter };