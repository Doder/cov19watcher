import moment from 'moment';
import { SET_DAY_ONE_ALL_STATUS, SORT_BY_COLUMN } from '../actions/actionTypes';

const INITIAL_STATE = {
    allStatus: [],
    sort: {
        column: '',
        asc: false
    }
};

export default function(state = INITIAL_STATE, action){
    switch (action.type) {
        case SET_DAY_ONE_ALL_STATUS:
            return {...state, allStatus: action.payload}
        case SORT_BY_COLUMN:
            const column = action.payload;
            const newStatus = state.allStatus.map(el => ({...el}));
            const isAsc = state.sort.column === action.payload ? !state.sort.asc : false;
            if(column === 'Date'){
                newStatus.sort((a, b) => isAsc ? 
                moment(a[column]) - moment(b[column]) : 
                moment(b[column]) - moment(a[column])
                );
            }else{
                newStatus.sort((a, b) => isAsc ? a[column] - b[column] : b[column] - a[column]);
            }
            const newSort = {
                column: action.payload,
                asc: isAsc
            }
            return {...state, sort: newSort, allStatus: newStatus}
        default:
            return state;
    }
}