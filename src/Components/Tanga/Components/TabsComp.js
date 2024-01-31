import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/tabs"

function TabsComp(props){
    return (
        <div className="tabs" width='100%'>
            <Tabs isFitted width={'100vw'} minWidth={1850} height={"100vh"} scrollBehavior={'auto'}>
                <TabList>
                    {/* <Tab>{props.home.title}</Tab> */}
                    <Tab>{props.one.title}</Tab>
                    <Tab>{props.two.title}</Tab>
                    <Tab>{props.three.title}</Tab>
                    <Tab>{props.four.title}</Tab>
                </TabList>
                <TabPanels width={'100%'}>
                    {/* <TabPanel> {props.home.content} </TabPanel> */}
                    <TabPanel> {props.one.content} </TabPanel>
                    <TabPanel> {props.two.content} </TabPanel>
                    <TabPanel> {props.three.content} </TabPanel>
                    <TabPanel>{props.four.content}</TabPanel>
                </TabPanels>
            </Tabs>
        </div>
    )
}

export default TabsComp