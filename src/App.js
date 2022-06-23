import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from "./Main";
import NotFound from "./NotFound";
import Header from "./Header";
import Footer from "./Footer";
import Randomchar from "./randomchar";
import Randombob from "./randombob";

import styles from "./App.module.css"

const App = () => {
  return(
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Header />
      <div className={styles.Layout}>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/randomchar" element={<Randomchar />}></Route>
          <Route path="/randombob" element={<Randombob />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </div>
      <Footer className={styles.bottom}/>
    </BrowserRouter>
  )
}
export default App;