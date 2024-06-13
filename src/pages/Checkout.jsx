import { Box, Container, Heading, Text, Button } from "@chakra-ui/react";

const Checkout = () => {
  return (
    <Box bg="brand.900" color="brand.500" minH="100vh" py={10}>
      <Container maxW="container.xl">
        <Heading as="h1" mb={6}>Checkout</Heading>
        <Text _hover={{ color: "brand.400", transform: "scale(1.05)" }}>Secure payment methods including Visa, Mastercard, American Express, Apple Pay, Google Pay, and Union Pay, option to view and edit cart before finalizing the purchase, and transparent shipping costs and delivery options.</Text>
        <Button colorScheme="brand" mt={4} _hover={{ bg: "brand.400", transform: "scale(1.05)" }}>Finalize Purchase</Button>
      </Container>
    </Box>
  );
};

export default Checkout;