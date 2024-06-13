import { Box, Container, Heading, Text } from "@chakra-ui/react";

const NewProducts = () => {
  return (
    <Box bg="white" color="black" minH="100vh" py={10}>
      <Container maxW="container.xl">
        <Heading as="h1" mb={6}>New Products</Heading>
        <Text>Details about new products.</Text>
      </Container>
    </Box>
  );
};

export default NewProducts;