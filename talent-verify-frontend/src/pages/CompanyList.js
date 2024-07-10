import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CompanyList = () => {
    const [companies, setCompanies] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/companies/')
            .then((response) => {
                setCompanies(response.data);
            })
            .catch((error) => {
                console.error('There was an error fetching the companies!', error);
            });
    }, []);

    return (
        <div>
            <h2>Company List</h2>
            <ul>
                {companies.map(company => (
                    <li key={company.id}>{company.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default CompanyList;
