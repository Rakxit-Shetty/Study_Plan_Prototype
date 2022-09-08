import React from "react";
import { Button, Card, Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "../App";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
export default function Use() {
  //    let enroled;
  const [loading, setLoading] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newLimit, setNewLimit] = useState(0);
  const [newCount, setNewCount] = useState(1);
  const [newSubject, setNewSbuject] = useState(0);
  const [newDatestart, setNewDatestart] = useState("");
  const [newDateend, setNewDateend] = useState("");

  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  async function handleLogout() {
    try {
      await logout();
      navigate("/login");
    } catch(err) {
      console.log(err)
    }
  }

  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users");



  const createUser = async () => {
    await addDoc(usersCollectionRef, {
      name: newTitle,
      subject: newSubject,
      limit: Number(newLimit),
      count: newCount,
      Start_date: newDatestart,
      End_date: newDateend,
    });
    window.location.reload(true);
  };

  const updateUser = async (id, count, limit) => {
    if (count < limit) {
      const userDoc = doc(db, "users", id);
      const newFields = { count: count + 1 };
      await updateDoc(userDoc, newFields);
      window.location.reload(true);
    } else {
      alert("Study Group full");
    }
  };

  const deleteUser = async (id) => {
    const userDoc = doc(db, "users", id);
    await deleteDoc(userDoc);
    window.location.reload(true);
  };

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();
  }, []);

  return (
    <div>
      <div>
        <>
         <div className="mt-2">   
          <Card>
         
            <Card.Body>
              <h2 className="text-center mb-3">Create study group</h2>
              <Form>
                <Form.Group id="text">
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    required
                    placeholder="Title..."
                    onChange={(event) => {
                      setNewTitle(event.target.value);
                    }}
                  />
                </Form.Group>

                <Form.Group id="text">
                  <Form.Label>subject</Form.Label>
                  <Form.Control
                    placeholder="Subject..."
                    onChange={(event) => {
                      setNewSbuject(event.target.value);
                    }}
                    required  />
                </Form.Group>

                <Form.Group id="Student limit">
                  <Form.Label>Student limit</Form.Label>
                  <Form.Control
                   
                    type="number"
                    placeholder="Student Limit..."
                    onChange={(event) => {
                      setNewLimit(event.target.value);
                    }}
                    required />
                </Form.Group>

                <Form.Group id="Student limit">
                  <Form.Label>Start date</Form.Label>
                  <Form.Control
                   
                    type="date"
                    placeholder="date"
                    onChange={(event) => {
                       let userDate= event.target.value;
                        //var ToDate=new Date();
                        
                        if(new Date(userDate).getTime< Date.now()){
                            alert("the Date must be Greater or equal to Todays date")
                            return false;
                        }
                        else{
                      setNewDatestart(event.target.value);
                        }
                    }}
                    required/>
                </Form.Group>

                <Form.Group id="Student limit">
                  <Form.Label>End date</Form.Label>
                  <Form.Control
                   
                    type="date"
                    placeholder="date"
                    onChange={(event) => {

                        let userDate= event.target.value;
                        console.log(event.target.value);
                        var ToDate=new Date();
                        if(new Date(userDate).getTime<=ToDate.getTime()){
                            alert("the Date must be Greater or equal to Todays date")
                            //return false;
                        }
                        else{
                            console.log(ToDate)
                      setNewDateend(event.target.value);
                        }
                    }}
                    required />
                </Form.Group>

                <br></br>
                <Button text="submit" className="w-100" onClick={createUser}>
                  Create Group study plan
                </Button>
              </Form>
            </Card.Body>
            <Button variant="link" onClick={handleLogout}>
            Log Out
          </Button>
          </Card>
          </div>
        </>

        <br></br>

        {users.map((user) => {
          return (
            <div>
              <div>
                {" "}
                <h1>
                  Title:{"              "} {user.name}
                </h1>
                <h1>
                  Student limit:{"      "} {user.limit}
                </h1>
                <h1>
                  Student Enroled:{"    "}
                  {user.count}
                </h1>
                <h1>
                  Subject:{"            "} {user.subject}
                </h1>
                <h1>
                  Start Date:{"         "} {user.Start_date}
                </h1>
                <h1>
                  End Date:{"           "} {user.End_date}
                </h1>
                <Button
                  text="submit"
                  className="w-100"
                  onClick={() => {
                    updateUser(user.id, user.count, user.limit);
                  }}
                >
                  {" "}
                  Be a part
                </Button>
                <Button
                  text="submit"
                  className="w-100 mt-2"
                  onClick={() => {
                    deleteUser(user.id);
                  }}
                >
                  {" "}
                  Delete Session
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
