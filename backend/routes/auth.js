import express from 'express';
import { login, register, checkUsernameAvailability } from '../Controllers/authController.js';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/check-username', checkUsernameAvailability); // New route for checking username availability

export default router;
