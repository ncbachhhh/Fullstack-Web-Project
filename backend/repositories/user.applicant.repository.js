import UserApplicant from "../models/user.applicant.model.js";

const userApplicantRepository = {
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
    newUser.firstName = data.firstName;
    newUser.lastName = data.lastName;
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
};

export default userApplicantRepository;
