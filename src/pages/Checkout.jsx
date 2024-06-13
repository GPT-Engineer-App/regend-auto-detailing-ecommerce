import { Box, Container, Heading, Text, Button } from "@chakra-ui/react";

const Checkout = () => {
  return (
    <Box bg="white" color="black" minH="100vh" py={10}>
      <Container maxW="container.xl">
        <Heading as="h1" mb={6}>Checkout</Heading>
        <Text>Secure payment methods including Visa, Mastercard, American Express, Apple Pay, Google Pay, and Union Pay, option to view and edit cart before finalizing the purchase, and transparent shipping costs and delivery options.</Text>
        <Button colorScheme="blue" mt={4}>Finalize Purchase</Button>
      </Container>
    </Box>
  );
};

export default Checkout;