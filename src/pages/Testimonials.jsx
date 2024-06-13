import { Box, Container, Heading, Text, VStack } from "@chakra-ui/react";

const testimonials = [
  { name: "John Doe", text: "Great service and products!" },
  { name: "Jane Smith", text: "Highly recommend Regend Auto Detailing!" },
  { name: "Sam Wilson", text: "Excellent customer support and quality." },
];

const Testimonials = () => {
  return (
    <Box bg="brand.900" color="brand.500" minH="100vh" py={10}>
      <Container maxW="container.xl">
        <Heading as="h1" mb={6}>Customer Testimonials</Heading>
        <VStack spacing={8} align="stretch">
          {testimonials.map((testimonial, index) => (
            <Box key={index} bg="brand.700" p={4} borderRadius="md">
              <Text fontWeight="bold">{testimonial.name}</Text>
              <Text>{testimonial.text}</Text>
            </Box>
          ))}
        </VStack>
      </Container>
    </Box>
  );
};

export default Testimonials;