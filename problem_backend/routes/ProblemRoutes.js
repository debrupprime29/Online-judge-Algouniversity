import express from 'express';
import Problem from '../models/Problem.js';

const router = express.Router();

// Create
router.post('/', async (req, res) => {
  const { problemId } = req.body;
  try {
    const problem = new Problem({ problemId });
    await problem.save();
    res.status(201).json(problem);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Read All
router.get('/', async (req, res) => {
  try {
    const problems = await Problem.find();
    res.json(problems);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update
router.put('/:id', async (req, res) => {
  try {
    const updatedProblem = await Problem.findByIdAndUpdate(req.params.id, { problemId: req.body.problemId }, { new: true });
    res.json(updatedProblem);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete
router.delete('/:id', async (req, res) => {
  try {
    await Problem.findByIdAndDelete(req.params.id);
    res.json({ message: 'Deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
