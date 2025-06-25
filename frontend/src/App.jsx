import { Box, Divider, Tabs, TabList, TabPanels, Tab, TabPanel, Input, FormLabel, VStack, InputGroup, InputLeftElement, Button, Image, useDisclosure } from "@chakra-ui/react"
import { useState } from "react"
import BgImg from "./assets/BgImg.svg"
import Icon1 from "./assets/icon1.svg"
import Icon2 from "./assets/icon2.svg"
import getHelp from "./assets/getHelp.svg"
import AdminTabSVG from "./assets/AdminTabSVG.svg"
import UserTabSVG from "./assets/UserTabSVG.svg"
import iconMail from "./assets/iconMail.svg"
import iconPw from "./assets/iconPw.svg"
import signInIcon from "./assets/signInIcon.svg"
import invalidUser from "./assets/invalidUser.svg"
import invalidPw from "./assets/invalidPw.svg"
import { userCredentials, adminCredentials } from "./testVariables"
import { ForgotPasswordDialog } from "../components/ForgotPasswordDialog.jsx"
import TermsConditionsDialog from "../components/TermsConditionsDialog.jsx"
import MFAPage from "./MFAPage.jsx"
import "@fontsource/ibm-plex-sans"

function App() {
  const [userEmail, setUserEmail] = useState("")
  const [userPassword, setUserPassword] = useState("")
  const [adminEmail, setAdminEmail] = useState("")
  const [adminPassword, setAdminPassword] = useState("")
  const [activeTab, setActiveTab] = useState(0)
  const [showUserErrors, setShowUserErrors] = useState(false)
  const [showAdminErrors, setShowAdminErrors] = useState(false)
  const [buttonPressed, setButtonPressed] = useState(false)
  const [currentPage, setCurrentPage] = useState("login") // "login" or "mfa"

  const { isOpen: isForgotPasswordOpen, onOpen: onForgotPasswordOpen, onClose: onForgotPasswordClose } = useDisclosure()
  const { isOpen: isTermsConditionsOpen, onOpen: onTermsConditionsOpen, onClose: onTermsConditionsClose } = useDisclosure()

  const isErrorStateActive = (activeTab === 0 && showUserErrors) || (activeTab === 1 && showAdminErrors)

  // Check if both fields have text for the active tab
  const isFormValid = activeTab === 0 
    ? userEmail.trim() !== "" && userPassword.trim() !== ""
    : adminEmail.trim() !== "" && adminPassword.trim() !== ""

  // Navigation handlers
  const handleIcon1Click = () => {
    setCurrentPage("mfa")
  }

  const handleBackToLogin = () => {
    setCurrentPage("login")
  }

  const handleTermsConditionsClick = () => {
    onTermsConditionsOpen()
  }

  // Authentication validation functions
  const validateUserCredentials = () => {
    const isValid = userCredentials[userEmail] === userPassword
    setShowUserErrors(!isValid)
    return isValid
  }

  const validateAdminCredentials = () => {
    const isValid = adminCredentials[adminEmail] === adminPassword
    setShowAdminErrors(!isValid)
    return isValid
  }

  const handleSignIn = () => {
    setButtonPressed(true)
    if (activeTab === 0) {
      validateUserCredentials()
    } else {
      validateAdminCredentials()
    }
  }

  const handleForgotPassword = () => {
    onForgotPasswordOpen()
  }

  const handleSendResetLink = (email) => {
    // Here you would typically make an API call to send the reset email
    console.log("Sending reset link to:", email)
    // For now, we'll just close the dialog
    // In a real app, you might show a success message or redirect to a confirmation page
  }

  // Clear errors when switching tabs
  const handleTabChange = (index) => {
    setActiveTab(index)
    setShowUserErrors(false)
    setShowAdminErrors(false)
    setButtonPressed(false)
  }

  // Clear errors when input changes
  const handleUserEmailChange = (e) => {
    setUserEmail(e.target.value)
    setShowUserErrors(false)
    setButtonPressed(false)
  }

  const handleUserPasswordChange = (e) => {
    setUserPassword(e.target.value)
    setShowUserErrors(false)
    setButtonPressed(false)
  }

  const handleAdminEmailChange = (e) => {
    setAdminEmail(e.target.value)
    setShowAdminErrors(false)
    setButtonPressed(false)
  }

  const handleAdminPasswordChange = (e) => {
    setAdminPassword(e.target.value)
    setShowAdminErrors(false)
    setButtonPressed(false)
  }

  // Render MFA page if current page is "mfa"
  if (currentPage === "mfa") {
    return <MFAPage onBack={handleBackToLogin} />
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
        <Box 
          position="absolute" 
          top="58px" 
          left="57.5px" 
          zIndex={3} 
          cursor="pointer"
          onClick={handleIcon1Click}
          _hover={{
            opacity: 0.8,
            transform: "scale(1.05)",
            transition: "all 0.2s ease-in-out"
          }}
        >
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
          <Box position="absolute" top="98px" left="61.5px" zIndex={3} pointerEvents="none">
            <img src={Icon2 || "/placeholder.svg"} alt="Icon" width="642px" height="636px" />
          </Box>

          <Box w="645px" marginTop="260.9px">
            <Tabs variant="unstyled" defaultIndex={0} marginTop="-20px" onChange={handleTabChange}>
              <TabList display="flex" gap="0" borderBottom="none" mb="24px">
               <Tab
                  flex="1"
                  p="10px 24px"
                  borderBottom="2px solid transparent"
                  _selected={{
                    borderBottom: "2px solid #166534",
                  }}
                  _focus={{
                    boxShadow: "none",
                  }}
                >
                  <img
                    src={UserTabSVG || "/placeholder.svg"}
                    alt="User Tab"
                    width="63px"
                    height="24px"
                    style={{
                      filter: "brightness(0) saturate(100%) invert(47%) sepia(8%) saturate(1238%) hue-rotate(202deg) brightness(95%) contrast(87%)",
                      marginTop: "3.6px",
                    }}
                    className="tab-svg"
                  />
                </Tab>
                <Tab
                  flex="1"
                  p="10px 24px"
                  borderBottom="2px solid transparent"
                  _selected={{
                    borderBottom: "2px solid #166534",
                  }}
                  _focus={{
                    boxShadow: "none",
                  }}
                >
                  <img
                    src={AdminTabSVG || "/placeholder.svg"}
                    alt="Admin Tab"
                    width="73.5px"
                    height="28px"
                    style={{
                      filter: "brightness(0) saturate(100%) invert(47%) sepia(8%) saturate(1238%) hue-rotate(202deg) brightness(95%) contrast(87%)",
                      marginTop: "3.6px",
                      marginLeft: "2px",
                    }}
                    className="tab-svg"
                  />
                </Tab>
              </TabList>

              <TabPanels>
                <TabPanel p="0">
                  <VStack spacing="21px" align="stretch">
                    {/* Email Field */}
                    <Box marginTop="-2px">
                      <FormLabel
                        display="flex"
                        alignItems="flex-start"
                        gap="2px"
                        alignSelf="stretch"
                        fontFamily="IBM Plex Sans"
                        fontSize="16px"
                        fontWeight="500"
                        color="#1D1F23"
                        mb="8px"
                        letterSpacing="-0.15px"
                      >
                        Email
                      </FormLabel>
                      <InputGroup>
                        <InputLeftElement
                          pointerEvents="none"
                          ml="13px"
                          mt="3px"
                          children={<img src={iconMail || "/placeholder.svg"} alt="Email" width="18px" height="18px" />}
                        />
                        <Input
                          display="flex"
                          p="16px 24px 15px 59px"
                          height="52px"
                          width="calc(100% + 2px)"
                          alignItems="flex-start"
                          color="#1D1F23"
                          gap="16px"
                          alignSelf="stretch"
                          borderRadius="8px"
                          border="none"
                          borderBottom="1px solid #929BB0"
                          bg="#F4F5F7"
                          fontFamily="IBM Plex Sans"
                          fontSize="15.75px"
                          marginTop="-3px"
                          placeholder="Enter email"
                          value={userEmail}
                          onChange={handleUserEmailChange}
                          _placeholder={{
                            color: "#757C8D",
                          }}
                          _focus={{
                            borderBottom: "2px solid #0052BD",
                            boxShadow: "none",
                          }}
                        />
                      </InputGroup>
                      {showUserErrors && (
                        <Box mt="6px" ml="13px">
                          <img src={invalidUser} alt="Invalid User" width="240px" height="240px" />
                        </Box>
                      )}
                    </Box>

                    {/* Password Field */}
                    <Box display="flex" flexDirection="column" alignItems="flex-start" gap="8px" alignSelf="stretch">
                      <FormLabel fontFamily="IBM Plex Sans" fontSize="16px" fontWeight="500" color="#1D1F23" mb="0" letterSpacing="-0.15px">
                        Password
                      </FormLabel>
                      <InputGroup>
                        <InputLeftElement
                          pointerEvents="none"
                          ml="13px"
                          mt="3px"
                          children={<img src={iconPw || "/placeholder.svg"} alt="Password" width="20px" height="20px" />}
                        />
                        <Input
                          type="password"
                          display="flex"
                          alignItems="center"
                          height="52px"
                          width="calc(100% + 2px)"
                          color="#1D1F23"
                          marginTop="-3px"
                          gap="4px"
                          flex="1 0 0"
                          p="16px 24px 15px 59px"
                          borderRadius="8px"
                          border="none"
                          borderBottom="1px solid #929BB0"
                          bg="#F4F5F7"
                          fontFamily="IBM Plex Sans"
                          fontSize="15.75px"
                          placeholder="Enter password"
                          value={userPassword}
                          onChange={handleUserPasswordChange}
                          _placeholder={{
                            color: "#757C8D",
                          }}
                          _focus={{
                            borderBottom: "2px solid #0052BD",
                            boxShadow: "none",
                          }}
                        />
                      </InputGroup>
                      {showUserErrors && (
                        <Box mt="6px" ml="13px">
                          <img src={invalidPw} alt="Invalid Password" width="125px" height="125px" />
                        </Box>
                      )}
                    </Box>
                  </VStack>
                </TabPanel>

                <TabPanel p="0">
                  <VStack spacing="21px" align="stretch">
                    {/* Admin Email Field */}
                    <Box marginTop="-2px">
                      <FormLabel
                        display="flex"
                        alignItems="flex-start"
                        gap="2px"
                        alignSelf="stretch"
                        fontFamily="IBM Plex Sans"
                        fontSize="16px"
                        fontWeight="500"
                        color="#1D1F23"
                        mb="8px"
                        letterSpacing="-0.15px"
                      >
                        Admin Email
                      </FormLabel>
                      <InputGroup>
                        <InputLeftElement
                          pointerEvents="none"
                          ml="13px"
                          mt="3px"
                          children={<img src={iconMail || "/placeholder.svg"} alt="Email" width="18px" height="18px" />}
                        />
                        <Input
                          display="flex"
                          p="16px 24px 15px 59px"
                          height="52px"
                          width="calc(100% + 2px)"
                          alignItems="flex-start"
                          color="#1D1F23"
                          gap="16px"
                          alignSelf="stretch"
                          borderRadius="8px"
                          border="none"
                          borderBottom="1px solid #929BB0"
                          bg="#F4F5F7"
                          fontFamily="IBM Plex Sans"
                          fontSize="15.75px"
                          marginTop="-3px"
                          placeholder="Enter email"
                          value={adminEmail}
                          onChange={handleAdminEmailChange}
                          _placeholder={{
                            color: "#757C8D",
                          }}
                          _focus={{
                            borderBottom: "2px solid #0052BD",
                            boxShadow: "none",
                          }}
                        />
                      </InputGroup>
                      {showAdminErrors && (
                        <Box mt="6px" ml="13px">
                          <img src={invalidUser} alt="Invalid Admin User" width="240px" height="240px" />
                        </Box>
                      )}
                    </Box>

                    {/* Admin Password Field */}
                    <Box display="flex" flexDirection="column" alignItems="flex-start" gap="8px" alignSelf="stretch">
                      <FormLabel fontFamily="IBM Plex Sans" fontSize="16px" fontWeight="500" color="#1D1F23" mb="0" letterSpacing="-0.15px">
                        Admin Password
                      </FormLabel>
                      <InputGroup>
                        <InputLeftElement
                          pointerEvents="none"
                          ml="13px"
                          mt="3px"
                          children={<img src={iconPw || "/placeholder.svg"} alt="Password" width="20px" height="20px" />}
                        />
                        <Input
                          type="password"
                          display="flex"
                          alignItems="center"
                          height="52px"
                          width="calc(100% + 2px)"
                          color="#1D1F23"
                          marginTop="-3px"
                          gap="4px"
                          flex="1 0 0"
                          p="16px 24px 15px 59px"
                          borderRadius="8px"
                          border="none"
                          borderBottom="1px solid #929BB0"
                          bg="#F4F5F7"
                          fontFamily="IBM Plex Sans"
                          fontSize="15.75px"
                          placeholder="Enter password"
                          value={adminPassword}
                          onChange={handleAdminPasswordChange}
                          _placeholder={{
                            color: "#757C8D",
                          }}
                          _focus={{
                            borderBottom: "2px solid #0052BD",
                            boxShadow: "none",
                          }}
                        />
                      </InputGroup>
                      {showAdminErrors && (
                        <Box mt="6px" ml="13px">
                          <img src={invalidPw} alt="Invalid Admin Password" width="125px" height="125px" />
                        </Box>
                      )}
                    </Box>
                  </VStack>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>

          <Box
            width="652px"
            height="52px"
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            gap="24px"
            marginTop="-36px"
            marginLeft="3.5px"
          >
            <Button
              width="312px"
              height="52px"
              display="flex"
              p="16px 24px"
              justifyContent="center"
              alignItems="center"
              gap="12px"
              flex="1 0 0"
              borderRadius="8px"
              border="1px solid #D3D7DF"
              bg="transparent"
              color="#0052BD"
              textAlign="center"
              fontFamily="IBM Plex Sans"
              fontSize="16px"
              fontStyle="normal"
              fontWeight="600"
              lineHeight="20px"
              letterSpacing="0.32px"
              textTransform="capitalize"
              fontFeatureSettings="'liga' off, 'clig' off"
              _hover={{
                bg: "rgba(0, 0, 0, 0.05)",
              }}
              _active={{
                bg: "rgba(0, 0, 0, 0.1)",
              }}
              _focus={{
                boxShadow: "0 0 0 3px rgba(211, 215, 223, 0.20)",
              }}
              onClick={handleForgotPassword}
            >
              Forgot Login?
            </Button>

            <Button
              width="311.5px"
              height="51px"
              p="16px 24px"
              position="relative"
              right="2px"
              flex="1 0 0"
              borderRadius="8px"
              bg={buttonPressed ? "#e9ebef" : (isFormValid ? "#0052BD" : "#e9ebef")}
              color={buttonPressed ? "#929BB0" : (isFormValid ? "white" : "#929BB0")}
              fontFamily="IBM Plex Sans"
              fontSize="16px"
              fontStyle="normal"
              fontWeight="600"
              lineHeight="20px"
              letterSpacing="0.32px"
              textTransform="capitalize"
              fontFeatureSettings="'liga' off, 'clig' off"
              leftIcon={buttonPressed ? undefined : (isFormValid ? <Image src={signInIcon} alt="Sign In" width="20px" height="20px" /> : undefined)}
              iconSpacing="12px"
              _hover={{
                bg: buttonPressed ? "#e9ebef" : (isFormValid ? "#003d8f" : "#e9ebef"),
                boxShadow: buttonPressed ? "none" : (isFormValid ? "0px 0px 20px 0px rgba(91, 141, 239, 0.40)" : "none"),
              }}
              _active={{
                bg: buttonPressed ? "#e9ebef" : (isFormValid ? "#002f6b" : "#e9ebef"),
                boxShadow: buttonPressed ? "none" : (isFormValid ? "0px 0px 10px 0px rgba(91, 141, 239, 0.50)" : "none"),
              }}
              _focus={{
                boxShadow: buttonPressed ? "none" : (isFormValid ? "0px 0px 15px 0px rgba(91, 141, 239, 0.30), 0 0 0 3px rgba(91, 141, 239, 0.20)" : "none"),
              }}
              onClick={handleSignIn}
            >
              Sign In
            </Button>
          </Box>

          <Box id="t&c" position={"absolute"} top={isErrorStateActive ? "690.8px" : "665.8px"} left="205.5px" gap="4.5px" display="flex" flexDirection="row" marginTop="-40px" marginLeft="1.75px">
            <Box
              color="#757C8D"
              textAlign="center"
              fontFamily="IBM Plex Sans"
              fontSize="15.5px"
              fontStyle="normal"
              fontWeight="400"
              lineHeight="20px"
              fontFeatureSettings="'liga' off, 'clig' off"
              letterSpacing={"0.125px"}
            >
              By signing in, you agree to our
            </Box>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              gap="12px"
              color="#757C8D"
              fontFamily="IBM Plex Sans"
              fontSize="15.5px"
              fontStyle="normal"
              fontWeight="400"
              lineHeight="20px"
              fontFeatureSettings="'liga' off, 'clig' off"
              cursor="pointer"
              onClick={handleTermsConditionsClick}
              _hover={{
                textDecoration: "underline",
              }}
            >
              Terms & Conditions
            </Box>
          </Box>
          <Divider
            h="1px"
            flexShrink={0}
            alignSelf="stretch"
            bg="#E9EBEF"
            w="646px"
            marginTop="-2px"
            marginBottom="137px"
            marginLeft={"60px"}
          />
          <Box position="absolute" top="760px" left="271.5px" zIndex={3} pointerEvents="none">
            <img src={getHelp || "/placeholder.svg"} alt="Icon" width="223px" height="20px" />
          </Box>
        </Box>
      </Box>

      {/* Forgot Password Dialog */}
      <ForgotPasswordDialog
        isOpen={isForgotPasswordOpen}
        onClose={onForgotPasswordClose}
        onSendResetLink={handleSendResetLink}
      />

      {/* Terms & Conditions Dialog */}
      <TermsConditionsDialog
        isOpen={isTermsConditionsOpen}
        onClose={onTermsConditionsClose}
      />
    </>
  )
}

export default App
