import logo from './logo.svg';
import './App.css';
import { Button, Tabs, TabList, TabPanels, Tab, TabPanel ,  Skeleton, SkeletonCircle, SkeletonText , Stack , Box} from '@chakra-ui/react'

function App() {
  return (
    <section style={{width: "80vw" , margin : "0 auto" }}>
      <p>버튼</p>
      <div direction='row' spacing={4} align='center'>
        <Button colorScheme='teal' variant='solid'>
          Button
        </Button>
        {/* // variant로 스타일 변경 */}
        <Button colorScheme='teal' variant='outline'>  
          Button
        </Button>
        {/* // 사이즈 조절 */}
        <Button colorScheme='teal' size='xs'> 
          Button
        </Button>
        <Button
          isLoading  // 로딩 중인 버튼
          loadingText='Submitting'
          colorScheme='teal'
          variant='outline'
        >
          Submit
        </Button>
      </div>

      <div>
        <p>탭</p>
        <Tabs>
          <TabList>
            <Tab>One</Tab>
            <Tab>Two</Tab>
            <Tab>Three</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <p>one!</p>
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
            <TabPanel>
              <p>three!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>       
      <br></br>
      <div>
        <p>스켈레톤 </p>
        <Stack>
          <Skeleton height='20px' />
          <Skeleton height='20px' />
          <Skeleton height='20px' />
        </Stack>
        
        <p>스켈레톤 프로필</p>
        <Box padding='6' boxShadow='lg' bg='white'>
          <SkeletonCircle size='10' />
          <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
        </Box>
      </div>
    </section>
  
  );
}

export default App;
