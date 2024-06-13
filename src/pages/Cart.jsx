import { Box, Container, Heading, Text, Button } from "@chakra-ui/react";

const Cart = () => {
  return (
    <Box bg="white" color="black" minH="100vh" py={10}>
      <Container maxW="container.xl">
        <Heading as="h1" mb={6}>Shopping Cart</Heading>
        <Text>Simple and intuitive cart view, options to continue shopping or proceed to checkout, and clear display of added items with quantities and prices.</Text>
        <Button colorScheme="blue" mt={4}>Proceed to Checkout</Button>
      </Container>
    </Box>
  );
};

export default Cart;