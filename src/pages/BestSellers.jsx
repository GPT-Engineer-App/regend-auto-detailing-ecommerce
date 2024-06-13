import { Box, Container, Heading, Text } from "@chakra-ui/react";

const BestSellers = () => {
  return (
    <Box bg="white" color="black" minH="100vh" py={10}>
      <Container maxW="container.xl">
        <Heading as="h1" mb={6}>Best Sellers</Heading>
        <Text>Details about best selling products.</Text>
      </Container>
    </Box>
  );
};

export default BestSellers;