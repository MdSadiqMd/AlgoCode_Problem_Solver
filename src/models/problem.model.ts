import mongoose from "mongoose"

const problemSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title of the problem cannot be empty']
    },
    description: {
        type: String,
        required: [true, 'Description of the problem cannot be empty']
    },
    difficulty: {
        type: String,
        enum: ['easy', 'medium', 'hard'],
        required: [true, 'Difficulty tag of the problem cannot be empty'],
        default: 'easy'
    },
    testcases: [
        {
            input: {
                type: String,
                required: true,
            },
            output: {
                type: String,
                required: true,
            }
        }
    ],
    editorial: {
        type: String,
    }
})

const Problem = mongoose.model('Problem', problemSchema);
module.exports = Problem;