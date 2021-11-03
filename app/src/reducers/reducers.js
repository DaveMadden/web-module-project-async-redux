import { FETCH_START } from "../actions/actions";

const initialState = {

}

export const reducer = (state = initialState, action) => {
    switch (action.type){
        case FETCH_START:
            return state;
        default:
            return state;
    }
}