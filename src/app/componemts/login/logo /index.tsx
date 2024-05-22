"use client";
import { Box } from "@chakra-ui/react";
import Image from "next/image";

export const Logologin = () => {
  return (
    <>
      <Box
        onClick={() => (window.location.href = "https://redebrasilrp.com.br/")}
        cursor={"pointer"}
      >
        <Image
          src="/LOGO REDE BRASIL RP_C.svg"
          alt="Vercel Logo"
          width={300}
          height={500}
          priority
        />
      </Box>
    </>
  );
};