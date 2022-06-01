import axios from 'axios';

const API_URL  = `${process.env.REACT_APP_API_BASE_URL}`;

// Sign up User
const signup = async (user) => {
    const response = await axios.post(`${API_URL}/register`, user, {
        headers: {
            'Accept': 'application/json'
        }
    })
    if (response.data) {
        console.log('response', response);
    }
    return response.data;
}

// Sign in User
const signin = async (user) => {
    const response = await axios.post(`${API_URL}/login`, user, {
        headers: {
            'Accept': 'application/json'
        }
    })
    if (response.data) {
        console.log('response', response);
    }
    return response.data;
}


// signout
const signout = async (token) => {
    const response = await axios.post(`${API_URL}/logout`, {}, {
        headers: {
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`, 
        }
    })
    if (response.data) {
        console.log('response', response);
    }
    return response.data;
}

const authService = { 
    signup,
    signin,
    signout
}

export default authService;