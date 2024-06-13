import { Box, Flex, Link, Image } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <Box bg="brand.700" color="white" py={4} px={8} boxShadow="md">
      <Flex justify="space-between" align="center">
        <Image src="/path/to/logo.png" alt="Regend Auto Detailing" boxSize="50px" />
        <Flex justify="space-around" align="center" flex="1">
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
      </Flex>
    </Box>
  );
};

export default Navigation;