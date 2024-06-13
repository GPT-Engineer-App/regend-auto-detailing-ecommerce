import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Packages from "./pages/Packages.jsx";
import NewProducts from "./pages/NewProducts.jsx";
import BestSellers from "./pages/BestSellers.jsx";
import CarTowels from "./pages/CarTowels.jsx";
import ExteriorProducts from "./pages/ExteriorProducts.jsx";
import InteriorProducts from "./pages/InteriorProducts.jsx";
import Contact from "./pages/Contact.jsx";
import ProductPage from "./pages/ProductPage.jsx";
import Cart from "./pages/Cart.jsx";
import Checkout from "./pages/Checkout.jsx";
import CustomerSupport from "./pages/CustomerSupport.jsx";
import Testimonials from "./pages/Testimonials.jsx";
import Blog from "./pages/Blog.jsx";
import LoyaltyProgram from "./pages/LoyaltyProgram.jsx";
import VideoTutorials from "./pages/VideoTutorials.jsx";
import Navigation from "./components/Navigation.jsx";
import LiveChat from "./components/LiveChat.jsx";
import { Box, Button } from "@chakra-ui/react";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/new-products" element={<NewProducts />} />
        <Route path="/best-sellers" element={<BestSellers />} />
        <Route path="/car-towels" element={<CarTowels />} />
        <Route path="/exterior-products" element={<ExteriorProducts />} />
        <Route path="/interior-products" element={<InteriorProducts />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/customer-support" element={<CustomerSupport />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/loyalty-program" element={<LoyaltyProgram />} />
        <Route path="/video-tutorials" element={<VideoTutorials />} />
      </Routes>
      <LiveChat />
      <Box position="fixed" bottom="20px" right="20px" zIndex="1000">
        <Button
          colorScheme="red"
          size="lg"
          onClick={() => window.location.href='/cart'}
          _hover={{ bg: "red.600", transform: "scale(1.05)" }}
        >
          Cart
        </Button>
      </Box>
    </Router>
  );
}

export default App;