import { useState } from "react";

export const useForm = () => {
	const [name, setName] = useState("");

	return { name, setName };
};
