import NextLink from "next/link"
import {
  Box,
  Avatar,
  Wrap,
  WrapItem
} from "@chakra-ui/react"
import {
 Container,
  useColorModeValue
} from "@chakra-ui/react"

import Section from "../components/section"
const Home = () => {
  return (
    <Section>
      <Container>
        <Box
          borderRadius="lg"
          mb={6}
          p={3}
          textAlign="center"
          bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
          css={{ backdropFilter: "blur(10px)" }}
        >
          Hello, I&apos;m an indie app developer based in Spain!
        </Box>
        <Wrap>
          <WrapItem>
            <Avatar name="Ryan Florence" src="https://bit.ly/ryan-florence">
              {" "}
            </Avatar>
          </WrapItem>
        </Wrap>
      </Container>
      |{" "}
    </Section>
  )
}

export default Home
