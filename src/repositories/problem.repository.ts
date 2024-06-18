const { Problem } = require('../models/index');

interface ProblemData {
    title: string;
    description: string;
    difficulty?: string;
    testCases?: any[];
}

const ProblemRepository = {
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
            console.log(error);
            throw error;
        }
    }
};

module.exports = ProblemRepository;