import axios from "axios";

export const FETCH_START = "FETCH_START";
export const FETCH_ERROR = "FETCH_ERROR";
export const FETCH_SUCCESS = "FETCH_SUCCESS";

export const fetchStart = () => {
    return ({type: FETCH_START});
}
export const fetchSuccess = (dog) => {
    return ({type: FETCH_SUCCESS, payload:dog});
}
export const fetchError = (err) => {
    return ({type: FETCH_ERROR, payload:err});
}

export const getDog = () => {
    return (dispatch) => {
        dispatch(fetchStart());

        axios.get('https://dog.ceo/api/breeds/image/random')
            .then(resp=>{
                dispatch(fetchSuccess(resp.data.message));
            })
            .catch(err=>{
                console.error(err);
                dispatch(fetchError(err));
            })
    }
}