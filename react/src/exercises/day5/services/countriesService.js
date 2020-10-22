import axios from "axios";

const client = axios.create({
  baseURL: "https://restcountries.eu/rest/v2/",
  timeout: 1000,
});

client.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.isAxiosError) {
      console.error(error.message);
    } else {
      console.error(error.response);
    }
    throw error;
  }
);

const getAllCountries = async () => {
  try {
    const response = await client.get("all");
    return response.data;
  } catch (e) {
    console.log("something went wrong when fetching all countries");
    return [];
  }
};

const getCountriesByRegion = async (region) => {
  try {
    const response = await client.get(`region/${region}`);
    return response.data;
  } catch (e) {
    console.log(
      `something went wrong when fetching countries by region: ${region}`
    );
    return [];
  }
};

const getCountriesByName = async (name) => {
  try {
    const response = await client.get(`name/${name}`);
    return response.data;
  } catch (e) {
    console.log(
      `something went wrong when fetching countries by region: ${name}`
    );
    return [];
  }
};

export { getAllCountries, getCountriesByName, getCountriesByRegion };
