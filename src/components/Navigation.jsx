import { Box, Flex, Link, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <Box bg="gray.800" color="white" py={4}>
      <Flex justify="space-around">
        <Link as={NavLink} to="/" exact>
          Home
        </Link>
        <Link as={NavLink} to="/packages">
          Packages
        </Link>
        <Link as={NavLink} to="/new-products">
          New Products
        </Link>
        <Link as={NavLink} to="/best-sellers">
          Best Sellers
        </Link>
        <Link as={NavLink} to="/car-towels">
          Car Towels
        </Link>
        <Link as={NavLink} to="/exterior-products">
          Exterior Products
        </Link>
        <Link as={NavLink} to="/interior-products">
          Interior Products
        </Link>
        <Link as={NavLink} to="/contact">
          Contact
        </Link>
      </Flex>
    </Box>
  );
};

export default Navigation;