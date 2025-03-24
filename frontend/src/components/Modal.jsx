import {
  Button,
  CloseButton,
  Dialog,
  Portal,
  VStack,
  Input,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";

const Modal = ({
  product,
  onUpdate,
  onDelete,
  open,
  setOpen,
  isDelete = false,
}) => {
  const [updatedProduct, setUpdatedProduct] = useState(product);

  return (
    <Dialog.Root
      placement="center"
      lazyMount
      open={open}
      onOpenChange={(e) => setOpen(e.open)}
    >
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title fontSize="xl">
                {isDelete ? "Confirm Delete" : "Update Product"}
              </Dialog.Title>
            </Dialog.Header>
            <Dialog.Body>
              {isDelete ? (
                <Text fontSize="md">
                  Are you sure you want to delete <b>{product.name}</b>?
                </Text>
              ) : (
                <VStack gap="4">
                  <Input
                    fontSize="md"
                    placeholder="Product Name"
                    type="text"
                    name="name"
                    value={updatedProduct.name || ""}
                    onChange={(e) =>
                      setUpdatedProduct({
                        ...updatedProduct,
                        name: e.target.value,
                      })
                    }
                  />
                  <Input
                    placeholder="Product Price"
                    fontSize="md"
                    type="number"
                    name="price"
                    value={updatedProduct.price || ""}
                    onChange={(e) =>
                      setUpdatedProduct({
                        ...updatedProduct,
                        price: e.target.value,
                      })
                    }
                  />
                  <Input
                    placeholder="Product Image"
                    fontSize="md"
                    type="text"
                    name="image"
                    value={updatedProduct.image || ""}
                    onChange={(e) =>
                      setUpdatedProduct({
                        ...updatedProduct,
                        image: e.target.value,
                      })
                    }
                  />
                </VStack>
              )}
            </Dialog.Body>
            <Dialog.Footer>
              <Dialog.ActionTrigger asChild>
                <Button variant="outline">Cancel</Button>
              </Dialog.ActionTrigger>
              {isDelete ? (
                <Button
                  colorPalette="red"
                  onClick={() => onDelete(product._id)}
                >
                  Delete
                </Button>
              ) : (
                <Button onClick={() => onUpdate(product._id, updatedProduct)}>
                  Update
                </Button>
              )}
            </Dialog.Footer>
            <Dialog.CloseTrigger asChild>
              <CloseButton size="sm" />
            </Dialog.CloseTrigger>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
};

export default Modal;
