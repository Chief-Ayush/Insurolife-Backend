const mongoose = require("mongoose");
const schema = mongoose.Schema;

const medical_record = new schema({
  doctor: {
    type: String,
    required: true,
  },
  diagnosis: {
    type: String,
    required: true,
  },
});
const appointment = new schema({
  doctor: {
    type: String,
    required: true,
  },
  date_time: {
    type: Date,
    required: true,
  },
});

const userSchema = new schema({
  name: {
    type: String,
    required: true,
  },
  dob: {
    type: String,
    required: true,
    validate: {
      validator: function (v) {
        // Basic validation for dd-mm-yyyy format
        return /^\d{2}-\d{2}-\d{4}$/.test(v);
      },
      message: (props) =>
        `${props.value} is not a valid date format! Use dd-mm-yyyy`,
    },
  },
  email: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  medical_records: [medical_record],
  appointments: appointment,
});

module.exports = mongoose.model("User", userSchema);
