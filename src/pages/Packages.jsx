import { Box, Container, Heading, Text } from "@chakra-ui/react";

const Packages = () => {
  return (
    <Box bg="white" color="black" minH="100vh" py={10}>
      <Container maxW="container.xl">
        <Heading as="h1" mb={6}>Packages</Heading>
        <Text>Details about various packages offered.</Text>
      </Container>
    </Box>
  );
};

export default Packages;