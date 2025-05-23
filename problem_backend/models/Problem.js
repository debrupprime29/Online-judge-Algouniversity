import mongoose from 'mongoose';

const problemSchema = new mongoose.Schema({
  problemId: {
    type: String,
    required: true,
    unique: true
  }
});

const Problem = mongoose.model('Problem', problemSchema);

export default Problem;
