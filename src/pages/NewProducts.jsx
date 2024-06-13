import { Box, Container, Heading, Text } from "@chakra-ui/react";

const NewProducts = () => {
  return (
    <Box bg="brand.900" color="brand.500" minH="100vh" py={10}>
      <Container maxW="container.xl">
        <Heading as="h1" mb={6}>New Products</Heading>
        <Text _hover={{ color: "brand.400", transform: "scale(1.05)" }}>Details about new products.</Text>
      </Container>
    </Box>
  );
};

export default NewProducts;