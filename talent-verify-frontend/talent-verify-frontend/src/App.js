import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import BulkUpload from './components/BulkUpload';
import EmployeeForm from './components/EmployeeForm';
import CreateEmployeeList from './components/CreateEmployeeList';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bulk-upload" element={<BulkUpload />} />
          <Route path="/employee-form" element={<EmployeeForm />} />
          <Route path="/employee-list" element={<CreateEmployeeList />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

