import { Box, Container, VStack, Text, Button, SimpleGrid, Image, Link } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaShippingFast, FaTags, FaShoppingCart } from "react-icons/fa";

const promotionalBanners = [
  { text: "Free Shipping on Orders Over $50!", icon: FaShippingFast },
  { text: "Featured Products on Sale!", icon: FaTags },
];

const productCategories = [
  { name: "Exterior Products", link: "#" },
  { name: "Interior Products", link: "#" },
  { name: "Car Towels", link: "#" },
  { name: "Best Sellers", link: "#" },
];

const featuredProducts = [
  { name: "Premium Car Wax", price: "$29.99", image: "path/to/image1.jpg" },
  { name: "Interior Cleaner", price: "$19.99", image: "path/to/image2.jpg" },
  { name: "Microfiber Towels", price: "$9.99", image: "path/to/image3.jpg" },
];

const Index = () => {
  return (
    <Box bg="black" color="white" minH="100vh" py={10}>
      <Container maxW="container.xl">
        <VStack spacing={8} align="stretch">
          {promotionalBanners.map((banner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Box bg="green.500" p={4} borderRadius="md" display="flex" alignItems="center">
                <banner.icon size="24px" />
                <Text ml={2}>{banner.text}</Text>
              </Box>
            </motion.div>
          ))}

          <SimpleGrid columns={[2, null, 4]} spacing={4}>
            {productCategories.map((category, index) => (
              <Link key={index} href={category.link}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Box bg="yellow.500" p={4} borderRadius="md" textAlign="center">
                    <Text>{category.name}</Text>
                  </Box>
                </motion.div>
              </Link>
            ))}
          </SimpleGrid>

          <Text fontSize="2xl" fontWeight="bold">Featured Products</Text>
          <SimpleGrid columns={[1, null, 3]} spacing={4}>
            {featuredProducts.map((product, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Box bg="orange.500" p={4} borderRadius="md" textAlign="center">
                  <Image src={product.image} alt={product.name} mb={4} />
                  <Text fontSize="lg" fontWeight="bold">{product.name}</Text>
                  <Text>{product.price}</Text>
                  <Button leftIcon={<FaShoppingCart />} colorScheme="blackAlpha" variant="solid" mt={2}>
                    Buy Now
                  </Button>
                </Box>
              </motion.div>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
};

export default Index;