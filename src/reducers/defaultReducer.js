
export const toDoState = { 
    data: [{
    item: "Learn about reducers",
    completed: false,
    id: 3892987589
    },
    {
    item: "Remeber how to use reducers",
    completed: false,
    id:133337
    },
    {
    item: "learn how to add to reducer state",
    completed: false,
    id:245678
    }]
};

export const toDoReducer = (state, action) => {
    console.log(state)
 switch(action.type) {
     case "ADD_TODO":
         return {
             ...state,
             data: [...state.data,{
             item: action.input,
             complete:false,
             id: Date.now()}
            ]
            };
     case "REMOVE_ALL":
        return{
            ...state
        };
     case "UPDATE_TODO":
         return {
             ...state,
             editing: !state.editing
         };
    default:
        return state;
    }
};