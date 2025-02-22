import mongoose from "mongoose";

// schema các chuyên ngành
const SpecializationSchema = {
  name: String,
  createdAt: Date,
};

const Specialization = mongoose.model("specialization", SpecializationSchema);

export default Specialization;
