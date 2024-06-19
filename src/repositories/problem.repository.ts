const { Problem } = require('../models/index');
const NotFound = require('../errors/notfound.error');
const logger = require('../config/logger.config');

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
            logger.error('Error creating problem', error);
            throw error;
        }
    }

    async getProblem(id: string) {
        try {
            const problem = await Problem.findById(id);
            if (!problem) {
                logger.warn(`Problem with ID: ${id} not found`);
                throw new NotFound('Problem', id);
            }
            return problem;
        } catch (error) {
            logger.error(`Error retrieving problem with ID: ${id}`, error);
            throw error;
        }
    }

    async getAllProblems() {
        try {
            const problems = await Problem.find({});
            return problems;
        } catch (error) {
            logger.error('Error retrieving all problems', error);
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
                logger.warn(`Problem with ID: ${id} not found for update`);
                throw new NotFound('Problem', id);
            }
            return updatedProblem;
        } catch (error) {
            logger.error(`Error updating problem with ID: ${id}`, error);
            throw error;
        }
    }

    async deleteProblem(id: string) {
        try {
            const deleteProblem = await Problem.findByIdAndDelete(id);
            if (!deleteProblem) {
                logger.warn(`Problem with ID: ${id} not found for deletion`);
                throw new NotFound('Problem', id);
            }
            return deleteProblem;
        } catch (error) {
            logger.error(`Error deleting problem with ID: ${id}`, error);
            throw error;
        }
    }
};

module.exports = ProblemRepository;