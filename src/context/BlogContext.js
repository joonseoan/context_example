import createDataContext from "./createDataContext";

import axios from "axios";

const blogReducer = (state, action) => {
  switch (action.type) {
    case "TODO_FETCH":
      return action.payload;
    case "TODO_ADD":
      return [ ...state, action.payload ]
    case "TODO_DELETE":
      return state.filter((blog) => blog.id !== action.payload);
    case "TODO_EDIT":
      const { id, title, content } = action.payload;
      return state.map((blog) =>
        blog.id === id
          ? // change an element when blog.id === id
            action.payload
          : blog
      );
    default:
      return state;
  }
};

const fetchTodo = (dispatch) => {
  return async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/todos");
    // Basically response.data length 200. But we can store just 5 objects.
    dispatch({ type: "TODO_FETCH", payload: response.data.slice(0, 5) });
  };
};

const addTodo= (dispatch) => {
  return async (callback) => {

    dispatch({type: 'TODO_ADD', payload: { id: 6, title: '6th title', completed: false }});

    if (callback) {
      callback();
    }
  };
};

const deleteTodo = (dispatch) => {
  return async (id) => {

    dispatch({
      type: "TODO_DELETE",
      payload: id,
    });
  };
};

// Your assignment.
const editTodo = (dispatch) => {
  return async (editPost, callback) => {

    dispatch({
      type: "TODO_EDIT",
      payload: editPost,
    });
    if (callback) {
      callback();
    }
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { fetchTodo, deleteTodo, editTodo, addTodo },
  []
);
