// src/components/ProblemDetail.js

import React from 'react';
import { useParams } from 'react-router-dom';

const problems = [
  {
    id: "1",
    title: "Two Sum",
    description: "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
    input: "nums = [2,7,11,15], target = 9",
    output: "[0,1]"
  },
  {
    id: "2",
    title: "Longest Substring Without Repeating Characters",
    description: "Given a string s, find the length of the longest substring without repeating characters.",
    input: "s = 'abcabcbb'",
    output: "3"
  },
  {
    id: "3",
    title: "Regular Expression Matching",
    description: "Implement regular expression matching with support for '.' and '*'.",
    input: "s = 'aa', p = 'a*'",
    output: "true"
  }
];

const ProblemDetail = () => {
  const { id } = useParams();
  const problem = problems.find((p) => p.id === id);

  if (!problem) {
    return <h2>Problem not found</h2>;
  }

  return (
    <div className="problem-detail">
      <h2>{problem.title}</h2>
      <p><strong>Description:</strong> {problem.description}</p>
      <p><strong>Input:</strong> {problem.input}</p>
      <p><strong>Output:</strong> {problem.output}</p>
    </div>
  );
};

export default ProblemDetail;
