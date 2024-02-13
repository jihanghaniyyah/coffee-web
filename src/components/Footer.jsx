import React from 'react';

const Footer = () => {
	return (
		<div className='bg-gradient-to-r from-[#FFDCAB] to-[#AB6B2E] text-black rounded-t-3xl mt-8 md:mt-0'>
			<div className='flex flex-col md:flex-row justify-between p-8 md:px-32 px-5'>
				<div className='w-full md:w-1/4'>
					<h1 className='font-semibold text-xl pb-4 '>Cafe Pulse</h1>
					<p className='text-sm'>
						Welcome to our coffee heaven! Explore our aromatic brews, Savor artisanal
						flavors, and discover the best perfect roas to elevate your daily ritual.
					</p>
				</div>
				<div>
					<h1 className='font-medium text-xl pb-4 pt-5 md:pt-0'>Links</h1>
					<nav className='flex flex-col gap-2'>
						<a
							className='hover:text-backgroundColor transition-all cursor-pointer'
							href='/'
						>
							Menu
						</a>
						<a
							className='hover:text-backgroundColor transition-all cursor-pointer'
							href='/'
						>
							About Us
						</a>
						<a
							className='hover:text-backgroundColor transition-all cursor-pointer'
							href='/'
						>
							Products
						</a>
						<a
							className='hover:text-backgroundColor transition-all cursor-pointer'
							href='/'
						>
							Reviews
						</a>
					</nav>
				</div>
				<div>
					<h1 className='font-medium text-xl pb-4 pt-5 md:pt-0'>Menu</h1>
					<nav className='flex flex-col gap-2'>
						<a
							className='hover:text-backgroundColor transition-all cursor-pointer'
							href='/'
						>
							Cappuccino
						</a>
						<a
							className='hover:text-backgroundColor transition-all cursor-pointer'
							href='/'
						>
							Latte
						</a>
						<a
							className='hover:text-backgroundColor transition-all cursor-pointer'
							href='/'
						>
							Americano
						</a>
					</nav>
				</div>
				<div>
					<h1 className='font-medium text-xl pb-4 pt-5 md:pt-0'>Contact Us</h1>
					<nav className='flex flex-col gap-2'>
						<a
							className='hover:text-backgroundColor transition-all cursor-pointer'
							href='/'
						>
							cafepulse@gmail.com
						</a>
						<a
							className='hover:text-backgroundColor transition-all cursor-pointer'
							href='/'
						>
							+84 958 248 956
						</a>
						<a
							className='hover:text-backgroundColor transition-all cursor-pointer'
							href='/'
						>
							Social Media
						</a>
					</nav>
				</div>
			</div>
			<div>
				<p className='text-center py-4'>
					@copyright developed by
					<span className='text-backgroundColor'> champion programmers</span> | All right
					reserved
				</p>
			</div>
		</div>
	);
};

export default Footer;
