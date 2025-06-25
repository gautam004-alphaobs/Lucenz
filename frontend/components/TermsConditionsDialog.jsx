import { Box, Text, VStack, IconButton, Modal, ModalOverlay, ModalContent } from "@chakra-ui/react"

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.55806 5.05806C4.80214 4.81398 5.19786 4.81398 5.44194 5.05806L10 9.61612L14.5581 5.05806C14.8021 4.81398 15.1979 4.81398 15.4419 5.05806C15.686 5.30214 15.686 5.69786 15.4419 5.94194L10.8839 10.5L15.4419 15.0581C15.686 15.3021 15.686 15.6979 15.4419 15.9419C15.1979 16.186 14.8021 16.186 14.5581 15.9419L10 11.3839L5.44194 15.9419C5.19786 16.186 4.80214 16.186 4.55806 15.9419C4.31398 15.6979 4.31398 15.3021 4.55806 15.0581L9.11612 10.5L4.55806 5.94194C4.31398 5.69786 4.31398 5.30214 4.55806 5.05806Z"
      fill="#0052BD"
    />
  </svg>
)

const TermsConditionsDialog = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="2xl" isCentered>
      <ModalOverlay 
        bg="rgba(0, 0, 0, 0.70)" 
        backdropFilter="blur(22px)"
      />
      <ModalContent width="645px" height="567px" bg="white" borderRadius="8px" position="relative" p="40px" m="20px">
        {/* Close Button */}
        <IconButton
          position="absolute"
          right="18px"
          top="20px"
          h="52px"
          w="52px"
          borderRadius="36px"
          border="1px solid #D9DBE0"
          bg="white"
          display="flex"
          justifyContent="center"
          alignItems="center"
          onClick={onClose}
          _hover={{ bg: "gray.50" }}
          icon={<CloseIcon />}
        />

        <VStack spacing="24px" align="stretch">
          {/* Title Box */}
          <VStack id="title_box" spacing="12px" align="stretch">
            <Text
              color="#1D1F23"
              fontFamily="Space Grotesk"
              fontSize="23px"
              fontWeight="600"
              lineHeight="20px"
              alignSelf="stretch"
              letterSpacing="0.0125em"
              marginTop="3.4px"
            >
              Terms & Conditions
            </Text>
            <Text
              color="#585D6A"
              fontFamily="IBM Plex Sans"
              fontSize="16px"
              fontWeight="400"
              lineHeight="20px"
              alignSelf="stretch"
              marginTop="3.3px"
              letterSpacing="-0.0075em"
            >
              By accessing or using this platform, you agree to the terms outlined below:
            </Text>
          </VStack>

          {/* Divider */}
          <Box h="1px" bg="#D3D7DF" alignSelf="stretch" />

          {/* Terms & Conditions Flex */}
          <VStack id="t&cFlex" spacing="8px" align="stretch">
            {/* Usage & Access */}
            <Text
              id="u&a"
              color="#1D1F23"
              fontFamily="IBM Plex Sans"
              fontSize="16px"
              fontWeight="400"
              lineHeight="20px"
              alignSelf="stretch"
              letterSpacing="-0.0075em"
              marginTop="-0.5px"
            >
              Usage & Access
            </Text>

            {/* Data Privacy */}
            <VStack id="dataPrivacy" spacing="1px" align="stretch">
              <Text
                color="#1D1F23"
                fontFamily="IBM Plex Sans"
                fontSize="16px"
                fontWeight="400"
                lineHeight="20px"
                alignSelf="stretch"
                letterSpacing="-0.0075em"
                marginTop="23px"
              >
                Data Privacy
              </Text>
              <Text
                color="#585D6A"
                fontFamily="IBM Plex Sans"
                fontSize="14px"
                fontWeight="400"
                lineHeight="18px"
                alignSelf="stretch"
                marginTop="1px"
                letterSpacing="-0.008em"
              >
                We are committed to maintaining the confidentiality of patient and clinical data. All usage must comply
                with HIPAA and relevant data protection regulations.
              </Text>
            </VStack>

            {/* Consent */}
            <VStack id="consent" spacing="1px" align="stretch">
              <Text
                color="#1D1F23"
                fontFamily="IBM Plex Sans"
                fontSize="16px"
                fontWeight="400"
                lineHeight="20px"
                alignSelf="stretch"
                letterSpacing="-0.0075em"
                marginTop="24px"
              >
                Consent
              </Text>
              <Text
                color="#585D6A"
                fontFamily="IBM Plex Sans"
                fontSize="14px"
                fontWeight="400"
                lineHeight="18px"
                alignSelf="stretch"
                marginTop="1.5px"
                letterSpacing="-0.008em"
              >
                By submitting prior authorization requests through this system, you confirm that the data is accurate
                and complete to the best of your knowledge.
              </Text>
            </VStack>

            {/* Limitations of Liability */}
            <VStack id="liabilityLimitations" spacing="1px" align="stretch">
              <Text
                color="#1D1F23"
                fontFamily="IBM Plex Sans"
                fontSize="16px"
                fontWeight="400"
                lineHeight="20px"
                alignSelf="stretch"
                letterSpacing="-0.0075em"
                marginTop="24px"
              >
                Limitations of Liability
              </Text>
              <Text
                color="#585D6A"
                fontFamily="IBM Plex Sans"
                fontSize="14px"
                fontWeight="400"
                lineHeight="18px"
                alignSelf="stretch"
                marginTop="1.5px"
                letterSpacing="-0.008em" 
              >
                Lucenz and affiliated providers are not liable for delays or denials arising from incomplete
                documentation or insurer-side issues.
              </Text>
            </VStack>

            {/* Amendments */}
            <VStack id="amendments" spacing="1px" align="stretch" width="570px">
              <Text
                color="#1D1F23"
                fontFamily="IBM Plex Sans"
                fontSize="16px"
                fontWeight="400"
                lineHeight="20px"
                alignSelf="stretch"
                letterSpacing="-0.0075em"
                marginTop="24px"
              >
                Amendments
              </Text>
              <Text
                color="#585D6A"
                fontFamily="IBM Plex Sans"
                fontSize="14px"
                fontWeight="400"
                lineHeight="18px"
                alignSelf="stretch"
                marginTop="1.5px"
                letterSpacing="-0.008em"
              >
                These terms may be updated periodically. Continued use of the platform implies acceptance
                of the latest version.
              </Text>
            </VStack>
          </VStack>
        </VStack>
      </ModalContent>
    </Modal>
  )
}

export default TermsConditionsDialog 