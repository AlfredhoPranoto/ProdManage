import { Box, Button, Container, Flex, HStack, Text } from "@chakra-ui/react";
import { BsMoonFill, BsPlusSquare, BsSunFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useColorMode, useColorModeValue } from "./ui/color-mode";
import { FaBoxOpen } from "react-icons/fa";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const cartColor = useColorModeValue("black", "white");

  return (
    <Container maxW="1140px" px="4">
      <Flex
        h="20"
        alignItems="center"
        justifyContent="space-between"
        flexDir={{
          base: "column",
          sm: "row",
        }}
      >
        <Box
          as="span"
          fontSize={{ base: "22px", sm: "28px" }}
          fontWeight="bold"
          textTransform="uppercase"
          textAlign="center"
          bgGradient="to-r"
          gradientFrom="purple.400"
          gradientTo="blue.500"
          bgClip="text"
        >
          <Link to="/">
            <Flex alignItems="center" gap="10px">
              ProdManage <FaBoxOpen color={cartColor} />
            </Flex>
          </Link>
        </Box>
        <HStack gap="2" alignItems="center">
          <Link to="/create">
            <Button>
              <BsPlusSquare fontSize="20" />
            </Button>
          </Link>
          <Button onClick={toggleColorMode}>
            {colorMode === "light" ? <BsMoonFill /> : <BsSunFill />}
          </Button>
        </HStack>
      </Flex>
    </Container>
  );
};

export default Navbar;
