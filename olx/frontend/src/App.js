import React from 'react';
import { connect } from 'react-redux';
import { Routes } from './Routes';

import { Template } from './components/MainComponents';
import Header from './components/partials/Header';
import Footer from './components/partials/Footer';

const Page = (Props) => {
  return (
    <div>
      <Template>  
        <Header/>   

        <Routes />

        <Footer/>
      </Template> 
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = (dispath) => {
  return {

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Page);
