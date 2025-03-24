import ProductCard from "@/components/ProductCard";
import { Toaster } from "@/components/ui/toaster";
import { useProductStore } from "@/store/product";
import { Container, VStack, Text, SimpleGrid, Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaRocket } from "react-icons/fa";
import { useColorModeValue } from "@/components/ui/color-mode";
import Modal from "@/components/Modal";
import { handleApiResponse } from "@/utils/apiHandler";

const HomePage = () => {
  const [modalState, setModalState] = useState({ type: null, product: null });
  const { fetchProducts, deleteProduct, updateProduct, products } =
    useProductStore();
  const rocketColor = useColorModeValue("black", "white");

  const handleDeleteProduct = async (id) => {
    await handleApiResponse(deleteProduct(id), () =>
      setModalState({ type: null, product: null })
    );
  };

  const handleUpdateProduct = async (id, updatedProduct) => {
    await handleApiResponse(updateProduct(id, updatedProduct), () =>
      setModalState({ type: null, product: null })
    );
  };

  const openModal = (type, id) => {
    const product = products.find((p) => p._id === id);
    setModalState({ type, product });
  };

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <Container maxW={{ base: "svw", sm: "1200px" }} py="12">
      <Toaster />
      <VStack gap="0">
        <Flex
          alignItems="center"
          gap="10px"
          fontSize="30px"
          fontWeight="bold"
          bgGradient="to-r"
          gradientFrom="purple.400"
          gradientTo="blue.500"
          bgClip="text"
          textAlign="center"
          mb="4"
        >
          <Text>Current Products</Text>
          <FaRocket color={rocketColor} />
        </Flex>

        {products.length > 0 ? (
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap="5" w="full">
            {products.map((product, index) => (
              <ProductCard
                onEdit={() => openModal("update", product._id)}
                onDelete={() => openModal("delete", product._id)}
                key={product._id || index}
                product={product}
              />
            ))}
          </SimpleGrid>
        ) : (
          <Text
            fontSize="xl"
            fontWeight="bold"
            color="gray.500"
            textAlign="center"
          >
            No products found 😢{" "}
            <Link to="/create">
              <Text
                as="span"
                color="blue.500"
                _hover={{ textDecoration: "underline" }}
              >
                Create a product
              </Text>
            </Link>
          </Text>
        )}
      </VStack>
      {modalState.product && (
        <Modal
          product={modalState.product}
          open={!!modalState.product}
          setOpen={() => setModalState({ type: null, product: null })}
          onUpdate={
            modalState.type === "update" ? handleUpdateProduct : undefined
          }
          onDelete={
            modalState.type === "delete" ? handleDeleteProduct : undefined
          }
          isDelete={modalState.type === "delete"}
        />
      )}
    </Container>
  );
};

export default HomePage;
