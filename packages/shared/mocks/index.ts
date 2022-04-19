import { generateMock } from "@anatine/zod-mock";
import { User, zodUser } from "../entities/User";

const user: User = generateMock(zodUser);
const users: User[] = new Array(3).fill("").map((_) => generateMock(zodUser));

export const mocks = { user: { user, users } };
