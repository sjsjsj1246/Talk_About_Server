const users = [];
const Color = [
  "#E47D7E",
  "#DAD82B",
  "#BBD831",
  "#F1622C",
  "#717CE3",
  "#AA7DE3",
  "#66B4E3",
  "#E39A7D",
  "#94E3A9",
];

const addUser = ({ id, name, room }) => {
  name = name.trim().toLowerCase();
  room = room.trim().toLowerCase();
  color = Color[Math.floor(Math.random() * Color.length)];

  const existingUser = users.find(
    (user) => user.room === room && user.name === name
  );

  if (existingUser) {
    return { error: "Username is taken" };
  }

  const user = { id, name, room, color };

  users.push(user);
  console.log(users, "users");
  return { user };
};

const removeUser = (id) => {
  const index = users.findIndex((user) => user.id === id);

  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
};

const getUser = (id) => users.find((user) => user.id === id);

const getUsersInRoom = (room) => users.filter((user) => user.room === room);

module.exports = { addUser, removeUser, getUser, getUsersInRoom };
