export const LOG_IN = 'LOG_IN'
export const LOG_OUT = 'LOG_OUT'
export const AUTHENTICATE = 'AUTHENTICATE'
export const ERROR_VALID = 'ERROR_VALID'

export const GET_FIND = 'GET_FIND'
export const GET_FIND_SUCCESS = 'GET_FIND_SUCCESS'
export const GET_FIND_NULL = 'GET_FIND_NULL'

export const GET_RANDOM = 'GET_RANDOM'
export const GET_RANDOM_SUCCESS = 'GET_RANDOM_SUCCESS'

export const GET_TRENDING = 'GET_TRENDING'
export const GET_TRENDING_SUCCESS = 'GET_TRENDING_SUCCESS'

export const GET_TVSHOW = 'GET_TVSHOW'
export const GET_TVSHOW_SUCCESSS = 'GET_TVSHOW_SUCCESS'

export const logIN = () => ({type: LOG_IN})
export const logOut = () => ({type: LOG_OUT})
export const authenticate = (username, password) => ({
    type: AUTHENTICATE,
    payload: { username, password }
})

export const getFind = (word) => ({
    type: GET_FIND,
    payload: word
})
export const nullFind = () => ({type: GET_FIND_NULL})
export const getRandom = () => ({type: GET_RANDOM})
export const getTVShow = () => ({type: GET_TVSHOW})
export const getTrending = () => ({type: GET_TRENDING})
