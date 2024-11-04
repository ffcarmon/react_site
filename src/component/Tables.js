import React, { useState } from 'react';
import Dashboard from '../Dashboard';
import './Tables.css';
import { Input, Table } from "antd";
import studentsData from './studentsData';
import moment from 'moment';

function Tables() {
    const studentColumns = [
        {
            title: 'First Name',
            dataIndex: 'firstName',
            sorter: (a, b) => a.firstName.localeCompare(b.firstName),
        },
        {
            title: 'Last Name',
            dataIndex: 'lastName',
            sorter: (a, b) => a.lastName.localeCompare(b.lastName),
        },
        {
            title: 'Gender',
            dataIndex: 'gender',
            filters: [
                { text: 'Male', value: 'Male' },
                { text: 'Female', value: 'Female' },
            ],
            onFilter: (value, record) => record.gender.includes(value),
            sorter: (a, b) => a.gender.localeCompare(b.gender),
        },
        {
            title: 'Date of Birth',
            dataIndex: 'dob',
            sorter: (a, b) => new Date(a.dob) - new Date(b.dob),
            render: (dob) => moment(dob).format('YYYY/MM/DD'),
        },
        {
            title: 'Marks',
            dataIndex: 'marks',
            sorter: (a, b) => a.marks - b.marks,
            sortDirections: ['descend', 'ascend'],
        },
        {
            title: 'Country',
            dataIndex: 'country',
            sorter: (a, b) => a.country.localeCompare(b.country),
        },
    ];

    const [tableData, setTableData] = useState(studentsData);

    function searchTable(searchKey) {
        const filteredData = studentsData.filter(student => {
            return Object.values(student).some(value =>
                typeof value === 'string' && value.toLowerCase().includes(searchKey.toLowerCase())
            );
        });
        setTableData(filteredData);
    }

    return (
        <Dashboard>
            <div className="tables">
                <h3>Antd Tables</h3>
                <button onClick={() => console.log('Hello World! from Tables')}>Click Me</button>
                <Input
                    placeholder="Search students"
                    onChange={(e) => searchTable(e.target.value)}
                />
                <Table
                    columns={studentColumns}
                    dataSource={tableData}
                    pagination={{ pageSize: 8 }}
                />
            </div>
        </Dashboard>
    );
}

export default Tables;
