import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import {Canvas} from '@react-three/fiber'
import {OrbitControls,Text,RenderTexture,PerspectiveCamera,Sphere,MeshDistortMaterial} from '@react-three/drei'
import Cube from './Cube'

const Section = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  scroll-snap-align: center;
  justify-content: space-between;
`;
const Container = styled.div`
  height: 100vh;
  width: 1400px;
  display: flex;
  justify-content: space-between;
  scroll-snap-align: center;
`;
const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  gap:20px;
  justify-content: center;
`;
const Title = styled.h1`
font-size:74px;
`;
const WhatWeDo = styled.div`
display: flex;
align-items:center;
gap:10px; 
`;
const Line = styled.img`
height:5px;
`;
const Subtitle = styled.h2`
   color: #da4ea2;
`;
const Desc = styled.p`
font-size: 24px;
color:lightgray;

`;
const Button = styled.button`
  width: 100px;
  padding: 10px;
  background-color: #da4ea2;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight:500;
`;

const Right = styled.div`
  flex: 3;
  position: relative;
`;

const Img = styled.img`
width:800px;
  height:600px;
  object-fit:contain;
  position:absolute;
  top:0;
  left:0;
  right:0;
  margin:auto;
  animation: animate 2s infinite ease alternate;

  @keyframes animate{
    to{
      transform:translateY(20px);
    }
  }
`;

const Hero = () => {
  return (
    <Section>
      <Navbar />
      <Container>
        <Left>
          <Title>Think. Make. Solve.</Title>
          <WhatWeDo>
            <Line src="./img/line.png" />
            <Subtitle>What We Do</Subtitle>
          </WhatWeDo>

          <Desc>
            We enjoy creating delightful, human-centered digital experience
          </Desc>
          <Button>Learn More</Button>
        </Left>
        <Right>
        <Canvas >
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={3}/>
            <directionalLight position={[3,3,1]}/>
            <Sphere args={[1,100,200]} scale={2.4}>
            <MeshDistortMaterial
            color={"#220736"} attach="material" distort={0.6} speed={2}/>
            </Sphere>
        </Canvas>
          <Img src="./img/moon.png" />
        </Right>
      </Container>
    </Section>
  );
};

export default Hero;
