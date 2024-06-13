import { Box, Container, Heading, Text } from "@chakra-ui/react";

const ExteriorProducts = () => {
  return (
    <Box bg="white" color="black" minH="100vh" py={10}>
      <Container maxW="container.xl">
        <Heading as="h1" mb={6}>Exterior Products</Heading>
        <Text>Details about exterior products.</Text>
      </Container>
    </Box>
  );
};

export default ExteriorProducts;