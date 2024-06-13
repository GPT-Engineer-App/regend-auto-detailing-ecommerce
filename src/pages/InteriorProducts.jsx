import { Box, Container, Heading, Text } from "@chakra-ui/react";

const InteriorProducts = () => {
  return (
    <Box bg="brand.900" color="brand.500" minH="100vh" py={10}>
      <Container maxW="container.xl">
        <Heading as="h1" mb={6}>Interior Products</Heading>
        <Text _hover={{ color: "brand.400", transform: "scale(1.05)" }}>Details about interior products.</Text>
      </Container>
    </Box>
  );
};

export default InteriorProducts;