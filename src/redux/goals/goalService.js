import axios from 'axios';

const API_URL  = `${process.env.REACT_APP_API_BASE_URL}`;

// add new goal
const addGoal = async (goal, token) => {
    const response = await axios.post(`${API_URL}/add-goal`, goal, {
        headers: {
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}` 
        }
    })
    if (response.data) {
        console.log('response', response);
    }
    return response.data;
}

// get goals
const getGoals = async (token) => {
    const response = await axios.get(`${API_URL}/goals`, {
        headers: {
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}` 
        }
    })
    if (response.data) {
        console.log('response', response);
    }
    return response.data;
}



const goalService = { 
    addGoal,
    getGoals
}

export default goalService;