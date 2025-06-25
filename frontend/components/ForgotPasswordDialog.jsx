import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Box,
  Text,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Button,
  IconButton,
  VStack,
} from "@chakra-ui/react"
import { useState } from "react"
import "@fontsource/ibm-plex-sans"
import "@fontsource/space-grotesk"

export const ForgotPasswordDialog = ({ isOpen, onClose, onSendResetLink }) => {
  const [email, setEmail] = useState("")

  const handleSendResetLink = () => {
    if (email.trim()) {
      onSendResetLink(email)
      onClose()
    }
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay 
        bg="rgba(0, 0, 0, 0.70)" 
        backdropFilter="blur(22px)"
      />
      <ModalContent
        maxW="550px"
        w="550px"
        height="326px"
        p="36px"
        borderRadius="12px"
        bg="#FFF"
        boxShadow="0px 0px 60px 0px rgba(0, 0, 0, 0.15)"
        position="relative"
        marginTop="278px"
      >
        {/* Close Button */}
        <IconButton
          aria-label="Close dialog"
          icon={
            <svg width="20" height="21" viewBox="0 0 20 21" fill="none">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.55806 5.00337C4.80214 4.75929 5.19786 4.75929 5.44194 5.00337L10 9.56143L14.5581 5.00337C14.8021 4.75929 15.1979 4.75929 15.4419 5.00337C15.686 5.24745 15.686 5.64318 15.4419 5.88725L10.8839 10.4453L15.4419 15.0034C15.686 15.2474 15.686 15.6432 15.4419 15.8873C15.1979 16.1313 14.8021 16.1313 14.5581 15.8873L10 11.3292L5.44194 15.8873C5.19786 16.1313 4.80214 16.1313 4.55806 15.8873C4.31398 15.6432 4.31398 15.2474 4.55806 15.0034L9.11612 10.4453L4.55806 5.88725C4.31398 5.64318 4.31398 5.24745 4.55806 5.00337Z"
                fill="#0052BD"
              />
            </svg>
          }
          position="absolute"
          right="20px"
          top="20px"
          h="52px"
          w="52px"
          borderRadius="36px"
          border="1px solid #D9DBE0"
          bg="transparent"
          _hover={{ bg: "rgba(0, 0, 0, 0.05)" }}
          _active={{ bg: "rgba(0, 0, 0, 0.1)" }}
          onClick={onClose}
        />

        <ModalBody p="0">
          <VStack spacing="24px" align="stretch">
            {/* Title */}
            <Text
              color="#1D1F23"
              textAlign="center"
              fontFamily="Space Grotesk"
              fontSize="23.5px"
              fontWeight="600"
              lineHeight="28px"
              alignSelf="stretch"
              fontStyle="normal"
            >
              Forgot your password?
            </Text>

            {/* Description */}
            <Text
              color="#585D6A"
              textAlign="center"
              fontFamily="IBM Plex Sans"
              fontSize="15.5px"
              fontWeight="400"
              letterSpacing="0.005em"
              lineHeight="19px"
              alignSelf="stretch"
              marginTop="-12.4px"
            >
              Enter your registered email and
            </Text>
            <Text
              color="#585D6A"
              textAlign="center"
              fontFamily="IBM Plex Sans"
              fontSize="15.5px"
              fontWeight="400"
              letterSpacing="0.005em"
              lineHeight="20px"
              alignSelf="stretch"
              marginTop={"-23px"}
            >
              we'll send you a link to reset your password
            </Text>

            {/* Email Input */}
            <Box>
              <FormLabel
                color="#585D6A"
                fontFamily="IBM Plex Sans"
                fontSize="16px"
                fontWeight="400"
                lineHeight="20px"
                mb="8px"
                marginTop="-2px"
              >
                Email
              </FormLabel>

              <InputGroup>
                <InputLeftElement pointerEvents="none" h="20px" w="20px" ml="23.5px" mt="15.5px">
                  <svg width="20" height="21" viewBox="0 0 20 21" fill="none">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4.16667 5.23706C3.8904 5.23706 3.62545 5.34681 3.4301 5.54216C3.30832 5.66393 3.21981 5.81276 3.17041 5.97451L10 10.5276L16.8296 5.97451C16.7802 5.81276 16.6917 5.66393 16.5699 5.54216C16.3746 5.34681 16.1096 5.23706 15.8333 5.23706H4.16667ZM16.875 7.44655L10.3467 11.7988C10.1368 11.9387 9.86325 11.9387 9.65331 11.7988L3.125 7.44655V14.6121C3.125 14.8883 3.23475 15.1533 3.4301 15.3486C3.62545 15.544 3.8904 15.6537 4.16667 15.6537H15.8333C16.1096 15.6537 16.3746 15.544 16.5699 15.3486C16.7653 15.1533 16.875 14.8883 16.875 14.6121V7.44655ZM2.54621 4.65827C2.97598 4.2285 3.55888 3.98706 4.16667 3.98706H15.8333C16.4411 3.98706 17.024 4.2285 17.4538 4.65827C17.8836 5.08804 18.125 5.67094 18.125 6.27873V14.6121C18.125 15.2198 17.8836 15.8027 17.4538 16.2325C17.024 16.6623 16.4411 16.9037 15.8333 16.9037H4.16667C3.55888 16.9037 2.97598 16.6623 2.54621 16.2325C2.11644 15.8027 1.875 15.2198 1.875 14.6121V6.27873C1.875 5.67094 2.11644 5.08805 2.54621 4.65827Z"
                      fill="#929BB0"
                    />
                  </svg>
                </InputLeftElement>

                <Input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter registered email"
                  pl="58px"
                  pr="24px"
                  pt="17px"
                  pb="16px"
                  h="50.5px"
                  borderRadius="8px"
                  border="none"
                  borderBottom="1px solid #BEC3D0"
                  bg="#F4F5F7"
                  fontFamily="IBM Plex Sans"
                  fontSize="16px"
                  fontWeight="400"
                  lineHeight="20px"
                  color="black"
                  _placeholder={{
                    color: "#757C8D",
                    fontFamily: "IBM Plex Sans",
                    letterSpacing: "-0.0075em",
                  }}
                  _focus={{
                    borderBottom: "2px solid #0052BD",
                    boxShadow: "none",
                  }}
                />
              </InputGroup>
            </Box>

            {/* Send Reset Link Button */}
            <Box alignSelf="end">
              <Button
                w="169px"
                h="50px"
                py="16px"
                px="24px"
                borderRadius="8px"
                bg={email.trim() ? "#0052BD" : "#E9EBEF"}
                color={email.trim() ? "white" : "#929BB0"}
                fontFamily="IBM Plex Sans"
                fontSize="16px"
                fontWeight="600"
                lineHeight="20px"
                letterSpacing="0.45px"
                textTransform="capitalize"
                isDisabled={!email.trim()}
                onClick={handleSendResetLink}
                _hover={{
                  bg: email.trim() ? "#003d8f" : "#E9EBEF",
                }}
                _active={{
                  bg: email.trim() ? "#002f6b" : "#E9EBEF",
                }}
                _disabled={{
                  bg: "#E9EBEF",
                  color: "#929BB0",
                  cursor: "not-allowed",
                }}
              >
                Send Reset Link
              </Button>
            </Box>
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}
