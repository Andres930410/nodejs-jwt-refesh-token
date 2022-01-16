import express from "express";
import authController from "../controllers/auth.controller.js";
import refreshMiddleware from "../middlewares/refresh.middleware.js";

export default () => {
  const router = express.Router();
  router.post("/login", authController.login);
  router.post("/refresh", refreshMiddleware, authController.refreshToken);
  return router;
};
