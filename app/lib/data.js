import { User } from "./models";
import { connectToDB } from "./utils";
i;

export const fetchUsers = async () => {
  try {
    connectToDB();
    const users = await User.find();
    return users;
  } catch (error) {
    console.log(error);
    throw new Error("failed to fetch users");
  }
};
