import React, { useState, useEffect } from "react";
import {
  Pressable,
  Box,
  Modal,
  Avatar,
  Text,
  HStack,
  VStack,
  Radio,
  useToast,
  Select,
  useColorMode,
} from "native-base";


const UploadModal = (props) => {
  const [service, setService] = React.useState("");
  const [showModal, setShowModal] = useState(true);
  

  return (
    <Modal
      bottom={insets.bottom}
      size="md"
      avoidKeyboard
      justifyContent="flex-end"
      closeOnOverlayClick={true}
      isOpen={showModal}
      onClose={() => props.onShow()}
    >
      <VStack
        borderTopRadius={"16"}
        bg={ThemeColor(colorMode)}
        h="40"
        w="full"
        px={"5"}
        mt={"1"}
      >
        <HStack mt={"5"} h={"26"} w={"full"}></HStack>

        <Pressable
          onPress={() => {
            props.onShow("live");
          }}
        >
          <HStack
            space={"5"}
            alignContent={"center"}
            justifyContent={"center"}
            h={"7"}
            w={"full"}
          >

            <Text
              alignSelf={"center"}
              textAlign={"left"}
              w={"83%"}
              fontSize={"lg"}
              color={TextColor(colorMode)}
              fontFamily={"body"}
              fontWeight={"100"}
            >
          test
            </Text>
          </HStack>
        </Pressable>

        <Pressable
          
        >
          <HStack
            mt={"10"}
            space={"5"}
            alignContent={"center"}
            justifyContent={"center"}
            h={"7"}
            w={"full"}
          >

            <Text
              alignSelf={"center"}
              textAlign={"left"}
              w={"83%"}
              fontSize={"lg"}
              color={TextColor(colorMode)}
              fontFamily={"body"}
              fontWeight={"100"}
            >
             test
            </Text>
          </HStack>
        </Pressable>
      </VStack>
    </Modal>
  );
};

export default UploadModal;