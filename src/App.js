import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Counter from "./Counter";
import Main from "./Main";
import NotFound from "./NotFound";
import Header from "./Header";
import Footer from "./Footer";
import styles from "./App.module.css"

const App = () => {
  return(
    <div className={styles.Layout}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/Counter" element={<Counter />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}
export default App;