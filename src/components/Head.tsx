import React, {useEffect} from 'react'

// --- Header Component ---

// Mock Logo Component for simplicity, based on the Figma design
const Logo = () => (
	<div className='flex flex-col items-center cursor-pointer'>
		<img className="h-[3rem]" src="../../public/logo.png" />
	</div>
)

// Navigation Links Data
const navLinks = [
	{name: 'Sobre', href: '#'},
	{name: 'Locações', href: '#', dropdown: true},
	{name: 'QSMS', href: '#'},
	{name: 'Notícias', href: '#'},
	{name: 'Projetos Sociais', href: '#'}
]

interface NavItemProps {
	name: string
	href: string
	dropdown?: boolean
}

const NavItem = ({name, href, dropdown}: NavItemProps) => (
	<a
		className='text-sm text-gray-700 hover:text-green-600 transition duration-150 ease-in-out flex items-center'
		href={href}
	>
		{name}
		{dropdown && (
			<svg
				className='ml-1 w-3 h-3'
				fill='none'
				stroke='currentColor'
				viewBox='0 0 24 24'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					d='M19 9l-7 7-7-7'
					strokeLinecap='round'
					strokeLinejoin='round'
					strokeWidth='2'
				/>
			</svg>
		)}
	</a>
)

export function Header() {
	return (
		// The header is positioned absolutely to overlay the content, as seen in the prototype
		// It uses a slight opacity for a modern, light feel.
		<header className='absolute top-0 left-0 right-0 z-10 bg-white bg-opacity-90 shadow-md rounded-bl-[3em] rounded-br-[3em]'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='flex justify-between items-center h-18'>
					{/* Logo */}
					<div className='flex-shrink-0 py-2'>
						<Logo />
					</div>

					{/* Desktop Navigation */}
					<nav className='hidden md:block'>
						<div className='flex space-x-8'>
							{navLinks.map(link => (
								<NavItem key={link.name} {...link} />
							))}
						</div>
					</nav>

					{/* Mobile Menu Button (Placeholder for responsiveness) */}
					<div className='md:hidden'>
						<button
							aria-controls='mobile-menu'
							aria-expanded='false'
							className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500'
							type='button'
						>
							<span className='sr-only'>Open main menu</span>
							{/* Hamburger Icon */}
							<svg
								aria-hidden='true'
								className='block h-6 w-6'
								fill='none'
								stroke='currentColor'
								viewBox='0 0 24 24'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M4 6h16M4 12h16M4 18h16'
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
								/>
							</svg>
						</button>
					</div>
				</div>
			</div>

			{/* Mobile Menu (You would typically add state to toggle this) */}
			{/* <div className="md:hidden" id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-green-600 hover:bg-gray-50"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div> */}
		</header>
	)
}

// --- User's Head Component (Modified to include the Header) ---

interface Properties {
	title: string
}

// Assuming the user wants the Header to be part of the main layout,
// I've wrapped the Header component in a main layout div.
export function Head({title}: Properties) {
	useEffect(() => {
		document.title = title
	}, [title])

	return <Header />
}
