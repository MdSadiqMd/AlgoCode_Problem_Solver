import { Request, Response } from "express";

function pingProblemController(req: Request, res: Response) {
  res.json({ message: "ping problem controller" });
}

function addProblem(req: Request, res: Response) {}

function getProblem(req: Request, res: Response) {}

function getProblems(req: Request, res: Response) {}

function deleteProblem(req: Request, res: Response) {}

function updateProblem(req: Request, res: Response) {}

module.exports = {
  pingProblemController,
  addProblem,
  getProblem,
  getProblems,
  deleteProblem,
  updateProblem,
};
