import { Box, Container, Heading, Text } from "@chakra-ui/react";

const CustomerSupport = () => {
  return (
    <Box bg="white" color="black" minH="100vh" py={10}>
      <Container maxW="container.xl">
        <Heading as="h1" mb={6}>Customer Support</Heading>
        <Text>Contact form, customer service details, FAQ section, and clear policies on returns, privacy, and terms of service.</Text>
      </Container>
    </Box>
  );
};

export default CustomerSupport;