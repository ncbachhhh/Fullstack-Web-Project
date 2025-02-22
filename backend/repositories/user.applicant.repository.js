import UserApplicant from "../models/user.applicant.model.js";

const userApplicantRepository = {
  getUserById: async (id) => {
    const user = await UserApplicant.findById(id);
    return user;
  },

  getUserByEmail: async (email) => {
    const user = await UserApplicant.findOne({ email });
    return user;
  },

  getUserByEmailAndPassword: async (email, hashPassword) => {
    const user = await UserApplicant.findOne({ email, hashPassword });
    return user;
  },

  createUser: async (data) => {
    const newUser = new UserApplicant();
    newUser.fullName = data.fullName;
    newUser.email = data.email;
    newUser.password = data.password;
    newUser.phone = data.phone;
    newUser.cvFiles = [];
    newUser.favorite_job = [];
    newUser.registrationDate = new Date();
    newUser.salt = data.salt;

    await newUser.save();

    return newUser;
  },

  updateUser: async (id, data) => {
    const updatedUser = await UserApplicant.findByIdAndUpdate(id, { password: data.password }, { new: true });
    return updatedUser;
  },
};

export default userApplicantRepository;
