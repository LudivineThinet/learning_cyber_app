import express from 'express';
import { login } from '../controller/authController.js'; 

const router = express.Router();

// Route de login
router.post('/login', login);

export default router;
