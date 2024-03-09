import Link from 'next/link';
import React from 'react';

export default function NotFound() {
	return (
		<div className='flex h-[600px] items-center justify-center flex-col'>
			<div className='w-[250px] h-[250px] bg-black rounded-full flex items-center justify-center text-9xl text-white'>!</div>

			<Link href='/' className='text-blue-600 py-5 text-4xl'>
				Bosh sahifa
			</Link>
			{/* <!-- component --> */}
			{/* <!-- component --> */}
			{/* <!-- MDI Icons --> */}
			<Link rel='stylesheet' href='https://cdn.materialdesignicons.com/6.5.95/css/materialdesignicons.min.css' />

			{/* <!-- Page Container --> */}
		</div>
	);
}
