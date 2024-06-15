import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

function pingProblemController(req: Request, res: Response) {
  return res.json({ message: "pong problem controller" });
}

function addProblem(req: Request, res: Response) {
  return res
    .status(StatusCodes.NOT_IMPLEMENTED)
    .json({ message: "not implemented" });
}

function getProblem(req: Request, res: Response) {
  return res
    .status(StatusCodes.NOT_IMPLEMENTED)
    .json({ message: "not implemented" });
}

function getProblems(req: Request, res: Response) {
  return res
    .status(StatusCodes.NOT_IMPLEMENTED)
    .json({ message: "not implemented" });
}

function deleteProblem(req: Request, res: Response) {
  return res
    .status(StatusCodes.NOT_IMPLEMENTED)
    .json({ message: "not implemented" });
}

function updateProblem(req: Request, res: Response) {
  return res
    .status(StatusCodes.NOT_IMPLEMENTED)
    .json({ message: "not implemented" });
}

module.exports = {
  pingProblemController,
  addProblem,
  getProblem,
  getProblems,
  deleteProblem,
  updateProblem,
};
