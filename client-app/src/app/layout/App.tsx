import React, { useState, useEffect, Fragment } from "react";
import { Container, Header, Icon, List } from "semantic-ui-react";
import axios from "axios";
import { IActivity } from "../models/activity";
import Navbar from "../../features/nav/Navbar";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";

const App = () => {
  const [activities, setActivities] = useState<IActivity[]>([]);

  useEffect(() => {
    axios
      .get<IActivity[]>("http://localhost:5000/api/activities")
      .then((response) => {
        setActivities(response.data);
      });
  }, []);

  return (
    <Fragment>
      <Navbar />
      <Container style={{ marginTop: "7em" }}>
        <ActivityDashboard activities={activities} />
      </Container>
    </Fragment>
  );
};

export default App;
