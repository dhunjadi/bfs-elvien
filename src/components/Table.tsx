import React, {useState} from 'react';

import {Country, Gymnast} from '../types';
import {formatDate} from '../utils';
import StatusBar from './StatusBar';
import ArrowUpIcon from '../assets/ArrowUpIcon.svg';
import ArrowDownIcon from '../assets/ArrowDownIcon.svg';

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

    const getActionText = (status: string): string => {
        if (status === 'applied') return 'Request removal';
        if (status === 'awaiting response') return 'Cancel';
        return '';
    };

    return (
        <table className="c-table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Discipline</th>
                    <th>Program</th>
                    <th>Category</th>
                    <th>Team</th>
                    <th>Status</th>
                    <th>Date</th>
                    <th></th>
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
                            <td>{formatDate(item.date, true)}</td>
                            <td className="c-table__actionsCol">
                                <a>{getActionText(item.status)}</a>
                                <button onClick={() => handleExpandRow(index)}>
                                    <img src={expandedRow === index ? ArrowUpIcon : ArrowDownIcon} alt="arrow icon" />
                                </button>
                            </td>
                        </tr>
                        {expandedRow === index && (
                            <tr className={index % 2 === 0 ? 'even' : 'odd'}>
                                <td colSpan={2}></td>
                                <td colSpan={6}>
                                    <div>
                                        <strong>Date of Birth: </strong> <small>{formatDate(item.dateOfBirth, false)}</small>
                                    </div>
                                    <div>
                                        <strong>Phone Number: </strong> <small>{item.phone}</small>
                                    </div>
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
