
import express from 'express';
import { signup, login, loggedIn, logout } from '../controllers/users.js';

const router = express.Router();

router.post('/signup', signup);
router.post("/login", login);
router.get("/loggedIn", loggedIn);
router.get("/logout", logout);

export default router;