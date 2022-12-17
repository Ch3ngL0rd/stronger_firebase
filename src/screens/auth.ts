interface AuthState {
    loading: boolean,
    authenticated: boolean,
}
export const authenticationInitialState = {
    loading: true,
    authenticated: false,
} as AuthState

export const authenticationReducer = (previousState: AuthState, action: { type: string }) => {
    switch (action.type) {
        case 'SIGN_IN':
            return {
                authenticated: true,
                loading: false,
            } as AuthState;
        case "SIGN_OUT":
            return {
                authenticated: false,
                loading: false,
            } as AuthState;
        case "LOADING_FALSE":
            return {
                authenticated: previousState.authenticated,
                loading: false,
            } as AuthState;
        case "LOADING_TRUE":
            return {
                authenticated: previousState.authenticated,
                loading: true,
            } as AuthState;
    }
    return previousState;
}