import React, { ReactNode } from 'react'
import { Socket } from 'socket.io-client'
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, AddIcon } from '@chakra-ui/icons';
import { ClientToServerEvents } from '../interfaces'
import { Link as ReachLink } from 'react-router-dom'


type NavProps = {
  socket: Socket<ClientToServerEvents>
}

const Links = ['home', 'products'];

const NavLink = ({ children, to }: { children: ReactNode, to: string }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    as={ReachLink} to={to}>
    {children}
  </Link>
);

const NavComponent = ({ socket }: NavProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (<>
    <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <IconButton
          size={'md'}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={'Open Menu'}
          display={{ md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack spacing={8} alignItems={'center'}>
          <Box>bidding-system</Box>
          <HStack
            as={'nav'}
            spacing={4}
            display={{ base: 'none', md: 'flex' }}>
            {Links.map((link) => (
              <NavLink key={link} to={link}>{link}</NavLink>
            ))}
          </HStack>
        </HStack>
      </Flex>

    </Box>
  </>
  );
}

export default NavComponent;
