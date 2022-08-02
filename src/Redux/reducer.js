
const initial_value = [];

function rootReducer(state = initial_value, action) {
    switch (action.type) {
        case "ADD_Favorite":
            return [...state, action.item];
        case "REMOVE_Favorite":
            return state.filter(element => element.id !== action.item.id);
        

        default:
            return state;
    }
}

export default rootReducer