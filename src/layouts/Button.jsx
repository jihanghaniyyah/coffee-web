import React from 'react';

const Button = (props) => {
	return (
		<div className='px-6 py-1 border-white bg-[#FFDCAB] hover:text-[#AB6B2E] transition-all rounded-full'>
			<button>{props.title}</button>
		</div>
	);
};

export default Button;
