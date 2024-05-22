"use client";

import {
  Box,
  Button,
  Flex,
  FormControl,
  FormHelperText,
  FormErrorMessage,
  FormLabel,
  Input,
  Link,
  useToast,
  Checkbox,
  CheckboxGroup,
  NumberInputField,
  NumberInput,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FormEventHandler, useState } from "react";

export const RegisterAuth = () => {
  const [user, setUser] = useState<string>("");
  const [pass, setPass] = useState<string>("");
  const toast = useToast();
  const router = useRouter();

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const res: any = await signIn("credentials", {
      email: user,
      password: pass,
      redirect: false,
    });

    if (res.error) {
      toast({
        title: "Preencha Todos os Campos",
        status: "error",
        duration: 5000,
        position: "top-right",
      });
    } else {
      router.replace("/");
    }
  };



  return (
    <>
      <FormControl isRequired>
        <FormLabel color={"#00713D"} fontFamily={"roboto"} mt={"25px"}>
          Primeiro Nome:
        </FormLabel>
        <Input type="text" border={"1px solid #00713D"} />

        <FormLabel color={"#00713D"} fontFamily={"roboto"} mt={"25px"}>
          Email:
        </FormLabel>
        <Input type="Email" border={"1px solid #00713D"} />

        <FormLabel color={"#00713D"} fontFamily={"roboto"} mt={"25px"}>
          Senha
        </FormLabel>
        <Input type="Password" border={"1px solid #00713D"} />

        <FormLabel color={"#00713D"} fontFamily={"roboto"} mt={"25px"}>
          Confirme sua Senha
        </FormLabel>
        <Input type="Password" border={"1px solid #00713D"} />

        <FormLabel color={"#00713D"} fontFamily={"roboto"} mt={"25px"}>
          Telefone com DDD
        </FormLabel>
        <NumberInput max={50} min={10}>
          <NumberInputField />
        </NumberInput>

        <Flex
          w={"100%"}
          justifyContent={"space-around"}
          mt={"40px"}
          gap={"20px"}
        >
          <Box>
            <Button inlineSize={"100%"} colorScheme={"green"} size={'md'}>ENTRAR</Button>

            <FormLabel
            color={"#00713D"}
            fontFamily={"roboto"}
            mt={"25px"}
            fontSize={"16px"}
          >
            Ao clickar em Cadastrar você concorda com os {""}
            <Link>Termos de Uso </Link>e {""}
            <Link> Politica de Privacidade </Link>
          </FormLabel>
          </Box>
        </Flex>
      </FormControl>
    </>
  );
};
