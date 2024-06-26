import { Box, Flex, Link, Image, IconButton, useDisclosure, VStack, HStack } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navigation = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box bg="brand.900" color="brand.500" py={{ base: 4, md: 6 }} px={{ base: 4, md: 8 }} boxShadow="md">
      <Flex justify="space-between" align="center">
        <Image src="/path/to/logo.png" alt="Regend Auto Detailing" boxSize="50px" />
        <IconButton
          display={{ base: "block", md: "none" }}
          icon={isOpen ? <FaTimes /> : <FaBars />}
          aria-label="Toggle Navigation"
          onClick={isOpen ? onClose : onOpen}
          variant="ghost"
          color="brand.500"
        />
        <HStack
          as="nav"
          spacing={4}
          display={{ base: "none", md: "flex" }}
          flex="1"
          justify="space-around"
          align="center"
        >
          <Link as={NavLink} to="/" exact _hover={{ color: "brand.400", textDecoration: "underline" }}>
            Home
          </Link>
          <Link as={NavLink} to="/packages" _hover={{ color: "brand.400", textDecoration: "underline" }}>
            Packages
          </Link>
          <Link as={NavLink} to="/new-products" _hover={{ color: "brand.400", textDecoration: "underline" }}>
            New Products
          </Link>
          <Link as={NavLink} to="/best-sellers" _hover={{ color: "brand.400", textDecoration: "underline" }}>
            Best Sellers
          </Link>
          <Link as={NavLink} to="/car-towels" _hover={{ color: "brand.400", textDecoration: "underline" }}>
            Car Towels
          </Link>
          <Link as={NavLink} to="/exterior-products" _hover={{ color: "brand.400", textDecoration: "underline" }}>
            Exterior Products
          </Link>
          <Link as={NavLink} to="/interior-products" _hover={{ color: "brand.400", textDecoration: "underline" }}>
            Interior Products
          </Link>
          <Link as={NavLink} to="/contact" _hover={{ color: "brand.400", textDecoration: "underline" }}>
            Contact
          </Link>
          <Link as={NavLink} to="/cart" _hover={{ color: "brand.400", textDecoration: "underline" }}>
            Cart
          </Link>
          <Link as={NavLink} to="/checkout" _hover={{ color: "brand.400", textDecoration: "underline" }}>
            Checkout
          </Link>
          <Link as={NavLink} to="/customer-support" _hover={{ color: "brand.400", textDecoration: "underline" }}>
            Customer Support
          </Link>
          <Link as={NavLink} to="/testimonials" _hover={{ color: "brand.400", textDecoration: "underline" }}>
            Testimonials
          </Link>
          <Link as={NavLink} to="/blog" _hover={{ color: "brand.400", textDecoration: "underline" }}>
            Blog
          </Link>
          <Link as={NavLink} to="/loyalty-program" _hover={{ color: "brand.400", textDecoration: "underline" }}>
            Loyalty Program
          </Link>
          <Link as={NavLink} to="/video-tutorials" _hover={{ color: "brand.400", textDecoration: "underline" }}>
            Video Tutorials
          </Link>
        </HStack>
      </Flex>
      {isOpen && (
        <VStack
          as="nav"
          spacing={4}
          display={{ base: "flex", md: "none" }}
          mt={4}
        >
          <Link as={NavLink} to="/" exact _hover={{ color: "brand.400", textDecoration: "underline" }} onClick={onClose}>
            Home
          </Link>
          <Link as={NavLink} to="/packages" _hover={{ color: "brand.400", textDecoration: "underline" }} onClick={onClose}>
            Packages
          </Link>
          <Link as={NavLink} to="/new-products" _hover={{ color: "brand.400", textDecoration: "underline" }} onClick={onClose}>
            New Products
          </Link>
          <Link as={NavLink} to="/best-sellers" _hover={{ color: "brand.400", textDecoration: "underline" }} onClick={onClose}>
            Best Sellers
          </Link>
          <Link as={NavLink} to="/car-towels" _hover={{ color: "brand.400", textDecoration: "underline" }} onClick={onClose}>
            Car Towels
          </Link>
          <Link as={NavLink} to="/exterior-products" _hover={{ color: "brand.400", textDecoration: "underline" }} onClick={onClose}>
            Exterior Products
          </Link>
          <Link as={NavLink} to="/interior-products" _hover={{ color: "brand.400", textDecoration: "underline" }} onClick={onClose}>
            Interior Products
          </Link>
          <Link as={NavLink} to="/contact" _hover={{ color: "brand.400", textDecoration: "underline" }} onClick={onClose}>
            Contact
          </Link>
          <Link as={NavLink} to="/cart" _hover={{ color: "brand.400", textDecoration: "underline" }} onClick={onClose}>
            Cart
          </Link>
          <Link as={NavLink} to="/checkout" _hover={{ color: "brand.400", textDecoration: "underline" }} onClick={onClose}>
            Checkout
          </Link>
          <Link as={NavLink} to="/customer-support" _hover={{ color: "brand.400", textDecoration: "underline" }} onClick={onClose}>
            Customer Support
          </Link>
          <Link as={NavLink} to="/testimonials" _hover={{ color: "brand.400", textDecoration: "underline" }} onClick={onClose}>
            Testimonials
          </Link>
          <Link as={NavLink} to="/blog" _hover={{ color: "brand.400", textDecoration: "underline" }} onClick={onClose}>
            Blog
          </Link>
          <Link as={NavLink} to="/loyalty-program" _hover={{ color: "brand.400", textDecoration: "underline" }} onClick={onClose}>
            Loyalty Program
          </Link>
          <Link as={NavLink} to="/video-tutorials" _hover={{ color: "brand.400", textDecoration: "underline" }} onClick={onClose}>
            Video Tutorials
          </Link>
        </VStack>
      )}
    </Box>
  );
};

export default Navigation;