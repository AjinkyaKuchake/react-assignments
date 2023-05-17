const initialState = {
    isSignedIn: false,
    username: "",
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SIGN_IN":
            return {
                ...state,
                isSignedIn: true,
                username: action.payload.username,
            };
        case "SIGN_OUT":
            return {
                ...state,
                isSignedIn: false,
            };
        default:
            return state;
    }
}

export default authReducer;