import { Box, Container, Heading, Text } from "@chakra-ui/react";

const BestSellers = () => {
  return (
    <Box bg="brand.900" color="brand.500" minH="100vh" py={10}>
      <Container maxW="container.xl">
        <Heading as="h1" mb={6}>Best Sellers</Heading>
        <Text _hover={{ color: "brand.400", transform: "scale(1.05)" }}>Details about best selling products.</Text>
      </Container>
    </Box>
  );
};

export default BestSellers;