import { Box, Flex, Link, Image } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <Box bg="brand.900" color="brand.500" py={4} px={8} boxShadow="md">
      <Flex justify="space-between" align="center">
        <Image src="/path/to/logo.png" alt="Regend Auto Detailing" boxSize="50px" />
        <Flex justify="space-around" align="center" flex="1">
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
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navigation;