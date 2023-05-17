export const logIn = (uname) => {
    return {
        type: "SIGN_IN",
        payload: {
            username: uname,
        }
    }
}

export const logOut = () => {
    return {
        type: "SIGN_OUT"
    }
}