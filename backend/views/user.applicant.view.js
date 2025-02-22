export const UserApplicantView = (user) => {
  return {
    id: user.id,
    fullname: user.fullName,
    email: user.email,
    phone: user.phone,
  };
};
