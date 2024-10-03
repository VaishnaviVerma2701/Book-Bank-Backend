import express from "express"
import { signup,login ,contact} from "../controler/user.controler.js";
const router = express.Router()

router.post("/signup",signup)
router.post("/login",login)
router.post("/contact",contact)

export default router;

