import express from 'express';
export const userRoutes= express.Router();
userRoutes.get('/profile');
userRoutes.post('/login');
userRoutes.post('/register');
userRoutes.put('/change password');
