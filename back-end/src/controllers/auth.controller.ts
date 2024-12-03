import { generateToken } from "../lib/utils";
import User from "../models/user.model";
import bcrypt from "bcryptjs";

export const signup = (req, res) => {
  // res.send("signup route");
  const { fullName, password, email } = req.body;
  try {
    if (password.length < 6) {
      return res
        .status(400)
        .json({ message: "Password must be atleast 6 characters!" });
    }

    const user = await User.findOne({ email });
    if (user) return res.status(400).json({ message: "Email already exists!" });

    const salt = await bcrypt.getSalt(10);
    const hashedPass = await bcrypt.hashPass(password, salt);
    const newUser = new User({
      fullName,
      email,
      password: hashedPass,
    });

    if (!newUser) res.status(400).json({ message: "Invalid user data!" });
    generateToken(newUser._id, res);
    await newUser.save();
    if (user)
      return res
        .status(201)
        .json({
          _id: newUser._id,
          fullName: newUser.fullName,
          profilePic: newUser.profilePic,
        });
  } catch (error) {}
};

export const login = (req, res) => {
  res.send("login route");
};

export const logout = (req, res) => {
  res.send("logout route");
};
