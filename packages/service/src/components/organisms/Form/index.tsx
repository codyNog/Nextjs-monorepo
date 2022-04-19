import { useForm } from "~/store/components/organisms/Form";

interface Props {
	// id: string
}

export const Form = ({}: Props): JSX.Element => {
	const { name: _ } = useForm;

	return <div>aaa</div>;
};
