import express from 'express'
import { createChat, findChat, userChats } from '../controllers/chatController.js'
const router=express.Router()

router.post("/postChat",createChat)
router.get("/:userId",userChats)
router.get("/find/:firstId/:secondId",findChat)

export default router