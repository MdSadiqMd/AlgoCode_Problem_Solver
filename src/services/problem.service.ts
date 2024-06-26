const { markdownSanitizer } = require('../utils/index')

interface ProblemData {
    title: string;
    description: string;
    difficulty?: string;
    testCases?: any[];
}

interface ProblemRepository {
    createProblem(problemData: ProblemData): Promise<any>;
    getAllProblems(): Promise<any[]>;
    getProblem(problemId: string): Promise<any>;
    updateProblem(problemId: string, updatedData: Partial<ProblemData>): Promise<any>;
    deleteProblem(problemId: string): Promise<any>;
}

class ProblemService {
    private problemRepository: ProblemRepository;

    constructor(problemRepository: ProblemRepository) {
        this.problemRepository = problemRepository;
    }

    // We don't need try catch as if any error occurs it propagates to the top as the value returns
    async createProblem(problemData: ProblemData): Promise<any> {
        problemData.description = markdownSanitizer(problemData.description);
        const problem = await this.problemRepository.createProblem(problemData);
        return problem;
    }

    async getAllProblems(): Promise<any[]> {
        const problems = await this.problemRepository.getAllProblems();
        return problems;
    }

    async getProblem(problemId: string): Promise<any> {
        const problem = await this.problemRepository.getProblem(problemId);
        return problem;
    }

    async updateProblem(problemId: string, updatedData: Partial<ProblemData>): Promise<any> {
        if (updatedData.description) {
            updatedData.description = markdownSanitizer(updatedData.description);
        }
        const problem = await this.problemRepository.updateProblem(problemId, updatedData);
        return problem;
    }

    async deleteProblem(problemId: string): Promise<any> {
        const problem = await this.problemRepository.deleteProblem(problemId);
        return problem;
    }
}

module.exports = ProblemService