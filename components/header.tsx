
"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../public/LogoMaya.jpeg';

export default function header() {

	const [activeLink, setActiveLink] = useState('');

    const linkClick = (event, href) => {
		setActiveLink(href);
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	return (
		<nav className='flex-col my-0 mx-auto justify-center md:flex-row md:gap-3'>
			<Image src={Logo} alt='Maya FC logo' width={80} quality={80} placeholder='blur'></Image>
			<h1>MAYA FC</h1>
			<Link href='/' onClick={(e) => linkClick(e, '/')} className={activeLink === '/' ? 'text-white bg-red-900 p-2 rounded' : ''}>Home</Link>
            <Link href='/torneos' onClick={(e) => linkClick(e, '/torneos')} className={activeLink === '/torneos' ? 'text-white  bg-red-900 p-2 rounded' : ''}>Torneos</Link>
            <Link href='/jugadores' onClick={(e) => linkClick(e, '/jugadores')} className={activeLink === '/jugadores' ? 'text-white  bg-red-900 p-2 rounded' : ''}>Jugadores</Link>
            <Link href='/tienda' onClick={(e) => linkClick(e, '/tienda')} className={activeLink === '/tienda' ? 'text-white  bg-red-900 p-2 rounded' : ''}>Tienda</Link>
            <Link href='/contactanos' onClick={(e) => linkClick(e, '/contactanos')} className={activeLink === '/contactanos' ? 'text-white  bg-red-900 p-2 rounded' : ''}>Contáctanos</Link>
            <Link href='/login' onClick={(e) => linkClick(e, '/login')} className={activeLink === '/login' ? 'text-white  bg-red-900 p-2 rounded' : ''}>Iniciar Sesión</Link>
        </nav>
	);
}
