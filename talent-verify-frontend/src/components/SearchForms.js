import React, { useState } from 'react';
import axios from 'axios';

function SearchForm() {
    const [criteria, setCriteria] = useState({
        name: '',
        employer: '',
        position: '',
        department: '',
        year_started: '',
        year_left: ''
    });

    const [results, setResults] = useState([]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCriteria({ ...criteria, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.get('/api/employees/search/', { params: criteria })
            .then(response => {
                setResults(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" value={criteria.name} onChange={handleChange} placeholder="Name" />
                <input type="text" name="employer" value={criteria.employer} onChange={handleChange} placeholder="Employer" />
                <input type="text" name="position" value={criteria.position} onChange={handleChange} placeholder="Position" />
                <input type="text" name="department" value={criteria.department} onChange={handleChange} placeholder="Department" />
                <input type="text" name="year_started" value={criteria.year_started} onChange={handleChange} placeholder="Year Started" />
                <input type="text" name="year_left" value={criteria.year_left} onChange={handleChange} placeholder="Year Left" />
                <button type="submit">Search</button>
            </form>
            <div>
                {results.map(result => (
                    <div key={result.id}>
                        <h3>{result.name}</h3>
                        <p>{result.role} at {result.employer}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SearchForm;
