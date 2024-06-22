import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import AllCampaign from './AllCampaign/AllCampaign';
import AllPet from './AllPet/AllPet';
import AllUser from './AllUser/AllUser';
const AdminProfile = () => {
 

  
    return (
    <>
    {/* <UserStatus /> */}
        <Tabs>
        <TabList>
          <Tab>Users</Tab>
          <Tab>Pets</Tab>
          <Tab>Campaigns</Tab>
        </TabList>
    
        <TabPanel>
         <AllUser />
        </TabPanel>
        <TabPanel>
          <AllPet />
        </TabPanel>
        <TabPanel>
          {/* <AllPet /> */}
         <AllCampaign />
        </TabPanel>
      </Tabs>
    </>
    );
};

export default AdminProfile;