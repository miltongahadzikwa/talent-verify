import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AddEmployee from './pages/AddEmployee';
import BulkUpload from './pages/BulkUpload';
import CompanyList from './pages/CompanyList';
import EmployeeForm from './pages/EmployeeForm';
import EmployeeList from './pages/EmployeeList';
import NotFound from './pages/NotFound';
import CreateAddEmployee from './components/CreateAddEmployee';
import CreateEmployeeList from './components/CreateEmployeeList';
import SearchForms from './components/SearchForms';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-employee" element={<AddEmployee />} />
          <Route path="/bulk-upload" element={<BulkUpload />} />
          <Route path="/company-list" element={<CompanyList />} />
          <Route path="/employee-form" element={<EmployeeForm />} />
          <Route path="/employee-list" element={<EmployeeList />} />
          <Route path="/create-add-employee" element={<CreateAddEmployee />} />
          <Route path="/create-employee-list" element={<CreateEmployeeList />} />
          <Route path="/search-forms" element={<SearchForms />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
