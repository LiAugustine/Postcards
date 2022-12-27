import styles from "./components.module.css"
import {
    Flex,
    Container,
    Box,
    Button,
    ButtonGroup,
    Spacer,
    Heading,
} from '@chakra-ui/react'

export default function Navbar() {

    return (
        <Flex className={styles.navbar}>
            <Heading size="lg">Notecards</Heading>
            <Spacer />
            <Button>
                Sign-in
            </Button>
        </Flex>

    )
}