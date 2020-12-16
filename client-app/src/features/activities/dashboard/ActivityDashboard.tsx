import React from "react";
import { Grid, List } from "semantic-ui-react";
import { IActivity } from "../../../app/models/activity";
import ActivityDetail from "../details/ActivityDetail";
import ActivityList from "./ActivityList";

interface IProps {
  activities: IActivity[];
}

const ActivityDashboard: React.FC<IProps> = ({ activities }) => {
  return (
    <Grid>
      <Grid.Column width={10}>
        <ActivityList activities={activities} />
      </Grid.Column>
      <Grid.Column width={6}>
        <ActivityDetail />
      </Grid.Column>
    </Grid>
  );
};

export default ActivityDashboard;
