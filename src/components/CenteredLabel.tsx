import { Box, Flex } from '@chakra-ui/react'

interface ICategoryLabelProps {
  children: React.ReactNode
}
export const CenteredLabel: React.FunctionComponent<ICategoryLabelProps> = ({
  children,
}) => {
  return (
    <Flex display='flex' alignItems='center' justifyContent='center' h='100%'>
      <Box
        bgColor='white'
        borderRadius='0.25rem'
        fontWeight='bold'
        padding='1rem 1.5rem'
        position='relative'
        textTransform='uppercase'
        w='fit-content'
        zIndex={1}>
        {children}
      </Box>
    </Flex>
  )
}
