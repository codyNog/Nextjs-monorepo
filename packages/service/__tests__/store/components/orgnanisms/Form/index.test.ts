import { describe, expect, it } from "vitest";
import { renderHook } from "@testing-library/react-hooks";
import { useForm } from "~/store/components/organisms/Form";

describe(
	"useForm",
	() => {
		it(
			"初期状態",
			() => {
				const { result } = renderHook(() => useForm());

				expect(result.current.name).toBe("");
			},
		);
	},
);
