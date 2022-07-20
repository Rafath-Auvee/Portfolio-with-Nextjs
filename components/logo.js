import Link from 'next/link'
import Image from 'next/image'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'
import { BsCodeSlash } from 'react-icons/bs'
const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;
  img {
    transition: 200ms ease;
  }
  &:hover img {
    transform: rotate(20deg);
  }
`
const LogoMargin = styled.span`
  margin-right: 10px;
  margin-top: 2px;
`

const Logo = () => {
  const codeIcon = `/images/code${useColorModeValue('', '-dark')}.png`

  return (
    <Link href="/" scroll={false}>
      <a>
        <LogoBox>
          <LogoMargin>
            <Image src={codeIcon} width={20} height={20} alt="logo" />
          </LogoMargin>
          <Text
            color={useColorModeValue('gray.800', 'whiteAlpha.900')}
            fontFamily='M PLUS Rounded 1c", sans-serif'
            fontWeight="bold"
            ml={3}
          >
            Rafath Auvee
          </Text>
        </LogoBox>
      </a>
    </Link>
  )
}

export default Logo
