import { useColorModeValue } from "@/components/ui/color-mode";
import { Toaster } from "@/components/ui/toaster";
import { useProductStore } from "@/store/product";
import { handleApiResponse } from "@/utils/apiHandler";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Input,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";

const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });

  const { createProduct } = useProductStore();

  const handleAddProduct = async () => {
    handleApiResponse(createProduct(newProduct));
    setNewProduct({ name: "", price: "", image: "" });
  };

  return (
    <Container maxW={{ base: "svw", sm: "680px" }} px={{ base: "10", md: 0 }}>
      <Toaster />
      <Flex flexDir="column" justifyContent="center" height="75svh">
        <VStack gap="0">
          <Heading as="h1" size="2xl" textAlign="center" mb="4">
            Create New Product
          </Heading>

          <Box
            w="full"
            bg={useColorModeValue("white", "gray.600")}
            p="6"
            shadow="md"
          >
            <VStack gap="4">
              <Input
                type="text"
                placeholder="Name"
                name="name"
                value={newProduct.name}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, name: e.target.value })
                }
              />
              <Input
                placeholder="Price"
                type="text"
                name="price"
                value={newProduct.price}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, price: e.target.value })
                }
              />
              <Input
                placeholder="Image URL"
                name="image"
                value={newProduct.image}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, image: e.target.value })
                }
              />

              <Button colorScheme="blue" onClick={handleAddProduct} w="full">
                Add Product
              </Button>
            </VStack>
          </Box>
        </VStack>
      </Flex>
    </Container>
  );
};

export default CreatePage;
