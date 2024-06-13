import { Box, Container, Heading, Text, VStack } from "@chakra-ui/react";

const LoyaltyProgram = () => {
  return (
    <Box bg="brand.900" color="brand.500" minH="100vh" py={10}>
      <Container maxW="container.xl">
        <Heading as="h1" mb={6}>Loyalty Program</Heading>
        <VStack spacing={8} align="stretch">
          <Box bg="brand.700" p={4} borderRadius="md">
            <Text>Join our loyalty program and earn points with every purchase!</Text>
          </Box>
          <Box bg="brand.700" p={4} borderRadius="md">
            <Text>Redeem points for discounts and exclusive offers.</Text>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};

export default LoyaltyProgram;