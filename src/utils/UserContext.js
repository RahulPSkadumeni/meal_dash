import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "Rahul P S",
    email: "rahulps995@gmail.com",
  },
});

export default UserContext;
