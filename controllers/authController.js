const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


const generateToken = (user) => {
  return jwt.sign(
    {
      id: user._id,
      email: user.email,
      username: user.username,
    },
    process.env.JWT_SECRET,
    { expiresIn: "1d" }
  );
};
exports.register = async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "Email already exists" });
    }

    const hashed = await bcrypt.hash(password, 10);
    const user = await User.create({ username, email, password: hashed });

    console.log("User created:", user);
    res.status(201).json({ message: "User created" });
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: "Something went wrong" });
  }
};


// exports.register = async (req, res) => {
//   const { email, password, username } = req.body;
//   const hashed = await bcrypt.hash(password, 10);
//   try {
//     const user = await User.create({ email, password: hashed, username });
//     res.status(201).json({ message: "User created" });
//   } catch (err) {
//     if (err.code === 11000) {
//       // MongoDB duplicate key error
//       const field = Object.keys(err.keyPattern)[0]; // 'email' or 'username'
//       return res.status(400).json({ error: `${field.charAt(0).toUpperCase() + field.slice(1)} already exists` });
//     }
//     return res.status(400).json({ error: "Registration failed", details: err.message });
//   }
// };


exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(400).json({ error: "Invalid credentials" });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json({ error: "Invalid credentials" });

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
  res.json({ token });

};
