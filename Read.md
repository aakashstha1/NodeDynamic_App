we can also use import
import express from "express";

add this in package.json
"type": "module"

add this in main file app.js
app.use(express.json());
