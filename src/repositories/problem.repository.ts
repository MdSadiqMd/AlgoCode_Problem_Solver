const { Problem } = require('../models/index');
const NotFound = require('../errors/notfound.error')

interface ProblemData {
    title: string;
    description: string;
    difficulty?: string;
    testcases?: any[];
}

class ProblemRepository {
    async createProblem(problemData: ProblemData) {
        try {
            const problem = await Problem.create({
                title: problemData.title,
                description: problemData.description,
                difficulty: problemData.difficulty ?? "easy",
                testcases: problemData.testcases ?? []
            });
            return problem;
        } catch (error) {
            //console.log(error);
            throw error;
        }
    }
    async getProblem(id: String) {
        try {
            const problem = await Problem.findById(id);
            if (!problem) {
                throw new NotFound('Problem', id)
            }
            return problem;
        } catch (error) {
            //console.log(error);
            throw error;
        }
    }
    async getAllProblems() {
        try {
            const problems = await Problem.find({});
            return problems;
        } catch (error) {
            //console.log(error);
            throw error;
        }
    }
    async updateProblem(id: string, updatedData: Partial<ProblemData>) {
        try {
            const updatedProblem = await Problem.findByIdAndUpdate(id, { $set: updatedData }, {
                new: true,
                runValidators: true
            });
            if (!updatedProblem) {
                throw new NotFound('Problem', id);
            }
            return updatedProblem;
        } catch (error) {
            //console.error(error);
            throw error;
        }
    }
    async deleteProblem(id: String) {
        try {
            const deleteProblem = await Problem.findByIdAndDelete(id);
            if (!deleteProblem) {
                throw new NotFound('Problem', id)
            }
            return deleteProblem;
        } catch (error) {
            //console.log(error);
            throw error;
        }
    }
};

module.exports = ProblemRepository;