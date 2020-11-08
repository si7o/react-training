export const setInitialCampaigns = () => {
  const campaigns = [
    {
      id: 1,
      name: "Take it easy",
      imageUrl: "https://i.imgur.com/oPXo3kl.jpg",
      type: "Campaign Type",
      startDate: "2020/07/02",
      endDate: "2020/09/02",
      visitors: 345,
      entrants: 145,
    },
    {
      id: 2,
      name: "Dominate the world",
      imageUrl: "https://i.imgur.com/qzIpWS1.jpeg",
      type: "Campaign Type",
      startDate: "2020/07/02",
      endDate: "2020/11/22",
      visitors: 345,
      entrants: 145,
    },
    {
      id: 4,
      name: "Seal of Approval",
      imageUrl: "https://i.imgur.com/g94OS0R.jpg",
      type: "Campaign Type",
      startDate: "2020/07/02",
      endDate: "2020/10/02",
      visitors: 345,
      entrants: 145,
    },
  ];

  localStorage.setItem("campaigns", JSON.stringify(campaigns));
};

export const getAllCampaigns = () => {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve(JSON.parse(localStorage.getItem("campaigns")));
    }, 500)
  );
};
