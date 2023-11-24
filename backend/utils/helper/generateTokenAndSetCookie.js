const jwt = require("jsonwebtoken");
const generateTokenAndSetCookie = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "15d",
  });

  res.cookie("token", token, {
    httpOnly: true, //it helps to secure the cookies from the access side of browser.
    maxAge: 15 * 24 * 60 * 60 * 1000, //15 days
    sameSide: "strict", //CSRF
  });

  return token;
};

module.exports = generateTokenAndSetCookie;
