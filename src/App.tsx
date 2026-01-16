import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { ThemeProvider } from "./components/theme-provider";
import BlogDetailPage from "./pages/BlogDetailPage";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";

function App() {
  const [isLaptop, setIsLaptop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsLaptop(window.innerWidth >= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui">
      <Navbar isLaptop={isLaptop} />
      <Routes>
        <Route path="/" element={<Home isLaptop={isLaptop} />} />
        <Route path="/blog/:id" element={<BlogDetailPage isLaptop={isLaptop}/>}/>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
