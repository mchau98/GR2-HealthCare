const authorizeUser = (req, res, next) => {
  if (req.user.id !== parseInt(req.params.userId, 10)) {
    return res
      .status(403)
      .json({ error: "Bạn không có quyền truy cập tài nguyên này" });
  }
  next();
};

module.exports = authorizeUser;
