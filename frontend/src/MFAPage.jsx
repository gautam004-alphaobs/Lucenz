import { Box, Text, Button, Divider } from "@chakra-ui/react"
import { useState } from "react"
import BgImg from "./assets/BgImg.svg"
import getHelp from "./assets/getHelp.svg"
import Icon1 from "./assets/icon1.svg"
import iconMFA from "./assets/iconMFA.svg"
import "@fontsource/ibm-plex-sans"
import "@fontsource/space-grotesk"

function MFAPage({ onBack }) {
  const [mfaCode, setMfaCode] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleVerifyCode = () => {
    setIsLoading(true)
    // Here you would typically make an API call to verify the MFA code
    console.log("Verifying MFA code:", mfaCode)
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      // Handle success/failure logic here
    }, 2000)
  }

  const handleBackToLogin = () => {
    if (onBack) {
      onBack()
    }
  }

  const handleSetupAuthenticator = () => {
    console.log("Setting up authenticator...")
    // Handle setup authenticator logic here
  }

  return (
    <>
      <style>
        {`
          .chakra-tabs__tab[aria-selected="true"] .tab-svg {
            filter: brightness(0) saturate(100%) invert(27%) sepia(51%) saturate(2878%) hue-rotate(86deg) brightness(94%) contrast(101%) !important;
          }
        `}
      </style>
      <Box
        maxH="900px"
        w="1140px"
        h="880px"
        bg="var(--Neutrals-900, #1D1F23)"
        bgImage={`url(${BgImg})`}
        bgRepeat="no-repeat"
        bgSize="98%"
        bgPosition="1.1px 1px"
        display="flex"
        justifyContent="center"
        flexShrink={0}
        position="relative"
      >
        <Box position="absolute" top="58px" left="57.5px" zIndex={3} pointerEvents="none">
          <img src={Icon1 || "/placeholder.svg"} alt="Icon" width="140px" height="136px" />
        </Box>

        <Box
          position="fixed"
          top="0"
          left="0"
          w="100vw"
          h="100vh"
          bg="linear-gradient(90deg, rgba(255, 255, 255, 0.00) 0%, #FFF 72.71%), radial-gradient(59.84% 43.88% at 0% 0%, #FFF 0%, rgba(255, 255, 255, 0.00) 100%)"
          pointerEvents="none"
          zIndex="1"
        />
        <Box
          id="card"
          display="flex"
          w="765px"
          h="840px"
          marginTop="19.5px"
          marginLeft="880px"
          flexDirection="column"
          justifyContent="space-between"
          alignItems="center"
          gap="60px"
          flexShrink={0}
          borderRadius="12px"
          border="1px solid #E9EBEF"
          bg="white"
          boxShadow="0px 0px 80px 0px rgba(0, 0, 0, 0.20)"
          zIndex={2}
          position="relative"
        >
          <Box
            id="mfa_1_frame"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap="24px"
            flex="1 0 0"
            alignSelf="stretch"
            position="relative"
          >
            {/* Logo positioned absolutely */}
            <Box position="absolute" top="275.5px" left="50.15%" transform="translateX(-50%)" zIndex={10} marginTop="-26px">
              <img src={iconMFA} alt="MFA Icon" width="199.99" height="36" />
            </Box>

            {/* Title */}
            <Text
              alignSelf="stretch"
              color="var(--Neutrals-900, #1D1F23)"
              textAlign="center"
              fontFeatureSettings="'liga' off, 'clig' off"
              fontFamily="Space Grotesk"
              fontSize="24px"
              fontStyle="normal"
              fontWeight="600"
              lineHeight="28px"
              letterSpacing="-0.01em"
              ml="2px"
              position="absolute"
              top="309px"
              left="100px"
            >
              Protect Your Account with 2-Step Authentication
            </Text>

            {/* Description */}
            <Text
              alignSelf="stretch"
              color="var(--Neutrals-900, #1D1F23)"
              textAlign="center"
              fontFeatureSettings="'liga' off, 'clig' off"
              fontFamily="IBM Plex Sans"
              fontSize="16px"
              fontStyle="normal"
              fontWeight="400"
              lineHeight="20px"
              letterSpacing="-0.0075em"
              mt="138px"
              ml="1px"
            >
              Our priority is to protect your patient's protected health information (PHI). 2-step
            </Text>
            <Text
              alignSelf="stretch"
              color="var(--Neutrals-900, #1D1F23)"
              textAlign="center"
              fontFeatureSettings="'liga' off, 'clig' off"
              fontFamily="IBM Plex Sans"
              fontSize="16px"
              fontStyle="normal"
              fontWeight="400"
              lineHeight="20px"
              letterSpacing="-0.0075em"
              mt="-24px"
              ml="1px"
            >
              authentication provides another level of security to make sure the person logging in is
            </Text>
            <Text
              alignSelf="stretch"
              color="var(--Neutrals-900, #1D1F23)"
              textAlign="center"
              fontFeatureSettings="'liga' off, 'clig' off"
              fontFamily="IBM Plex Sans"
              fontSize="16px"
              fontStyle="normal"
              fontWeight="400"
              lineHeight="20px"
              letterSpacing="-0.0075em"
              mt="-24px"
              ml="1px"
            >
              actually you.
            </Text>

            {/* Button */}
            <Button
              onClick={handleSetupAuthenticator}
              width="236.5px"
              height="51.5px"
              display="flex"
              padding="16px 24px"
              justifyContent="center"
              alignItems="center"
              gap="12px"
              borderRadius="8px"
              bg="var(--Primary---Marian-Blue-500, #0052BD)"
              boxShadow="0px 0px 15px 0px rgba(91, 141, 239, 0.30)"
              color="var(--Neutrals-0, #FFF)"
              textAlign="center"
              fontFeatureSettings="'liga' off, 'clig' off"
              fontFamily="IBM Plex Sans"
              fontSize="16px"
              fontStyle="normal"
              fontWeight="600"
              lineHeight="20px"
              letterSpacing="0.03em"
              textTransform="capitalize"
              position="absolute"
              top="442.5px"
              left="265px"
              rightIcon={
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                  <path
                    d="M7.5 15.9453L12.5 10.9453L7.5 5.94531"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              }
              _hover={{
                bg: "#003d8f",
              }}
              _active={{
                bg: "#002a5c",
              }}
              sx={{
                "& > span": {
                  marginLeft: "-1px"
                }
              }}
            >
              Set Up Authenticator
            </Button>
          </Box>

          <Divider
            h="1px"
            flexShrink={0}
            alignSelf="stretch"
            bg="#E9EBEF"
            w="646px"
            marginTop="-2px"
            //137
            marginBottom="97px"
            marginLeft={"60px"}
          />
          <Box position="absolute" top="800px" left="271.5px" zIndex={3} pointerEvents="none">
            <img src={getHelp || "/placeholder.svg"} alt="Icon" width="221.885px" height="19.9px" />
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default MFAPage
