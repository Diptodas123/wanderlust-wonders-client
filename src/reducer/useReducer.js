export const initialState = false;

export const reducer = (state, action) => {
    switch(action.type) {
        case "USER":
            return action.payload;
        default:
            return state;
    }
}