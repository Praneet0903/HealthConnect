import React from 'react'
import Head from '../components/Head/Head'
import Footer from '../components/Footer/Footer'
import Router from '../Router/Router'

const Layout = () => {
  return ( <>
  <Head/>
  <main>
    <Router/>
  </main>
  <Footer/>
  </>
  );
  
}

export default Layout