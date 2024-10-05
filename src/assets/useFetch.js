import { useReducer,useEffect } from "react";
import axios from 'axios';
import { data } from "autoprefixer";
const initialState={
    data:[],
    loading: true,
    error:null,
};

const ACTION ={
    API_REQUEST:'api-request',
    FETCH_DATA:'fetch-data',
    ERROR:"error"
}

function reducer(state,{type,payload}){
    switch (type) {
        case  ACTION.API_REQUEST:
            return {...state,data:[],loading:true}
        case  ACTION.FETCH_DATA:
            return {...state,data: payload.data,loading:false}
        case  ACTION.ERROR:
            return {...state,data:[],error:payload}
            default:
                return state;
}
}
function useFetch(url){
    /* const [data,setData] =  useState([]);
    const [loading, setLoading] = useState(true);
    const  [error, setError] = useState(null);
 */
    const [state,dispatch] = useReducer(reducer,initialState);
    useEffect(() => {
        dispatch({ type: ACTION.API_REQUEST });
        axios.get(url)
            .then(response => {
                dispatch({ type: ACTION.FETCH_DATA, payload: response });
            })
            .catch(error => {
                dispatch({ type: ACTION.ERROR, payload: error });
            });
    }, [url, dispatch]);
    return state;
}
export default useFetch;