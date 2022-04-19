import { z } from "zod";

export const zodUser = z.object({ uid: z.string(), name: z.string() });

export type User = z.infer<typeof zodUser>;
