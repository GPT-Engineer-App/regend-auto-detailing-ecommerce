import { Box, Container, Heading, Text, Button } from "@chakra-ui/react";

const Cart = () => {
  return (
    <Box bg="brand.900" color="brand.500" minH="100vh" py={10}>
      <Container maxW="container.xl">
        <Heading as="h1" mb={6}>Shopping Cart</Heading>
        <Text _hover={{ color: "brand.400", transform: "scale(1.05)" }}>Simple and intuitive cart view, options to continue shopping or proceed to checkout, and clear display of added items with quantities and prices.</Text>
    <Button colorScheme="brand" mt={4} _hover={{ bg: "brand.400", transform: "scale(1.05)" }}>Proceed to Checkout</Button>
      </Container>
    </Box>
  );
};

export default Cart;