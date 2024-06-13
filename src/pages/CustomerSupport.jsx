import { Box, Container, Heading, Text } from "@chakra-ui/react";

const CustomerSupport = () => {
  return (
    <Box bg="brand.900" color="brand.500" minH="100vh" py={10}>
      <Container maxW="container.xl">
        <Heading as="h1" mb={6}>Customer Support</Heading>
        <Text _hover={{ color: "brand.400", transform: "scale(1.05)" }}>Contact form, customer service details, FAQ section, and clear policies on returns, privacy, and terms of service.</Text>
      </Container>
    </Box>
  );
};

export default CustomerSupport;