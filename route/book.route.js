// const express= require("express");
import express from "express"
import { getBook } from "../controler/book.controler.js";

const router = express.Router()

router.get("/",getBook);

export default router;