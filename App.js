import React from 'react';
import { StatusBar } from 'react-native';
import Content from './src/components/Content/Content';
import Footer from './src/components/Footer/Footer';
import Header from './src/components/Header/Header';


export default function App() {
  return (
    <>
      <Header />
      <Content />
      <Footer />
      <StatusBar style='auto'/>
    </>
  );
}

