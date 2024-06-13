import { Box, Container, Heading, Text } from "@chakra-ui/react";

const CarTowels = () => {
  return (
    <Box bg="white" color="black" minH="100vh" py={10}>
      <Container maxW="container.xl">
        <Heading as="h1" mb={6}>Car Towels</Heading>
        <Text>Details about car towels.</Text>
      </Container>
    </Box>
  );
};

export default CarTowels;