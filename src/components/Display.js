import { useContext, useEffect, useState  } from "react"
import { Context as BlogContext } from '../context/BlogContext';

// Tier 2 component. Still it is able to get state value because Provider wraps the ShowBlogScreen component.
const Display = () => {
    const context = useContext(BlogContext);
    const [message, setMessage] = useState('');

    useEffect(() => {
        if (message) {
            alert(message);
        }
    }, [message]);

    const onClick = () => {
        context.addTodo(() => {
            setMessage('6th todo added.');
        })
    }

    const handleDelete = (id) => {
        context.deleteTodo(id);
    } 
    
    return (
        <div>
            {
                context.state.map((todo, index) => <div key={index}>
                    <div>{todo.id}</div>
                    <div>{todo.title}</div>
                    <div>{todo.completed.toString()}</div>
                    <div><button onClick={() => handleDelete(todo.id)}>Delete</button></div>
                </div>)
            }

            <button onClick={onClick}>Add 6th todo</button>
        </div>
    )
}

export default Display