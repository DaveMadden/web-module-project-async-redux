import { FETCH_START, FETCH_SUCCESS, FETCH_ERROR } from "../actions/actions";

const initialState = {
    image: "https://images.dog.ceo/breeds/african/n02116738_2327.jpg",
    isFetching: false,
    error: ""
}

export const reducer = (state = initialState, action) => {
    switch (action.type){
        case FETCH_START:
            return ({
                ...state,
                image: "",
                isFetching: true,
                error: ""
            })
        case FETCH_SUCCESS:
            return ({
                ...state,
                image: action.payload,
                isFetching: false,
                error: ""
            })
        case FETCH_ERROR:
            console.log("fetcherror case")
            return ({
                ...state,
                image: "https://www.knijff.nl/wp-content/uploads/2018/01/Grumpy-cat.jpg",
                error: action.payload
            })
        default:
            return state;
    }
}