// src/components/ProblemList.js

import React from 'react';
import { Link } from 'react-router-dom';

const problems = [
  { id: "1", title: "Two Sum" },
  { id: "2", title: "Longest Substring Without Repeating Characters" },
  { id: "3", title: "Regular Expression Matching" },
];

const ProblemList = () => {
  return (
    <div className="problem-list">
      <h2>Problem List</h2>
      <ul>
        {problems.map((problem) => (
          <li key={problem.id}>
            <Link to={`/problems/${problem.id}`}>{problem.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProblemList;
