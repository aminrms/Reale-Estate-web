import Head from "next/head";
import Image from "next/image";
import Banner from "../components/Banner";
import styles from "../styles/Home.module.css";
// Images
import RentHomeImage from "../Images/Rent-Home-image.jpeg";
import BuyHomeImage from "../Images/Buy-Home-image.jpeg";
// API
import { baseUrl, fetchAPI } from "../utils/fetchApi";
// Component
import Property from "../components/Property";
// Material-UI
import { Skeleton } from "@mui/material";
import { Container, Grid } from "@mui/material";
import NavbarBox from "../components/Navbar";
// Css
const Home = ({ propertiesForSale, propertiesForRent }) => {
  console.log(propertiesForSale);
  return (
    <Container maxWidth="xl">
      <Banner
        imageUrl={RentHomeImage}
        buttonText="Explore Renting"
        title1="Rentals Homes for"
        title2="Everyone"
        desc1="Explore Apartments , Villas , Homes , and ..."
        LinkName="/search?purpose=for-rent"
        purpose="Rent A Home"
      />
      <Grid
        sx={{
          borderBottom: "1px solid #ddd",
          padding: "0.5rem 0",
        }}
        className={"cardGrid"}
      >
        {propertiesForRent.length ? (
          propertiesForRent.map((property, index) => (
            <Property key={index} property={property} />
          ))
        ) : (
          <h1>Loading...</h1>
        )}
      </Grid>

      <Banner
        imageUrl={BuyHomeImage}
        buttonText="Explore Buying"
        title1="Find and Buy Own your "
        title2="Dream Home"
        desc1="Explore Apartments , Villas , Homes , and ..."
        LinkName="/search?purpose=for-sale"
        purpose="Buy A Home"
      />
      <Grid
        sx={{
          borderBottom: "1px solid #ddd",
        }}
        className={"cardGrid"}
      >
        {propertiesForSale.length ? (
          propertiesForSale.map((property, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
              <Property key={index} property={property} />
            </Grid>
          ))
        ) : (
          <h1>Loading...</h1>
        )}
      </Grid>
    </Container>
  );
};
export default Home;

export async function getStaticProps() {
  const propertyForSale = await fetchAPI(`${baseUrl}/properties/list`, {
    locationExternalIDs: "5002",
    purpose: "for-sale",
    hitsPerPage: "7",
    lang: "en",
    sort: "city-level-score",
  });
  const propertyForRent = await fetchAPI(`${baseUrl}/properties/list`, {
    locationExternalIDs: "5002",
    purpose: "for-rent",
    hitsPerPage: "7",
    lang: "en",
    sort: "city-level-score",
  });
  return {
    props: {
      propertiesForRent: propertyForRent?.hits,
      propertiesForSale: propertyForSale?.hits,
    },
  };
}
