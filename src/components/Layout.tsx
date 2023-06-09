import React from 'react';
import Head from 'next/head';
import { Box } from '@chakra-ui/react';

import Navbar from './Navbar';
import Footer from './Footer';

export interface StandardComponentProps {
  children: React.ReactNode
}

const Layout = ({children}: StandardComponentProps) => {
  return (
    <>
      <Head>
        <title>Real Estate</title>
      </Head> 
      <Box maxWidth='1280px' m='auto'>
        <header>
            <Navbar />
        </header>
        <main>
            {children}
        </main>
        <footer>
            <Footer />
        </footer>
      </Box>
    </>
  )
}

export default Layout;