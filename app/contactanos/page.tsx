import React from 'react';

export default function Contactanos() {
	return (
		<main>
			<div className='card w-full md:max-w-3xl mx-auto'>
				<h1 className='mt-1 text-center text-2xl font-bold leading-9 tracking-tight'>Contáctanos</h1>
				<p>Envíanos un mensaje con tus comentarios o consultas y muy pronto te contactaremos</p>
				<div className=''>
					<form action='#' method='POST' className='w-full mx-auto'>
						<div>
							<label
								htmlFor='name'
								className='block text-start text-sm font-medium leading-6 text-gray-900'>
								Nombre
							</label>
							<div className='mt-2'>
								<input
									id='name'
									name='name'
									type='text'
									autoComplete='name'
									required
									className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
								/>
							</div>
						</div>
						<div>
							<label
								htmlFor='phone'
								className='block text-start text-sm font-medium leading-6 text-gray-900'>
								Teléfono
							</label>
							<div className='mt-2'>
								<input
									id='phone'
									name='phone'
									type='tel'
									autoComplete='phone'
									required
									className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
								/>
							</div>
						</div>
						<div>
							<label
								htmlFor='email'
								className='block text-start text-sm font-medium leading-6 text-gray-900'>
								Correo
							</label>
							<div className='mt-2'>
								<input
									id='email'
									name='email'
									type='email'
									autoComplete='email'
									required
									className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
								/>
							</div>
						</div>
						<div>
							<label
								htmlFor='message'
								className='block text-start text-sm font-medium leading-6 text-gray-900'>
								Mensaje
							</label>
							<div className='mt-2'>
								<textarea
									className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
									id='message'
									name='message'
									autoComplete='user'
									required
									rows={4}
									placeholder='Escribe tu mensaje'
								/>
							</div>
						</div>
						<button className='btn-primary rounded'>Enviar</button>
					</form>
				</div>
			</div>
		</main>
	);
}
