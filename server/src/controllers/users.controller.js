const usersController = {};

const { v4 } = require("uuid");
const fsPromises = require("fs/promises");
const path = require("path");
const fileData = path.resolve(__dirname, "../../data/users.json");

usersController.getAllUsers = async (req, res) => {
  try {
    const data = await fsPromises.readFile(fileData);
    const jsonData = await JSON.parse(data);
    res.send(jsonData);
  } catch (err) {
    return res.send({
      errors: "Fail reading users",
    });
  }
};

usersController.createUser = async (req, res) => {
  try {
    const data = await fsPromises.readFile(fileData);
    const jsonUsersData = await JSON.parse(data);

    const infoNewUser = req.body;
    const newUserData = { userId: v4(), ...infoNewUser };

    const usersList = [...jsonUsersData, newUserData];

    res.send(usersList);
    await fsPromises.writeFile(fileData, JSON.stringify(usersList));
  } catch (err) {
    return res.send("Error creating user");
  }
};

usersController.updateUser = async (req, res) => {
  try {
    const data = await fsPromises.readFile(fileData);
    const jsonUsersData = await JSON.parse(data);

    const { id } = req.params;
    const modifiedUsers = jsonUsersData.map((user) => {
      if (user.userId === id) {
        return {
          ...user,
          name: req.body.name,
          email: req.body.email,
        };
      }
      return user;
    });

    await fsPromises.writeFile(fileData, JSON.stringify(modifiedUsers));

    res.send(modifiedUsers);
  } catch (err) {
    return res.send("We can't fin user ID");
  }
};

usersController.deleteUser = async (req, res) => {
  try {
    const data = await fsPromises.readFile(fileData);
    const jsonUsersData = await JSON.parse(data);

    const { id } = req.params;
    const modifiedUsers = jsonUsersData.filter((users) => users.userId !== id);

    await fsPromises.writeFile(fileData, JSON.stringify(modifiedUsers));

    res.send(modifiedUsers);
  } catch (err) {
    return res.send("User not found");
  }
};

module.exports = usersController;
