import './last_modify.div.style.scss';

interface ILastModify_DIV {
	(props: { text: string }): JSX.Element;
}

export const LastModify_DIV: ILastModify_DIV = ({ text }) => {
	return <div className="last-modify-div">{text}</div>;
};
