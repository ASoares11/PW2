import { Router } from "express"

import { get, login, patch } from "@/controllers/profile"
import { ensureAuthenticated } from "@/middlewares/authentication/ensureAuthenticated"

const router = Router()

router.get("/profile", get)
router.patch("/profile", ensureAuthenticated, patch)
router.post("/login", login)

export { router }
