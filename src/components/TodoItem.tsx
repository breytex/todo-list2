import React from 'react'
import { useParams } from "react-router-dom";

type TodoItemProps = {
    description?: string;
    important?: boolean;
}

export default function TodoItem({description = 'A task', important = false}: TodoItemProps) {
        const params = useParams();
        console.log(params);
        return (
        <div>
            <div>
                <p><span>Description: </span><span>{description}</span></p>
                <p>{important}</p>
            </div>
        </div>
    )
}
