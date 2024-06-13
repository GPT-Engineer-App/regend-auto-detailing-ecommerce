import { Box, Container, Heading, Text } from "@chakra-ui/react";

const Contact = () => {
  return (
    <Box bg="white" color="black" minH="100vh" py={10}>
      <Container maxW="container.xl">
        <Heading as="h1" mb={6}>Contact</Heading>
        <Text>Contact form and details.</Text>
      </Container>
    </Box>
  );
};

export default Contact;