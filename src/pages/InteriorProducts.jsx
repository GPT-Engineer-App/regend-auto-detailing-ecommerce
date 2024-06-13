import { Box, Container, Heading, Text } from "@chakra-ui/react";

const InteriorProducts = () => {
  return (
    <Box bg="white" color="black" minH="100vh" py={10}>
      <Container maxW="container.xl">
        <Heading as="h1" mb={6}>Interior Products</Heading>
        <Text>Details about interior products.</Text>
      </Container>
    </Box>
  );
};

export default InteriorProducts;