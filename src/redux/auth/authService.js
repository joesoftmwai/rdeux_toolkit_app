import axios from 'axios';

const API_URL  = `${process.env.REACT_APP_API_BASE_URL}/register`;

// Sign up User
const signup = async (user) => {
    const response = await axios.post(API_URL, user)
    if (response.data) {
        console.log('response', response);
    }
    return response.data;
}

const authService = { 
    signup,
}

export default authService;