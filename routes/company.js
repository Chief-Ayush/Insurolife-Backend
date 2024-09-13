const express = require("express");
const router = express.Router();
const {
  sendRequest,
  createCompany,
  createInsurance,
  pendingRequest,
  acceptedRequest,
  declinedRequest,
  updateDiscount,
} = require("../controllers/companyController");

router.post("/Request/Send", sendRequest);
router.post("/signup", createCompany);
router.post("/Insurance/New", createInsurance);
router.get("/Notifications/Pending", pendingRequest);
router.get("/Notifications/Accepted", acceptedRequest);
router.get("/Notifications/Declined", declinedRequest);
router.patch("/Insurance/insurance_id", updateDiscount);
module.exports = router;
