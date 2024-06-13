import { Box, Container, Heading, Text, Image, Button } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

const ProductPage = () => {
  const { id } = useParams();

  return (
    <Box bg="white" color="black" minH="100vh" py={10}>
      <Container maxW="container.xl">
        <Heading as="h1" mb={6}>Product {id}</Heading>
        <Image src={`path/to/product-image-${id}.jpg`} alt={`Product ${id}`} mb={4} />
        <Text>High-quality image, detailed description, price information, "Add to Cart" button, customer reviews, ratings, and related products suggestions.</Text>
        <Button colorScheme="blue" mt={4}>Add to Cart</Button>
      </Container>
    </Box>
  );
};

export default ProductPage;