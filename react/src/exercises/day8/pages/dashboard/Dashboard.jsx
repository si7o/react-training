import { Grid } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { PageLoader } from "../../components";
import CampaignItem from "../../components/campaign-item/CampaignItem";
import { getAllCampaigns } from "../../services/campaignsService";

const Dashboard = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getAllCampaigns()
      .then((data) => {
        setCampaigns(data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const CampaingItems = () =>
    campaigns.map((campaign) => (
      <CampaignItem campaign={campaign} key={campaign.id} />
    ));

  return (
    <Grid
      item
      xs={12}
      container
      spacing={2}
      alignItems="center"
      justify="flex-start"
    >
      {isLoading ? <PageLoader /> : <CampaingItems />}
    </Grid>
  );
};

export default Dashboard;
