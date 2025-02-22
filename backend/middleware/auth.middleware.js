import jwt from "jsonwebtoken";

export const authentication = (req, res, next) => {
  const secretKey = process.env.JWT_SECRET_KEY;
  const accessTokenExpires = process.env.JWT_ACCESS_TOKEN_EXPIRES;
  const refreshTokenExpires = process.env.JWT_REFRESH_TOKEN_EXPIRES;

  let accessToken = req.get("Authorization");

  if (!accessToken) {
    return res.status(401).json({
      message: "The request was unauthenticated",
    });
  }

  // bearer có CÁCH
  accessToken = accessToken.replace("Bearer ", "");

  try {
    jwt.verify(accessToken, secretKey);
    const result = jwt.decode(accessToken);
    req.currentUserApplicantId = result.userId;

    next();
  } catch (error) {
    return res.status(401).json({
      message: "The request was unauthenticated",
    });
  }
};
