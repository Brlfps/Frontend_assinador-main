import { ReactNode } from "react"
import { Box } from "@chakra-ui/react";

interface PublicRouterProps {
  children: ReactNode
}

export default async function PublicRouter({ children }: PublicRouterProps) {

  return (
    <>
      <Box h={'100vh'} w={'100vw'} fontSize={'1rem'} bg={"00713D"}>
        {children}
      </Box>
    </>
  )
}