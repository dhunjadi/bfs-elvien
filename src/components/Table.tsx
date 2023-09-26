import React, {useState} from 'react';

import {Country, Gymnast} from '../types';
import {formatDate} from '../utils';
import StatusBar from './StatusBar';

interface TableProps {
    gymnastList: Gymnast[];
    countryList: Country[];
}

const Table = ({gymnastList, countryList}: TableProps) => {
    const [expandedRow, setExpandedRow] = useState<number | null>(null);

    const handleExpandRow = (rowIndex: number) => {
        if (expandedRow === rowIndex) {
            setExpandedRow(null);
        } else {
            setExpandedRow(rowIndex);
        }
    };

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Discipline</th>
                    <th>Program</th>
                    <th>Category</th>
                    <th>Team</th>
                    <th>Status</th>
                    <th>Date</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {gymnastList.map((item, index) => (
                    <React.Fragment key={item.id}>
                        <tr>
                            <td>
                                {`${item.firstName} ${item.lastName}`} <br />
                                <small>
                                    {countryList.find((country) => country.code === item.country)?.flag} {item.club}
                                </small>
                            </td>
                            <td>{item.discipline}</td>
                            <td>{item.programName}</td>
                            <td>{item.categoryName}</td>
                            <td>{item.teamName}</td>
                            <td>
                                <StatusBar text={item.status} />
                            </td>
                            <td>{formatDate(item.date)}</td>
                            <td>
                                <button onClick={() => handleExpandRow(index)}>Expand</button>
                            </td>
                        </tr>
                        {expandedRow === index && (
                            <tr>
                                <td colSpan={7}>
                                    <div>Date of Birth: {formatDate(item.dateOfBirth)}</div>
                                    <div>Phone Number: {item.phone}</div>
                                </td>
                            </tr>
                        )}
                    </React.Fragment>
                ))}
            </tbody>
        </table>
    );
};

export default Table;
