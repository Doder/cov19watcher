import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import Table from 'react-bootstrap/Table';
import TableRow from '../TableRow';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort, faSortDown, faSortUp } from '@fortawesome/free-solid-svg-icons';
import { sortByColumn } from '../../actions';

import './StatsTable.css';

const sortUp = <FontAwesomeIcon icon={faSortUp} />;
const sortDown = <FontAwesomeIcon icon={faSortDown} />;
const sort = <FontAwesomeIcon icon={faSort} />;

function StatsTable ({stats}) {
    const dispatch = useDispatch();
    const state = useSelector(state => state.covid);

    const handleSortBy = useCallback(column => {
        dispatch(sortByColumn(column));
    }, []);

    return(
        <Table striped bordered hover variant='dark' size='sm'>
            <thead>
                <tr>
                    <th onClick={() => handleSortBy('Date')} className="sortable">
                        Date {state.sort.column === 'Date' ? state.sort.asc ? sortUp : sortDown : sort}
                    </th>
                    <th>Confirmed</th>
                    <th onClick={() => handleSortBy('Active')} className="sortable">
                        Active {state.sort.column === 'Active' ? state.sort.asc ? sortUp : sortDown : sort}
                    </th>
                    <th>Deaths </th>
                    <th>Recovered </th>
                </tr>
            </thead>
            <tbody>
                {
                    stats.map(row => (
                        <TableRow row={row}/>    
                    ))
                }
            </tbody>
        </Table>
    );
}

export default StatsTable;