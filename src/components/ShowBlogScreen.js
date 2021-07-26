import { useContext, useEffect } from 'react';
import { Context as BlogContext } from '../context/BlogContext';
import Display from './Display';

// Provider's Tier 1 Component
const ShowBlogScreen = () => {
    const context = useContext(BlogContext);
    
    // context's attributes:
    // 1) state: reducer's state
    // 2) actions: each curry function invoked only for outer function
    console.log('context: ', context);

    useEffect(() => {
        context.fetchTodo();
    }, []);
    
    console.log('state: ', context.state)

    return (
        <div>
            <Display />
        </div>
    )
}

export default ShowBlogScreen;