import express from 'express';
import { login, register, checkUsernameAvailability } from '../Controllers/authController.js';

const router = express.Router();

router.post('/api/v1/auth/register', register);
router.post('/api/v1/auth/login', login);
router.post('/api/v1/auth/check-username', checkUsernameAvailability); // New route for checking username availability

export default router;
