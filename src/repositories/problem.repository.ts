const { Problem } = require('../models/index');
const NotFound = require('../errors/notfound.error')

interface ProblemData {
    title: string;
    description: string;
    difficulty?: string;
    testCases?: any[];
}

class ProblemRepository {
    async createProblem(problemData: ProblemData) {
        try {
            const problem = await Problem.create({
                title: problemData.title,
                description: problemData.description,
                difficulty: problemData.difficulty ?? "easy",
                testCases: problemData.testCases ?? []
            });
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
};

module.exports = ProblemRepository;