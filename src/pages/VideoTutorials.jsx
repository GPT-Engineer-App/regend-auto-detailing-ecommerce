import { Box, Container, Heading, Text, VStack } from "@chakra-ui/react";

const videoTutorials = [
  { title: "How to Wax Your Car", url: "https://www.youtube.com/embed/VIDEO_ID_1" },
  { title: "Interior Cleaning Tips", url: "https://www.youtube.com/embed/VIDEO_ID_2" },
  { title: "Using Microfiber Towels", url: "https://www.youtube.com/embed/VIDEO_ID_3" },
];

const VideoTutorials = () => {
  return (
    <Box bg="brand.900" color="brand.500" minH="100vh" py={10}>
      <Container maxW="container.xl">
        <Heading as="h1" mb={6}>Video Tutorials</Heading>
        <VStack spacing={8} align="stretch">
          {videoTutorials.map((video, index) => (
            <Box key={index} bg="brand.700" p={4} borderRadius="md">
              <Heading as="h2" size="md" mb={2}>{video.title}</Heading>
              <Box as="iframe" width="100%" height="315" src={video.url} frameBorder="0" allowFullScreen></Box>
            </Box>
          ))}
        </VStack>
      </Container>
    </Box>
  );
};

export default VideoTutorials;