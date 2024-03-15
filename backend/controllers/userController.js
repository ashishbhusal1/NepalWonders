import User from "../models/User.js";

export const createUser = async (req, res) => {
  try {
    const newUser = new User(req.body);
    const savedUser = await newUser.save();
    res
      .status(201)
      .json({
        success: true,
        message: "Successfully created",
        data: savedUser,
      });
  } catch (err) {
    res
      .status(500)
      .json({
        success: false,
        message: "Failed to create. Try again",
        error: err.message,
      });
  }
};

export const updateUser = async (req, res) => {
  const id = req.params.id;
  try {
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );
    res
      .status(200)
      .json({
        success: true,
        message: "Successfully updated",
        data: updatedUser,
      });
  } catch (err) {
    res
      .status(500)
      .json({
        success: false,
        message: "Failed to update",
        error: err.message,
      });
  }
};

export const deleteUser = async (req, res) => {
  const id = req.params.id;
  try {
    await User.findByIdAndDelete(id);
    res.status(200).json({ success: true, message: "Successfully deleted" });
  } catch (err) {
    res
      .status(500)
      .json({
        success: false,
        message: "Failed to delete",
        error: err.message,
      });
  }
};

export const getSingleUser = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await User.findById(id);
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }
    res
      .status(200)
      .json({ success: true, message: "Successfully retrieved", data: user });
  } catch (err) {
    res
      .status(500)
      .json({
        success: false,
        message: "Failed to retrieve user",
        error: err.message,
      });
  }
};

export const getAllUser = async (req, res) => {
  try {
    const users = await User.find({});
    res
      .status(200)
      .json({ success: true, message: "Successfully retrieved", data: users });
  } catch (err) {
    res
      .status(500)
      .json({
        success: false,
        message: "Failed to retrieve users",
        error: err.message,
      });
  }
};
