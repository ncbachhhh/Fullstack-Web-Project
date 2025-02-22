import mongoose from "mongoose";

// schema người dùng đã apply những job nào
const UserJobSchema = new mongoose.Schema({
  userId: mongoose.Types.ObjectId,
  jobListId: [mongoose.Types.ObjectId],
  createdAt: Date,
});

const UserJob = mongoose.model("user_job", UserJobSchema);

export default UserJob;
