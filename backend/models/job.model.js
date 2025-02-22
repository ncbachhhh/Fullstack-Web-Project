import mongoose from "mongoose";

const JobListSchema = {
  companyId: mongoose.Types.ObjectId,
  title: String,
  job_description: String,
  salary: String,
  working_times: String,
  deadline: Date,
  remain_deadline_by_day: Number,
  is_hot: Boolean,
  is_remote: Boolean,
  location: String,
  specialization: mongoose.Types.ObjectId,
  createAt: Date,
};

const JobList = mongoose.model("job_listing", JobListSchema);

export default JobList;
