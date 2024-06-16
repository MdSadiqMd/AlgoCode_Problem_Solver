import { NextFunction, Request, Response } from "express";
const NotImplemented = require("../errors/notimplemented.error");

function pingProblemController(req: Request, res: Response) {
  return res.json({ message: "pong problem controller" });
}

function addProblem(req: Request, res: Response, next: NextFunction) {
  try {
    throw new NotImplemented("add Problem");
  } catch (error) {
    next(error);
  }
}

function getProblem(req: Request, res: Response, next: NextFunction) {
  try {
    throw new NotImplemented("get Problem");
  } catch (error) {
    next(error);
  }
}

function getProblems(req: Request, res: Response, next: NextFunction) {
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
