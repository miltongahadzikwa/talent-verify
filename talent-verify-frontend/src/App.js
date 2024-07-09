import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AddEmployee from './pages/AddEmployee';
import BulkUpload from './pages/BulkUpload';
import EmployeeList from './pages/CreateEmployeeList';
import CompanyList from './pages/CompanyList';
import EmployeeForm from './pages/EmployeeForm';
import NotFound from './pages/SearchForms';
import SearchForms from './components/SearchForms';

const App = () => {
    return (
        <Router>
            <div>
                <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/employees" element={<EmployeeList />} />
                <Route path="/companies" element={<CompanyList />} />
                <Route path="/employees/new" element={<EmployeeForm />} />
                <Route path="/employees/:id" element={<EmployeeForm />} />  {/* Add route for editing employee */}
                <Route path="/bulk-upload" element={<BulkUpload />} />
                <Route path="/search-forms" element={<SearchForms />} />
               <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
