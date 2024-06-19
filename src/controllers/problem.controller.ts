import { NextFunction, Request, Response } from "express";
const { ProblemService } = require('../services/index');
const { ProblemRepository } = require('../repositories/index');
const StatusCodes = require('http-status-codes')

const problemService = new ProblemService(new ProblemRepository());

function pingProblemController(req: Request, res: Response) {
  return res.json({ message: "pong problem controller" });
}

async function addProblem(req: Request, res: Response, next: NextFunction) {
  try {
    //testcase debug
    const newProblem = await problemService.createProblem(req.body);
    return res.status(StatusCodes.CREATED).json({
      success: true,
      message: 'New Problem Created Succesfully',
      error: {},
      data: newProblem
    })
  } catch (error) {
    next(error);
  }
}

async function getProblem(req: Request, res: Response, next: NextFunction) {
  try {
    const problem = await problemService.getProblem(req.params.id);
    return res.status(StatusCodes.OK).json({
      success: "true",
      message: "Problem Fetched",
      error: {},
      data: problem
    })
  } catch (error) {
    next(error);
  }
}

async function getProblems(req: Request, res: Response, next: NextFunction) {
  try {
    const response = await problemService.getAllProblems();
    return res.status(StatusCodes.OK).json({
      success: "true",
      message: "All Problems Fetched",
      error: {},
      data: response
    })
  } catch (error) {
    next(error);
  }
}

async function updateProblem(req: Request, res: Response, next: NextFunction) {
  try {
    const updatedProblem = await problemService.updateProblem(req.params.id, req.body);
    return res.status(StatusCodes.OK).json({
      success: "true",
      message: "Problem Updated",
      error: {},
      data: updatedProblem
    });
  } catch (error) {
    next(error);
  }
}

async function deleteProblem(req: Request, res: Response, next: NextFunction) {
  try {
    const deleteProblem = await problemService.deleteProblem(req.params.id);
    return res.status(StatusCodes.OK).json({
      success: "true",
      message: "Problem Deleted",
      error: {},
      data: deleteProblem
    })
  } catch (error) {
    next(error);
  }
}

module.exports = {
  pingProblemController,
  addProblem,
  getProblem,
  getProblems,
  updateProblem,
  deleteProblem,
};
