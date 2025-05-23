import express from 'express';
import { executeCpp } from '../utils/executeCpp.js';

const router = express.Router();

router.post('/', async (req, res) => {
  const { code } = req.body;

  if (!code) return res.status(400).json({ error: 'Code is required' });

  try {
    const output = await executeCpp(code);
    res.json({ output });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
