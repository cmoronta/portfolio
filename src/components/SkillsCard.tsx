import { Flex, Text, Box, Heading } from "@chakra-ui/react";
import { BoxProps } from "@chakra-ui/react";
import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { OrbitControls, Center } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Suspense } from "react";

export interface SkillCardsProps extends BoxProps {
  title: string;
  content: string;
  model: string;
  scale: number;
}

type SceneProps = {
  model: string;
  scale: number;
};

const Scene = ({ model, scale }: SceneProps) => {
  const obj = useLoader(GLTFLoader, model);
  return <primitive object={obj.scene} scale={scale} />;
};

export default function SkillsCard(props: SkillCardsProps) {
  return (
    <>
      <Flex
        p={6}
        bg="rgba( 255, 255, 255, 0.05 )"
        borderRadius="20px"
        backdropBlur="8px"
        backdropFilter="blur(3px)"
        boxShadow="lg"
        height={["auto", null, null, null, "12rem"]}
      >
        <Flex
          justifyItems="space-between"
          alignItems={{ xl: "center" }}
          width="100%"
          direction={{
            base: "column",
            xl: "row",
          }}
        >
          {/** React Three Fiber Canvas */}
          <Box width={{ base: "80%", xl: "15%" }} alignSelf="center">
            <Canvas>
              <Suspense fallback={null}>
                <Center rotation={[0.4, -0.7, 0]}>
                  <ambientLight />
                  <Scene scale={props.scale} model={props.model} />
                  <OrbitControls />
                </Center>
              </Suspense>
            </Canvas>
          </Box>
          {/** Heading and Subtext */}
          <Box width={{ base: "100%", xl: "50%" }} ml={{ lg: 2 }}>
            <Heading>{props.title}</Heading>
            <Text fontSize="xl" mt={2}>
              {props.content}
            </Text>
          </Box>
        </Flex>
      </Flex>
    </>
  );
}
