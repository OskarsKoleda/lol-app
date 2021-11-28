export default {
    async login(context, payload) {
        const key = process.env.VUE_APP_FIREBASE_API_KEY;
        const response = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${key}`, {
            method: 'POST',
            body: JSON.stringify({
                email: payload.email,
                password: payload.password,
                returnSecureToken: true,
            })
        });

        const responseData = await response.json();

        if (!response.ok) {
            console.log(responseData);
            const error = new Error(responseData.message || 'Failed to login. Check your login data.')
            throw error;
        }
        context.commit('setUser', {
            token: responseData.idToken,
            userId: responseData.localId,
            tokenExpiration: responseData.expiresIn
        });
    },
    async signup(context, payload) {
        const key = process.env.VUE_APP_FIREBASE_API_KEY;
        const response = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${key}`, {
            method: 'POST',
            body: JSON.stringify({
                email: payload.email,
                password: payload.password,
                returnSecureToken: true,
            })
        });

        const responseData = await response.json();

        if (!response.ok) {
            console.log(responseData);
            const error = new Error(responseData.message || 'Failed to authenticate. Check your login data.')
            throw error;
        };

        context.commit('setUser', {
            token: responseData.idToken,
            userId: responseData.localId,
            tokenExpiration: responseData.expiresIn
        });
    },
    auth(context) {

    },
    logout(context) {
        context.commit('setUser', {
            token: null,
            userId: null,
            tokenExpiration: null,
        });
    }
};