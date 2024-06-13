import { Box, Flex, Link, Image, IconButton, useDisclosure, VStack, HStack } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

const Navigation = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box bg="brand.900" color="brand.500" py={{ base: 4, md: 6 }} px={{ base: 4, md: 8 }} boxShadow="md">
      <Flex justify="space-between" align="center">
        <Image src="/path/to/logo.png" alt="Regend Auto Detailing" boxSize="50px" />
        <IconButton
          display={{ base: "block", md: "none" }}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
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
        </VStack>
      )}
    </Box>
  );
};

export default Navigation;