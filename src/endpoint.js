
const apiKey = '3c3865de';
const apiUrl = `http://www.omdbapi.com/?apikey=${apiKey}`;


const endpoints = {
    Movie: {
       Movielist: (search,page) => `${apiUrl}&s=${search}&page=${page}`
    },
    
}

export default endpoints