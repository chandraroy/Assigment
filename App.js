import React from 'react';
// 1. import `NativeBaseProvider` component
import { NativeBaseProvider, Text, Box ,Center ,Heading,Image,AspectRatio,VStack, HStack, Pressable,Select,CheckIcon} from 'native-base';
import LinearGradient from "react-native-linear-gradient";
import { Dimensions} from "react-native";
import TimerIcon from './components/SVGIcons/TimerIcon';
import VectorIcon from './components/SVGIcons/VectorIcon';
import TimeIcon from './components/SVGIcons/TimeIcon';
import Logo from './components/SVGIcons/Logo';
import Mark from './components/SVGIcons/Mark';
import RoundButton from './components/Buttons/RoundButton';
import User from './components/SVGIcons/User';
import ChartIcon from './components/SVGIcons/ChartIcon';
import Bar from './components/SVGIcons/Bar';
import * as Progress from 'react-native-progress';

import UploadModal from './components/ClickButton';

const { width } = Dimensions.get("window");

const Example = () => {
  
  const [service, setService] = React.useState("");
  
  return <Box flex={1} bg={"white"}>
    <HStack>
      <Text color={"white"}> heading</Text>
    </HStack>
      
  
  
    <Box px={"5"}
     w={width/1.1}
          h={(width * 1) / 3}
          bg= {"purple.900"}>
            <HStack space={2} justifyContent={"space-between"} py={4}>
            <Text color={"#D2BAF5"} >
            Under or Over
            </Text>
         
            <VectorIcon/>
           <Text color={"#D2BAF5"} >Starting in</Text>
           <TimeIcon/>
          <TimerIcon/>
              </HStack>
<VStack top={3}>
  
  <Text  color={"#D2BAF5"}>Bitcoin price will be under {""}</Text>
  <HStack space={4}>
<Text color={'#ffffff'}>$24,524 at 7 a ET on 22nd Jan’21</Text>
<Box ml={5}>
<Logo/>
</Box>
</HStack>

</VStack>

<HStack py={8} space={6}>
    <Text color={"white"} fontStyle="Montserrat" >PRIZE POOL</Text>
    <Text color={"white"}>UNDER</Text>
    <Text color={"white"}>OVER</Text>
    <Text color={"white"}>ENTRY FEES</Text>
    </HStack>
    <VStack>
      <HStack space={10}>
    <Text color={"white"} fontSize={'lg'}>$12,000</Text>
    <Text color={"white"} fontSize={'lg'}>1.25x</Text>
    <Text color={"white"} fontSize={'lg'}>OVER</Text>
    <Text color={"white"} fontSize={'lg'}>5</Text>
    <Mark/>
    </HStack>
    <Text mt={"5"} fontSize={'xl'} fontStyle="Avenir Next" color={"white"}>What’s your prediction?</Text>
    <HStack mt={"5"}  justifyContent={"space-between"} space={2}>
     
                  <RoundButton
                
              onPress={()=>{
                <UploadModal/>
              }}
                
                  textColor={'white'}
                  backGroundColor={"#452C55"}
                  width={'90%'}
                  text={"Under"}
                />
          
          
                   <RoundButton
              
                  textColor={'white'}
                  backGroundColor={'#6231AD'}
                  width={'90%'}
                  text={"Over"}
                />
   </HStack>
  
   

    </VStack> 
  
   
    </Box>
    <Box top={"230px"} w={width/1.1}

h={(width * 1) / 3} 
px={"5"}
py={"5"}
bg={"#F6F3FA"}>
  <HStack  space={"3"} >
  <User/>
<Text mt={"-1"}>355 Players</Text>
<ChartIcon/>

<Text fontSize={14} mt={"-1"}>View chart</Text>  

</HStack>
<HStack mt={"5"}>
<Progress.Bar progress={0.8} width={300} color={"#FE4190"}/>
</HStack>
<HStack justifyContent={"space-between"} mt={"5"}>
<Text color={"#B5C0C8"}>232 predicted under</Text>
<Text color={"#B5C0C8"}>123 predicted over</Text>
</HStack>
</Box>
  
    </Box>
  
}

    export default () => {
        return (
          <NativeBaseProvider>
            <Center py={5} >
                <Example />
            </Center>
          </NativeBaseProvider>
        );
    };