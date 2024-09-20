const express = require("express");
const router = express.Router();
const {
  createUser,
  loginUser,
  getNearbyHospital,
  bookAppointment,
  giveRatings,
  getAllInsurance,
  getAllCompanies,
  addMedicalRecord,
  deleteMedicalRecord,
  getInsurance,
  getHospital,
} = require("../controllers/userController");
const { authenticateToken } = require("../helpers/helper");

router.post("/signup", createUser);
router.post("/login", loginUser);
router.post("/profile/medical_records", authenticateToken, addMedicalRecord);
router.patch(
  "/profile/medical_records",
  authenticateToken,
  deleteMedicalRecord
);
router.post("/hospital-id/ratings", authenticateToken, giveRatings);
router.get("/get-hospitals", authenticateToken, getNearbyHospital);
router.get("/get-hospital", authenticateToken, getHospital);
router.get("/get-insurances", authenticateToken, getAllInsurance);
router.get("/user-id/companies", authenticateToken, getAllCompanies);
router.post("/user-id/book-appointment", authenticateToken, bookAppointment);
router.get("/get-insurance", authenticateToken, getInsurance);

module.exports = router;
