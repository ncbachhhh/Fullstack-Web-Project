import UserApplicant from "../models/user.applicant.model.js";
import userApplicantRepository from "../repositories/user.applicant.repository.js";
import { UserApplicantView } from "../views/user.applicant.view.js";
import bcrypt from "bcrypt";

export const register = async (req, res) => {
  const { firstName, lastName, email, password, phone } = req.body;

  const foundExistedUser = await userApplicantRepository.getUserByEmail(email);
  console.log(foundExistedUser);

  if (foundExistedUser) {
    return res.status(400).json({
      message: "Already existed user with this email",
    });
  }
  const salt = bcrypt.genSaltSync(10);
  const hashPassword = bcrypt.hashSync(password, salt);

  const newUser = await userApplicantRepository.createUser({ firstName, lastName, email, password: hashPassword, phone, salt });

  const userView = UserApplicantView(newUser);

  return res.status(200).json({
    message: "Register successfully",
    data: userView,
  });
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  const foundUserWithEmail = await userApplicantRepository.getUserByEmail(email);
  if (!foundUserWithEmail) {
    return res.status(401).json({
      message: "Email or password is incorrect",
    });
  }

  const hashPassword = bcrypt.hashSync(password, foundUserWithEmail.salt);
  if (hashPassword === foundUserWithEmail.password) {
    const userView = UserApplicantView(foundUserWithEmail);
    return res.status(200).json({
      message: "Login successfully",
      data: userView,
    });
  }

  return res.status(401).json({
    message: "Email or password is incorrect",
  });
};
