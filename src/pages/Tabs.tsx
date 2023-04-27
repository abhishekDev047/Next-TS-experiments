import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Spin from './spinners';

const Boom=()=> {
  return (
    <Tabs
      defaultActiveKey="home"
      transition={false}
      id="noanim-tab-example"
      className="mb-3"
    >
      <Tab eventKey="home" title="Home">
        this is simple home tab .
      </Tab>
      <Tab eventKey="profile" title="Profile">
        <Spin/>
      </Tab>
      <Tab eventKey="profile2" title="Profile2">
        <Spin/>
      </Tab>
    </Tabs>
  );
}

export default Boom;