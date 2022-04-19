import { zodUser } from "@my/shared/entities/User";
import { mocks } from "@my/shared/mocks";
import { describe, expect, it } from "vitest";

describe(
	"zodによるvalidation",
	() => {
		it(
			"user",
			() => {
				expect(zodUser.parse(mocks.user.user)).toStrictEqual(mocks.user.user);
			},
		);
	},
);
