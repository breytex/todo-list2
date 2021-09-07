import React from 'react'

type TodoItemProps = {
    description?: string;
    important?: boolean;
}

export default function TodoItem({description = 'A task', important = false}: TodoItemProps) {
    return (
        <div>
            <div>
                <p><span>Description: </span><span>{description}</span></p>
                <p>{important}</p>
            </div>
        </div>
    )
}
