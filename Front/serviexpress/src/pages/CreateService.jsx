import React from "react";

import BurgerButton from "../components/NavBar/NavBar";
import "./styles/CreateService.scss";
import { MainPublication } from "../components/CreateService/List";
import Form from "../components/CreateService/Form";
import FormModify from "../components/CreateService/FormModify";

import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import AddBoxIcon from "@mui/icons-material/AddBox";
import ViewListIcon from "@mui/icons-material/ViewList";
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const CreateService = () => {
  // const [modal, setModal] = useState({ active: false, id: null });

  const [valueTab, setValueTab] = React.useState(0);
  const [publicationID, setPublicationID] = React.useState(null);

  const handleChange = (event, newValue) => {
    setValueTab(newValue);
  };

  return (
    <div className="page-createService">
      <BurgerButton />
      {/* <BasicModal pModal={modal} pSetModal={setModal} /> */}

      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={valueTab}
            onChange={handleChange}
            textColor="inherit"
            indicatorColor="primary"
          >
            <Tab
              icon={<ViewListIcon />}
              iconPosition="start"
              label="List Of Publications"
              {...a11yProps(0)}
            />
            <Tab
              icon={<AddBoxIcon />}
              iconPosition="start"
              label="Add Publication"
              {...a11yProps(1)}
            />
            <Tab
              icon={<AutoFixHighIcon />}
              iconPosition="start"
              label="Edit Publication"
              {...a11yProps(2)}
              disabled = {false}
            />
          </Tabs>
        </Box>
        <TabPanel value={valueTab} index={0}>
          <MainPublication setValueTab={setValueTab} setPublicationID={setPublicationID}/>
        </TabPanel>
        <TabPanel value={valueTab} index={1}>
          <Form />
        </TabPanel>
        <TabPanel value={valueTab} index={2}>
          <FormModify publicationID={publicationID}/>
        </TabPanel>
      </Box>
    </div>
  );
};

export default CreateService;
/* 
          onChange={() => {
            console.log("object");
          }} */
