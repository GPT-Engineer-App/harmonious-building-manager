import { Box, Button, Container, Flex, Heading, IconButton, Image, Stack, Text, useColorModeValue, VStack } from "@chakra-ui/react";
import { FaBuilding, FaHome, FaInfoCircle, FaRocket } from "react-icons/fa";

const Index = () => {
  const bgColor = useColorModeValue("white", "gray.800");
  const primaryColor = useColorModeValue("blue.500", "blue.200");
  const textColor = useColorModeValue("gray.600", "whiteAlpha.900");

  return (
    <Container maxW="container.xl" p={0}>
      <Flex direction="column" minHeight="100vh" bg={bgColor}>
        {/* Navigation Bar */}
        <Flex as="nav" align="center" justify="space-between" wrap="wrap" padding={4} bg="gray.100" color="black">
          <IconButton icon={<FaHome />} aria-label="Home" size="lg" variant="ghost" />
          <Stack direction="row" spacing={4}>
            <Button leftIcon={<FaBuilding />} colorScheme="teal" variant="solid">
              Buildings
            </Button>
            <Button leftIcon={<FaInfoCircle />} colorScheme="teal" variant="outline">
              About
            </Button>
          </Stack>
        </Flex>

        {/* Main Content */}
        <Flex direction="column" flex="1" p={8} align="center" justify="center">
          <VStack spacing={8}>
            <Heading as="h1" size="2xl" fontWeight="bold" color={primaryColor}>
              Building Management System
            </Heading>
            <Text fontSize="xl" color={textColor}>
              Manage your buildings efficiently and effectively.
            </Text>
            <Image src="https://images.unsplash.com/photo-1683022928379-851245eb5569?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBidWlsZGluZ3xlbnwwfHx8fDE3MTUzNTE2MzF8MA&ixlib=rb-4.0.3&q=80&w=1080" boxSize="300px" borderRadius="md" />
            <Button rightIcon={<FaRocket />} colorScheme="pink" size="lg">
              Get Started
            </Button>
          </VStack>
        </Flex>

        {/* Footer */}
        <Box as="footer" py={4} px={8} bg="gray.200" textAlign="center">
          <Text fontSize="sm">© 2023 Building Management Co. All rights reserved.</Text>
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;
