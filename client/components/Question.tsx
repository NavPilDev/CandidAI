"use client";
import React from "react";
import { useEffect, useState } from "react";
import parse from "html-react-parser";
import { Question } from "@/components/QuestionInterface";

export default function QuestionPage() {
  const [message, setMessage] = useState("Loading...");
  const [question, setQuestion] = useState<Question | null>(null);

  useEffect(() => {
    fetch("http://localhost:8080/api/question/random")
      .then((res) => res.json())
      .then((data) => {
        setQuestion(data.question);
        setMessage("");
      });
  }, []);

  return (
    <div>
      <p>{message}</p>

      {question && (
        <div>
          <h1 className="text-2xl font-bold">{question.title}</h1>
          <div className="text-lg">{parse(question.content)}</div>
        </div>
      )}
    </div>
  );
}
