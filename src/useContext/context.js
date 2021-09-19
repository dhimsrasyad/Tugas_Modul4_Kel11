import React, { useState } from "react";
import Content from './Content';
import Header from './Header';
import Footer from './Footer';

export const AppsContext = React.createContext({});
export default function App() {
  const [apps] = useState({
    username: "Dhimas",
    description: "Dhimas adalah seorang UI/UX designer",
    contact: [
      {
        label: "Instagram",
        url: "https://www.instagram.com/dhimsrasyad/"
      },
      {
        label: "Website",
        url: "https://dhimasrasyadr.com/"
      }
    ]
  });

  return (
    <AppsContext.Provider value={{ apps }}>
      <Header />
      <Content />
      <Footer />
    </AppsContext.Provider>
  );
}