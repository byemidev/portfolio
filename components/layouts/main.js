import Head from 'next/head'
import NavBar from '../navbar.js'
import {Box, Container} from '@chakra-ui/react'

const Main = ({children , router}) => {
    return (
        <Box>
            <Head>
                <title>Goethe Arevalo - Home Page</title>
            </Head>
            <NavBar path={router.asPath}/>
            <Container maxW="container.md" pt={14}>
                {children}
            </Container>
        </Box>
    )
} 

export default Main