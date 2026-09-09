import express from 'express';

import { ChatbotController } from './chatbot.controller';

const router = express.Router();

// Public chatbot endpoint
// POST /api/v1/chatbot/chat

router.post('/chat', ChatbotController.chat);

export const ChatbotRoutes = router;
