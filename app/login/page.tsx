import React from 'react';
import { Button } from '@radix-ui/themes';

export default function Login() {
	return (
		<main className='flex justify-center'>
			<div className='card'>
				<h2 className='mt-1 text-center text-2xl font-bold leading-9 tracking-tight'>Inicio de Sesión</h2>
				<p>Ingrese su usuario y contraseña para iniciar sesión</p>
				<div className='mt-1 sm:mx-auto sm:w-full sm:max-w-sm'>
					<form className='w-full' action='#' method='POST'>
						<div>
							<label htmlFor='user' className='block text-sm font-medium leading-6 text-gray-900'>
								Usuario
							</label>
							<div className='mt-2'>
								<input
									id='user'
									name='user'
									type='text'
									autoComplete='user'
									required
									className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
								/>
							</div>
						</div>
            <div>
							<label htmlFor='pass' className='block text-sm font-medium leading-6 text-gray-900'>
								Contraseña
							</label>
							<div className='mt-2'>
								<input
									id='pass'
									name='pass'
									type='password'
									autoComplete=''
									required
									className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
								/>
							</div>
						</div>
            <div>
              <Button variant='classic'>Ingresar</Button>
            </div>
					</form>
				</div>
			</div>
		</main>
	);
}
