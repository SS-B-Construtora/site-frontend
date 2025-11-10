import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router';


const Logo = () => (
  <div className="flex flex-col items-center cursor-pointer">
    <img className="h-[3rem]" src="/logo.png"" />
  </div>
);

const navLinks = [
  {
    name: 'Sobre',
    href: '#',
    dropdown: true,
    options: [{ name: 'Quem somos', href: '/aboutUs' }],
  },
  { name: 'Obras', href: '/obras' },
  { name: 'Locações', href: '/locacoes' },
  { name: 'QSMS', href: '/qsms' },
  { name: 'Notícias', href: '/noticias' },
  { name: 'Projetos Sociais', href: '/projetos-sociais' },
];

interface NavItemProps {
  name: string;
  href: string;
  dropdown?: boolean;
  options?: Array<{ name: string; href: string }>;
}

const NavItem = ({ name, href, dropdown, options }: NavItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  if (dropdown && options) {
    return (
      <div className="relative" ref={dropdownRef}>
        <button
          className="text-sm text-gray-700 hover:text-green-600 transition duration-150 ease-in-out flex items-center"
          onClick={() => setIsOpen(!isOpen)}
          onMouseEnter={() => setIsOpen(true)}
        >
          {name}
          <svg
            className={`ml-1 w-3 h-3 transform transition-transform duration-200 ${
              isOpen ? 'rotate-180' : ''
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M19 9l-7 7-7-7"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg>
        </button>

        {isOpen && (
          <div
            className="absolute top-full left-0 mt-2 w-48 bg-[#3F4141] rounded-md shadow-lg py-2 z-50"
            onMouseLeave={() => setIsOpen(false)}
          >
            {options.map((option, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsOpen(false);
                  if (option.href.startsWith('/')) {
                    navigate(option.href);
                  } else {
                    window.location.href = option.href;
                  }
                }}
                className="block w-full text-left px-4 hover:text-[#06A956] py-2 text-sm text-white transition duration-150 ease-in-out"
              >
                {option.name}
              </button>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <a
      className="text-sm text-gray-700 hover:text-green-600 transition duration-150 ease-in-out"
      href={href}
    >
      {name}
    </a>
  );
};

export function Header() {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#E9F0F0] bg-opacity-95 backdrop-blur-sm shadow-md rounded-bl-[3em] rounded-br-[3em]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-22">
          <div
            className="flex-shrink-0 py-2"
            onClick={() => {
              navigate('/');
            }}
          >
            <Logo />
          </div>

          <nav className="hidden md:block">
            <div className="flex space-x-8">
              {navLinks.map((link) => (
                <NavItem key={link.name} {...link} />
              ))}
            </div>
          </nav>

          <div className="md:hidden">
            <button
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500"
              type="button"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                aria-hidden="true"
                className="block h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-[#E9F0F0] rounded-b-[2em]">
              {navLinks.map((link) => (
                <div key={link.name}>
                  {link.dropdown && link.options ? (
                    <div className="space-y-1">
                      <div className="text-gray-700 px-3 py-2 text-sm font-medium">
                        {link.name}
                      </div>
                      {link.options.map((option, index) => (
                        <button
                          key={index}
                          onClick={() => {
                            setIsMobileMenuOpen(false);
                            if (option.href.startsWith('/')) {
                              navigate(option.href);
                            } else {
                              window.location.href = option.href;
                            }
                          }}
                          className="block w-full text-left text-gray-600 hover:text-green-600 px-6 py-2 text-sm"
                        >
                          {option.name}
                        </button>
                      ))}
                    </div>
                  ) : (
                    <button
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        if (link.href.startsWith('/')) {
                          navigate(link.href);
                        } else {
                          window.location.href = link.href;
                        }
                      }}
                      className="block w-full text-left text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium"
                    >
                      {link.name}
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}


interface Properties {
  title: string;
}

export function Head({ title }: Properties) {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return <Header />;
}
