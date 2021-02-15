function TableRow ({row}) {
    const [year, month, day] = row.Date.split('T')[0].split('-');
    const date = `${day}/${month}/${year}`;
    return(
        <tr>
            <td>{date}</td>
            <td>{row.Confirmed}</td>
            <td>{row.Active}</td>
            <td>{row.Deaths}</td>
            <td>{row.Recovered}</td>
        </tr>
    );
}

export default TableRow;