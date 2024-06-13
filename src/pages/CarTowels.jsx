import { Box, Container, Heading, Text } from "@chakra-ui/react";

const CarTowels = () => {
  return (
    <Box bg="brand.900" color="brand.500" minH="100vh" py={10}>
      <Container maxW="container.xl">
        <Heading as="h1" mb={6}>Car Towels</Heading>
        <Text _hover={{ color: "brand.400", transform: "scale(1.05)" }}>Details about car towels.</Text>
      </Container>
    </Box>
  );
};

export default CarTowels;