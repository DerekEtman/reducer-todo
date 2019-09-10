
export const toDoState = {
    item: "Learn about reducers",
    completed: false,
    id: 3892987589
};

export const toDoReducer = (state, action) => {
 switch(action.type) {
     case "UPDATE_TODO":
         return {
             ...state,
             editing: !state.editing
         };
    default:
        return state;
    }
};