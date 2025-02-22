import UserApplicant from "../models/user.applicant.model.js";
import userApplicantRepository from "../repositories/user.applicant.repository.js";
import { UserApplicantView } from "../views/user.applicant.view.js";
import bcrypt, { hash } from "bcrypt";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  const { fullName, email, password } = req.body;

  const foundExistedUser = await userApplicantRepository.getUserByEmail(email);
  console.log(foundExistedUser);

  if (foundExistedUser) {
    return res.status(400).json({
      message: "Already existed user with this email",
    });
  }
  const salt = bcrypt.genSaltSync(10);
  const hashPassword = bcrypt.hashSync(password, salt);

  const newUser = await userApplicantRepository.createUser({ fullName, email, password: hashPassword, phone: null, salt });

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

  const secretKey = process.env.JWT_SECRET_KEY;
  const accessTokenExpires = process.env.JWT_ACCESS_TOKEN_EXPIRES;
  const refreshTokenExpires = process.env.JWT_REFRESH_TOKEN_EXPIRES;

  const accessTokenPayload = {
    userId: foundUserWithEmail._id,
    fullName: foundUserWithEmail.fullName,
  };
  const accessToken = jwt.sign(accessTokenPayload, secretKey, { expiresIn: accessTokenExpires });

  const refreshTokenPayload = {
    userId: foundUserWithEmail._id,
  };
  const refreshToken = jwt.sign(refreshTokenPayload, secretKey, { expiresIn: refreshTokenExpires });

  const hashPassword = bcrypt.hashSync(password, foundUserWithEmail.salt);
  if (hashPassword === foundUserWithEmail.password) {
    const userView = UserApplicantView(foundUserWithEmail);
    return res.status(200).json({
      message: "Login successfully",
      data: {
        ...userView,
        accessToken,
        refreshToken,
      },
    });
  }

  return res.status(401).json({
    message: "Email or password is incorrect",
  });
};

export const forgot_password = async (req, res) => {
  const { email } = req.body;

  const foundUserWithEmail = await userApplicantRepository.getUserByEmail(email);

  if (!foundUserWithEmail) {
    return res.status(401).json({
      message: "User not found",
    });
  }

  console.log(foundUserWithEmail);

  const newPassword = "User@1234";
  const hashPassword = bcrypt.hashSync(newPassword, foundUserWithEmail.salt);
  const user = await userApplicantRepository.updateUser(foundUserWithEmail._id, { password: hashPassword });

  const userView = UserApplicantView(user);

  return res.status(200).json({
    message: "Reset password successfully, your new password is 'User@1234'",
    data: userView,
  });
};

export const getProfile = async (req, res) => {
  // từ middlewate auth
  const currentUserApplicantId = req.currentUserApplicantId;

  const user = await userApplicantRepository.getUserById(currentUserApplicantId);
  const userView = UserApplicantView(user);

  return res.status(200).json({
    message: "OK",
    data: userView,
  });
};
