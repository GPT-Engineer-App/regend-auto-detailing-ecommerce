import { Box, Container, Heading, Text, VStack } from "@chakra-ui/react";

const blogPosts = [
  { title: "Car Care Tips", content: "Learn how to take care of your car with our expert tips." },
  { title: "Product Reviews", content: "Read reviews of our latest products." },
  { title: "Industry News", content: "Stay updated with the latest news in the car care industry." },
];

const Blog = () => {
  return (
    <Box bg="brand.900" color="brand.500" minH="100vh" py={10}>
      <Container maxW="container.xl">
        <Heading as="h1" mb={6}>Blog</Heading>
        <VStack spacing={8} align="stretch">
          {blogPosts.map((post, index) => (
            <Box key={index} bg="brand.700" p={4} borderRadius="md">
              <Heading as="h2" size="md" mb={2}>{post.title}</Heading>
              <Text>{post.content}</Text>
            </Box>
          ))}
        </VStack>
      </Container>
    </Box>
  );
};

export default Blog;