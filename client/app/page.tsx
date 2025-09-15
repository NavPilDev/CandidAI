"use client";
import React from "react";
import { useEffect, useState } from "react";

export default function home() {
  const [message, setMessage] = useState("Loading...");
  const [people, setPeople] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8080/api/home")
      .then((res) => res.json())
      .then((data) => {
        setMessage(data.message);
        setPeople(data.people);
      });
  }, []);

  return (
    <div>
      <h1>{message}</h1>

      {people.map((person, index) => {
        return <div key={index}>{person}</div>;
      })}
    </div>
  );
}
