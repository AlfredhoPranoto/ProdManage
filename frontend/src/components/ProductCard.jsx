import {
  Box,
  Heading,
  Image,
  Text,
  HStack,
  IconButton,
} from "@chakra-ui/react";
import React from "react";
import { MdDelete, MdEdit } from "react-icons/md";
import { useColorModeValue } from "./ui/color-mode";

const ProductCard = ({ product, onDelete, onEdit }) => {
  const textColor = useColorModeValue("gray.600", "gray.200");
  const bg = useColorModeValue("white", "gray.800");

  return (
    <Box
      shadow="lg"
      rounded="lg"
      overflow="hidden"
      transition="all 0.3s"
      _hover={{ transform: "translateY(-5px)", shadow: "xl" }}
      bg={bg}
    >
      <Image
        src={product.image}
        alt={product.name}
        h="40"
        w="full"
        objectFit="cover"
      />
      <Box p="4">
        <Heading as="h3" size="md" mb="2">
          {product.name}
        </Heading>
        <Text fontWeight="bold" fontSize="xl" color={textColor} mb="4">
          {product.price.toLocaleString("en", {
            style: "currency",
            currency: "USD",
          })}
        </Text>
        <HStack>
          <IconButton colorPalette="blue" onClick={() => onEdit(product._id)}>
            <MdEdit />
          </IconButton>
          <IconButton colorPalette="red" onClick={() => onDelete(product._id)}>
            <MdDelete />
          </IconButton>
        </HStack>
      </Box>
    </Box>
  );
};

export default ProductCard;
