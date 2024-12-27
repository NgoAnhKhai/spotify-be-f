var express = require("express");
const createInvoice = require("../controllers/invoice/createInvoice");
const getUserInvoices = require("../controllers/invoice/getInvoiceUser");
const authenticate = require("../middlewares/authenticate");
const completedPayment = require("../controllers/invoice/completedPayment");
const cancelPayment = require("../controllers/invoice/cancelPayment");
const getPendingInvoice = require("../controllers/invoice/getPendingInvoice");
const validationMiddleware = require("../middlewares/validation.middleware");
const createInvoiceSchemaValidator = require("../controllers/src/invoiceSchemavalidation/createInvoiceSchema");
const completePaymentSchemaValidator = require("../controllers/src/invoiceSchemavalidation/CompleteInvoiceSChema");
const cancelPaymentSchemaValidator = require("../controllers/src/invoiceSchemavalidation/CancelInvoice");
const GetUserInvoice = require("../controllers/src/invoiceSchemavalidation/GetUserInvoice");
const getPendingInvoiceSchemaValidator = require("../controllers/src/invoiceSchemavalidation/CheckPendingSchema");

var router = express.Router();

/*
 *@route POST /invoices/create
 *@description create invoice
 *@access login required
 */
router.post(
  "/create",
  validationMiddleware(createInvoiceSchemaValidator, "body"),
  authenticate(["user", "admin"]),
  createInvoice
);

/*
 *@route POST /invoices/complete
 *@description complete invoice
 *@access login required
 */
router.post(
  "/complete",
  validationMiddleware(completePaymentSchemaValidator, "body"),
  authenticate(["user", "admin"]),
  completedPayment
);

/*
 *@route POST /invoices/cancel
 *@description cancel invoice
 *@access login required
 */
router.post(
  "/cancel",
  validationMiddleware(cancelPaymentSchemaValidator, "body"),
  authenticate(["user", "admin"]),
  cancelPayment
);

/*
 *@route POST /invoices/cancel
 *@description cancel invoice
 *@access login required
 */
router.get(
  "/pending",
  validationMiddleware(getPendingInvoiceSchemaValidator, "body"),
  authenticate(["user", "admin"]),
  getPendingInvoice
);

/*
 *@route GET /invoices/users/:id
 *@description get invoice of user
 *@access login required
 */
router.get(
  "/users/:id",
  validationMiddleware(GetUserInvoice, "params"),
  authenticate(["user", "admin"]),
  getUserInvoices
);

module.exports = router;
