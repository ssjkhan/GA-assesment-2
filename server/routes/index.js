import express from "express";
import * as Controller from "../controllers/index.js";

// Init router
const router = express.Router();

// mount routes
router.get("/", Controller.main);

// other requests

export { router as default };
