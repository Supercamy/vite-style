import React from 'react';
import NavigationMenuDemo from './NavigationMenuDemo';

const nav = () => {
  return (
    <header className='container z-40 bg-background'>
      <div className='flex h-20 items-center justify-between py-6'>
        <div className='flex gap-6 md:gap-10'>
          <a className='hidden items-center space-x-2 md:flex' href='/'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              stroke-width='2'
              stroke-linecap='round'
              stroke-linejoin='round'
              className='lucide lucide-command'
            >
              <path d='M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z'></path>
            </svg>
            <span className='hidden font-bold sm:inline-block'>Taxonomy</span>
          </a>
          <NavigationMenuDemo />

          {/* <nav className='hidden gap-6 md:flex'>
            <a
              className='flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm text-foreground/60'
              href='/#features'
            >
              Features
            </a>
            <a
              className='flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm text-foreground/60'
              href='/pricing'
            >
              Pricing
            </a>
            <a
              className='flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm text-foreground/60'
              href='/blog'
            >
              Blog
            </a>
            <a
              className='flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm text-foreground/60'
              href='/docs'
            >
              Documentation
            </a>
          </nav> */}
          <button className='flex items-center space-x-2 md:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              stroke-width='2'
              stroke-linecap='round'
              stroke-linejoin='round'
              className='lucide lucide-command'
            >
              <path d='M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z'></path>
            </svg>
            <span className='font-bold'>Menu</span>
          </button>
        </div>
        <nav>
          <a
            className='inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-secondary text-secondary-foreground hover:bg-secondary/80 h-9 rounded-md px-4'
            href='/login'
          >
            Login
          </a>
        </nav>
      </div>
    </header>
  );
};

export default nav;
