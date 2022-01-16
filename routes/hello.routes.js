import express from "express";
import helloController from "../controllers/hello.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";

export default () => {
  const router = express.Router();
  router.get("/", authMiddleware, helloController.loggegIn);
  return router;
};
