import mongoose from "mongoose";

const UserCompanySchema = {
  email: String,
  password: String,
  name: String,
  logo: URL,
  short_description: String,
  city: String,
  short_city: String,
  phone: String,
  website: URL,
  jobList: [mongoose.Types.ObjectId],
  registrationDate: Date,
  salt: String,
};

const UserCompany = mongoose.model("user_company", UserCompanySchema);

export default UserCompany;
