// cognigen-frontend/src/App.jsx
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Auth/Login.jsx";
import Signup from "./pages/Auth/Signup.jsx";
import Dashboard from "./pages/Dashboard/sample.jsx";

function App() {
  return (
    <>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* private Routes */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Default redirect */}
        <Route path="/" element={<Navigate to="/login" replace />} />

        {/* Catch all unknown routes */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </>
  );
}

export default App;
