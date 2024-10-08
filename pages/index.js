import NextLink from "next/link"
import {
  Box,
  Wrap,
  WrapItem,
  Heading, 
  Image
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
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          css={{ backdropFilter: 'blur(10px)' }}
        >
          Hello, I&apos;m an creative developer based in Madrid!
        </Box>

        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Goethe Arevalo
            </Heading>
            <p>Digital passionated ( Artist / Developer / Designer )</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            textAlign="center"
          >
            <Box
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              w="100px"
              h="100px"
              display="inline-block"
              borderRadius="full"
              overflow="hidden"
            >
              <Image
                src="/images/mepic.jpg"
                alt="Profile image"
                width="100"
                height="100"
              />
            </Box>
          </Box>
        </Box>
      </Container>
      {" "}
    </Section>
  )
}

export default Home
