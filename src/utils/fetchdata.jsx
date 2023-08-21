import axios from 'axios';

async function fetchData(setData) {
    try {
        const response = await axios.get('https://api.slingacademy.com/v1/sample-data/photos?offset=5&limit=20');
        setData(response.data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

export default fetchData;