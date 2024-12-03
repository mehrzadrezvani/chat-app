export const signup = (req, res) => {
  // res.send("signup route");
  const { fullname, password, email } = req.body
  try {
    
  } catch (error) {
    
  }
};

export const login = (req, res) => {
  res.send("login route");
};

export const logout = (req, res) => {
  res.send("logout route");
};
