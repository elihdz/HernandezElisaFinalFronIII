import React, { useContext, useState } from 'react';
import Form from '../Components/Form';
import { DataContext } from '../Components/utils/data.context';

function Contact() {
	const [, , , , mode] = useContext(DataContext);

	const [values, setValues] = useState({ name: '', email: '' });
	const [error, setError] = useState(false);
	const [message, setMessage] = useState(null);

	const inputs = [
		{
			id: 1,
			name: 'name',
			type: 'text',
			placeholder: 'Nombre completo',
			label: 'Nombre',
			required: true,
		},
		{
			id: 2,
			name: 'email',
			type: 'email',
			placeholder: 'Tu email',
			label: 'Email',
			required: true,
		},
	];

	const handleSubmit = (e) => {
		e.preventDefault();


		if (values.name.length <= 5 || !values.email.includes('@')) {
			setError(true);
			setMessage(null);
		} else {
			setError(false);
			setMessage(
				`Gracias ${values.name}, te contactaremos a tu email pronto!`
			);
			console.log(values);


			setValues({ name: '', email: '' });
		}
	};

	const handleChange = (e) => {
		setValues({ ...values, [e.target.name]: e.target.value });
	};

	return (
		<div className={`form ${mode === 'dark' ? 'dark' : 'light'}`}>
			<form className="formSubmit" onSubmit={handleSubmit}>
				<h1>Contacto</h1>

				{inputs.map((input) => (
					<Form
						key={input.id}
						value={values[input.name]}
						onChange={handleChange}
						{...input}
					/>
				))}

				<button type='submit'>Enviar</button>
			</form>
    
			{message && <h4>{message}</h4>}
			{error && <h4>Por favor revisa tu información</h4>}
		</div>
	);
}

export default Contact;