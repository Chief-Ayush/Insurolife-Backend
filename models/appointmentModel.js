const mongoose = require("mongoose");
const schema = mongoose.Schema;
const Company = require("./companyModel");

const appointmentSchema = new schema(
  {
    user_id: {
      type: String,
      ref: "User",
      required: true,
    },
    company_id: {
      type: String,
      ref: "Company",
      required: true,
    },
    counsellor_name: {
      type: String,
      required: true,
    },
    counsellor_image: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      validate: {
        validator: function (v) {
          return /^\d{4}-\d{2}-\d{2}$/.test(v);
        },
        message: (props) =>
          `${props.value} is not a valid date format! Use yyyy-mm-dd`,
      },
    },
    timing: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
      validate: {
        validator: function (v) {
          return (
            v === "Accepted" ||
            v === "Declined" ||
            v === "Pending" ||
            v === "Completed"
          );
        },
        message: (props) =>
          `${props.value} is not a valid Status! Use Accepted Declined Pending or Completed`,
      },
    },
    meeting: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Appointment", appointmentSchema);
