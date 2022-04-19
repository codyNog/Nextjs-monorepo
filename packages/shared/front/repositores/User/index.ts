import { User } from "../../../entities/User";

const createUser = async (user: User): Promise<User> => {
	return user;
};

const getUsers = async (): Promise<User[]> => {
	return [];
};

const getUser = async (uid: string): Promise<User> => {
	return { uid, name: "" };
};

const updateUser = async (user: User): Promise<User> => {
	return user;
};

const deleteUser = async (uid: string): Promise<void> => {
	return;
};

export const UserImpl = {
	createUser,
	getUsers,
	getUser,
	updateUser,
	deleteUser,
};
