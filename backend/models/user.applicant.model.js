import mongoose from "mongoose";

const UserApplicantSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  phone: String,
  cvFiles: [mongoose.Types.ObjectId],
  favorite_job: [mongoose.Types.ObjectId],
  registrationDate: Date,
  salt: String,
});

const UserApplicant = mongoose.model("user_applicant", UserApplicantSchema);

export default UserApplicant;
