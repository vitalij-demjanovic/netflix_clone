import { apiKey } from "./constans";


const randomNum = () => {
    return Math.floor(Math.random() * (20 - 1 + 1)) + 1;
}
let randomPage = randomNum()

export const serverToken = async () => {
   return fetch(`https://api.themoviedb.org/3/authentication/token/new?api_key=${apiKey}`)
       .then(res => res.json())
       .then(data => data)
       .catch((err) => {
           console.log(err)
       })
}

export const serverLogIn = async (username, password, request_token) => {
   return fetch(`https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=${apiKey}`, {
       headers: {
           'Accept': 'application/json',
           'Content-Type': 'application/json'
       },
       method: 'POST',
       body: JSON.stringify({username, password, request_token})
   })
       .catch((err) => {
       console.log(err)
   })
}

export const serverFind = async (word) => {
    return fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${word}&page=1&include_adult=false`)
        .then(res => res.json())
        .then(data => data)
        .catch((err)=> {
            console.log(err)
        })
}

export const serverRandomMovie = async () => {
    return fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=${randomPage}`)
        .then(res => res.json())
        .then(data => data)
        .catch((err)=> {
            console.log(err)
        })
}

export const serverTVShow = async () => {
    return fetch(
        `https://api.themoviedb.org/3/tv/top_rated?api_key=${apiKey}&page=${randomPage}`)
        .then(res => res.json())
        .then(data => data)
        .catch((err)=> {
            console.log(err)
        })

}

export const serverTrending = async () => {
    return fetch(
        `https://api.themoviedb.org/3/trending/all/day?api_key=${apiKey}`)
        .then(res => res.json())
        .then(data => data)
        .catch((err)=> {
            console.log(err)
        })

}
