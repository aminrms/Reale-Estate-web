import { useRouter } from "next/router";
import { useState } from "react";
import Image from "next/image";
// Material-UI
import {
  Container,
  Typography,
  Box,
  Button,
  Grid,
  Select,
  MenuItem,
  InputLabel,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
// API
import { baseUrl, fetchAPI } from "../utils/fetchApi";
// Components
import Property from "../components/Property";

// utils
import { filterData, getFilterValues } from "../utils/filterData";
const Search = ({ properties }) => {
  const [searchFilters, setSearchFilters] = useState(false);
  const [filters, setFilters] = useState(filterData);
  const [search, setSearch] = useState("");
  const router = useRouter();
  const searchBoxHandler = () => {
    setSearchFilters(!searchFilters);
  };
  const searchProperties = (filterValues) => {
    setSearch(filterValues);
    const path = router.pathname;
    const { query } = router;
    const values = getFilterValues(filterValues);
    values.forEach((value) => {
      query[value.name] = value.value;
    });
    router.push({ pathname: path, query });
  };
  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          backgroundColor: "#ddd",
          p: 2,
          borderRadius: "8px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          width: "100%",
          mt:1
        }}
      >
        <Typography
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",

            p: 2,
          }}
          variant="h6"
          fontWeight="bold"
          component={"h6"}
          onClick={searchBoxHandler}
        >
          Search Property By Filters
          <FormatAlignCenterIcon
            sx={{
              fontSize: "24px",
              fontWeight: "bold",
              color: "#666",
              ml: 1.5,
            }}
          />
        </Typography>
        <Box
          className="searchFiltersBox"
          sx={{
            display: searchFilters ? "grid" : "none",
            gridAutoColumns: "column",
            overflowX: "auto",
            overflowY: "hidden",
            overscrollBehaviorX: "contain",
            scrollSnapType: "x mandatory",
            height: "fit-content",
            alignItems: "center",
            justifyItems: "center",
            width: "100%",
          }}
        >
          {filters.map((filter) => {
            return (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  // height: "30px",
                  width: "100%",
                }}
                className="filterBox"
              >
                <InputLabel
                  sx={{
                    display: "flex",
                    alignItems: "centre",
                    justifyContent: "center",
                    p: 1,
                  }}
                  id="demo-simple-select-filled-label"
                >
                  {filter.placeholder}
                </InputLabel>

                <Select
                  value={search}
                  labelId="demo-simple-select-filled-label"
                  id="demo-simple-select-filled"
                  key={filter.queryName}
                  label={filter.placeholder}
                  onChange={(e) => {
                    searchProperties({ [filter.queryName]: e.target.value });
                  }}
                  sx={{ width: "fit-content", height: "40px" }}
                >
                  {filter?.items?.map((item) => {
                    return (
                      <MenuItem key={item.value} value={item.value}>
                        {item.name}
                      </MenuItem>
                    );
                  })}
                </Select>
              </Box>
            );
          })}
        </Box>
      </Box>
      <Grid
        sx={{
          borderBottom: "1px solid #ddd",
          padding: "0.5rem 0",
        }}
        className={"cardGrid"}
      >
        {properties.length ? (
          properties.map((property, index) => (
            <Property key={index} property={property} />
          ))
        ) : (
          <h1>Loading...</h1>
        )}{" "}
        {properties.length == 0 ? (
          <Typography variant="h3">No Result Found.</Typography>
        ) : null}
      </Grid>
    </Container>
  );
};
export default Search;

export async function getServerSideProps({ query }) {
  const purpose = query.purpose || "for-rent";
  const rentFrequency = query.rentFrequency || "yearly";
  const minPrice = query.minPrice || "0";
  const maxPrice = query.maxPrice || "1000000";
  const roomsMin = query.roomsMin || "0";
  const bathsMin = query.bathsMin || "0";
  const sort = query.sort || "price-desc";
  const areaMax = query.areaMax || "35000";
  const locationExternalIDs = query.locationExternalIDs || "5002";
  const categoryExternalID = query.categoryExternalID || "4";

  const data = await fetchAPI(
    `${baseUrl}/properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&categoryExternalID=${categoryExternalID}&bathsMin=${bathsMin}&rentFrequency=${rentFrequency}&priceMin=${minPrice}&priceMax=${maxPrice}&roomsMin=${roomsMin}&sort=${sort}&areaMax=${areaMax}`
  );

  return {
    props: {
      properties: data?.hits,
    },
  };
}
