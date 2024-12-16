var express = require("express");
const createInvoice = require("../controllers/invoice/createInvoice");
const getUserInvoices = require("../controllers/invoice/getInvoiceUser");
const authenticate = require("../middlewares/authenticate");

var router = express.Router();

/*
 *@route POST /invoices/:id
 *@description create invoice
 *@access login required
 */
router.post("/:id", authenticate(["user", "admin"]), createInvoice);

/*
 *@route GET /invoices/users/:id
 *@description get invoice of user
 *@access login required
 */
router.get("/users/:id", authenticate(["user", "admin"]), getUserInvoices);

module.exports = router;
