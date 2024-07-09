import React, { useEffect, useState } from 'react';
import { getEmployees } from '../services/api';

function Home() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getEmployees();
      setEmployees(data);
    }

    fetchData();
  }, []);

  return (
    <div>
      <h1>Welcome to the Talent Verify App</h1>
      <h2>Employee List</h2>
      <ul>
        {employees.map(employee => (
          <li key={employee.id}>
            {employee.first_name} {employee.last_name} - {employee.position}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;

