import Head from "next/head";

import Footer from "./Footer";
import Header from "./Header";


import "../styles/global.css";

const Layout = ({ children }) => {  
    return (
        <>
        <Header/>
            {children}
        <Footer />
        </>
    );
    }
