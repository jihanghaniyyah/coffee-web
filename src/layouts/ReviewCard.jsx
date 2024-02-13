import React from 'react';
import { BsStarFill, BsStarHalf } from 'react-icons/bs';
import { FaQuoteRight } from 'react-icons/fa';

const ReviewCard = (props) => {
	return (
		<div className='flex flex-col w-full lg:w-2/6 bg-white p-3 rounded-lg gap-5'>
			<div className='flex flex-row items-center lg:justify-start justify-center'>
				<div className='w-1/4'>
					<img className='rounded-full' src={props.img} alt='img' />
				</div>
				<div className='mx-3'>
					<h2 className='font-semibold text-lg '>{props.title}</h2>
					<div className='flex'>
						<BsStarFill className='text-brightColor' />
						<BsStarFill className='text-brightColor' />
						<BsStarFill className='text-brightColor' />
						<BsStarFill className='text-brightColor' />
						<BsStarHalf className='text-brightColor' />
					</div>
				</div>
				<span className='ml-16 '>
					<FaQuoteRight className='text-backgroundColor' size={42} />
				</span>
			</div>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
				incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
				exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
			</p>
		</div>
	);
};

export default ReviewCard;
