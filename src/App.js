//import { useState, useEffect } from "react";
//import { getFirestore } from "@firebase/firestore";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { AuthProvider } from "./context/AuthContext";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import Signup from "./componets/Signup";
import Login from "./componets/Login";
import Dashboard from "./componets/Dashboard";
import Use from "./componets/Use";


const firebaseConfig = {
  apiKey: "AIzaSyADUaTNwEkUQysTFefKxP7qjemKpukSFMI",
  authDomain: "study-plan-9b81f.firebaseapp.com",
  projectId: "study-plan-9b81f",
  storageBucket: "study-plan-9b81f.appspot.com",
  messagingSenderId: "1044708559391",
  appId: "1:1044708559391:web:a8c4fad867a3aab2e9232a",
  measurementId: "G-V05BVVLKCP",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
export const auth = firebaseApp.auth();
export const db = firebaseApp.firestore();
function App() {
  return (
    <>
    <div className="bg-dark">
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <Router>
          <AuthProvider>
            <Routes>
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/signup" element={<Signup />} />
              <Route exact path="/home" element={<Dashboard />} />
              <Route exact path="/study" element={<Use />} />
            </Routes>
          </AuthProvider>
        </Router>
      </Container>

      </div>
    </>
  );
}
export default App;
