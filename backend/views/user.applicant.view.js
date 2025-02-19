export const UserApplicantView = (user) => {
  return {
    id: user.id,
    fullname: `${user.firstName} ${user.lastName}`,
    email: user.email,
    phone: user.phone,
  };
};
