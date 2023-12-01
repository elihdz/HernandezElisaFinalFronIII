import { useState } from "react";

function Form({ label, name, type, onChange, ...props }) {
	const [focused, setFocused] = useState(false);

	const handleFocus = () => setFocused(true);

	const handleBlur = () => setFocused(false);

	return (
		<div className={`form ${focused ? 'focused' : ''}`}>
			<label htmlFor={name}>{label}</label>
			<input
				{...props}
				id={name}
				name={name}
				type={type}
				onChange={onChange}
				onFocus={handleFocus}
				onBlur={handleBlur}
			/>
		</div>
	);
};

export default Form;