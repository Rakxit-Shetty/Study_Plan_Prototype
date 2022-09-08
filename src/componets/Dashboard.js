import { useState, useEffect } from "react";
import React from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";
export default function Dashboard() {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  console.log(currentUser);

  async function handleLogout() {
    try {
      await logout();
      navigate("/login");
    } catch {
      //setError("Failed to log out")
    }
  }

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">
            Dashbord of <br></br>
            {currentUser.email}
          </h2>
        </Card.Body>
        <div className="w-100 text-center mt-2">
          <Button variant="link">
            <Link to="/study">Study Plan </Link>
          </Button>
          <br></br>
          <Button variant="link" onClick={handleLogout}>
            Log Out
          </Button>
        </div>
      </Card>
      <br></br>
    </>
  );
}
