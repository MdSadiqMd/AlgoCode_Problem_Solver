import { NextFunction, Request, Response } from "express";
const NotImplemented = require("../errors/notimplemented.error");
const { ProblemService } = require('../services/index');
const { ProblemRepository } = require('../repositories/index');
const StatusCodes = require('http-status-codes')

const problemService = new ProblemService(new ProblemRepository());

function pingProblemController(req: Request, res: Response) {
  return res.json({ message: "pong problem controller" });
}

async function addProblem(req: Request, res: Response, next: NextFunction) {
  try {
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
    throw new NotImplemented("get Problem");
  } catch (error) {
    next(error);
  }
}

async function getProblems(req: Request, res: Response, next: NextFunction) {
  try {
    throw new NotImplemented("get Problems");
  } catch (error) {
    next(error);
  }
}

function deleteProblem(req: Request, res: Response, next: NextFunction) {
  try {
    throw new NotImplemented("delete Problem");
  } catch (error) {
    next(error);
  }
}

function updateProblem(req: Request, res: Response, next: NextFunction) {
  try {
    throw new NotImplemented("update Problem");
  } catch (error) {
    next(error);
  }
}

module.exports = {
  pingProblemController,
  addProblem,
  getProblem,
  getProblems,
  deleteProblem,
  updateProblem,
};
