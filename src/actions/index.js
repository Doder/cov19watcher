import api from '../api';
import { SET_DAY_ONE_ALL_STATUS, SORT_BY_COLUMN } from './actionTypes';

export function getDayOneAllStatus(country) {
    return (dispatch) => {
        api.getDayOneAllStatus(country)
        .then(response => {
            dispatch({
                type: SET_DAY_ONE_ALL_STATUS,
                payload: response.data
            });
        })
        .catch(error => console.log(error));
    }
};

export function sortByColumn(column) {
    return {
        type: SORT_BY_COLUMN,
        payload: column
    };
}