const express = require("express");
const router = express.Router();
const expenseController = require("../controllers/expenseController");

router.post("/expenses", expenseController.createExpense);
router.get("/expense-list", expenseController.showExpense);
router.delete("/expenses/:id", expenseController.deleteExpense);
router.put("/expenses/:id", expenseController.updateExpense);

module.exports = router;
