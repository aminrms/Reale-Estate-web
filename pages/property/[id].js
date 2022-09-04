import React from "react";
import ImageScrollSlider from "../../components/ImageScrollSlider";
// API
import { baseUrl, fetchAPI } from "../../utils/fetchApi";
// Material-UI
import { Container, Box, Typography, Stack } from "@mui/material";
// Material-icons
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import BathtubIcon from "@mui/icons-material/Bathtub";
import ChairIcon from "@mui/icons-material/Chair";
import CropIcon from "@mui/icons-material/Crop";
import millify from "millify";
const PropertyDetails = ({
  propertyDetails: {
    rooms,
    title,
    photos,
    price,
    rentFrequency,
    baths,
    area,
    agency,
    type,
    isVerified,
    description,
    furnishingStatus,
    amenities,
  },
}) => {
  return (
    <Container maxWidth="xl">
      <ImageScrollSlider photos={photos} />
      <Box
        sx={{
          display: "flex",
          // alignItems: "center",
          flexDirection: "column",
          width: "85%",
          height: "fit-content",
          margin: "0.5rem auto",
          p: 1,
        }}
      >
        <Typography
          sx={{
            display: "flex",
            alignItems: "center",
            borderBottom: "1px solid #ddd",
            mb: 1,
            justifyContent: "center",
            width: "fit-content",
            height: "fit-content",
            fontSize: "22px",
          }}
          fontWeight="bold"
          variant="subtitle1"
          component="h6"
        >
          {title}
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: { xs: "flex-start", sm: "space-between" },
            flexDirection: { xs: "column", sm: "row" },
          }}
        >
          <Typography
            variant="subtitle2"
            fontWeight="bold"
            color="textSecondary"
            component="span"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {isVerified && (
              <CheckCircleIcon sx={{ fontSize: "22px", color: "green" }} />
            )}
            AED
            <Typography
              sx={{ ml: 0.5, mr: 0.5, fonSize: "23px" }}
              fontWeight="bold"
              variant="subtitle1"
              component="h4"
              color="#222"
            >
              {millify(price)}
            </Typography>
            {rentFrequency && `/${rentFrequency}`}
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "1.5rem",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="subtitle2"
              fontWeight="bold"
              color="textSecondary"
              component="span"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              Rooms:
              {rooms}
              <ChairIcon sx={{ fontSize: "18px", ml: 1 }} />
            </Typography>
            <Typography
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              variant="subtitle2"
              fontWeight="bold"
              color="textSecondary"
              component="span"
            >
              Baths:
              {baths}
              <BathtubIcon sx={{ fontSize: "18px", ml: 1 }} />
            </Typography><Typography
            variant="subtitle2"
            fontWeight="bold"
            color="textSecondary"
            component="span"
          >
            {millify(area)}sqrt
            <CropIcon sx={{ fontSize: "18px", ml: 1 }} />
          </Typography>
          </Box>
          
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          // alignItems: "center",
          justifyContent: "flex-start",
          flexDirection: "column",
          width: "85%",
          height: "fit-content",
          margin: "0.5rem auto",
          p: 1,
        }}
      >
        <Typography
          sx={{ lineHeight: "30px" }}
          color="textSecondary"
          variant="body1"
          component="p"
        >
          {description}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          // alignItems: "center",
          justifyContent: "flex-start",
          flexDirection: "column",
          width: "85%",
          height: "fit-content",
          margin: "0.5rem auto",
          p: 1,
        }}
      >
        {amenities && (
          <>
            <Typography
              sx={{ fontSize: "22px", fontWeight: "bold", mb: 1 }}
              variant="subtile1"
              component="h6"
            >
              Amenities
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                width: "100%",
                height: "fit-content",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "0.5rem",
              }}
            >
              {amenities.map((amenity) => {
                return (
                  <Typography
                    key={amenity.text}
                    component="span"
                    sx={{
                      backgroundColor: "#ddd",
                      borderRadius: "6px",
                      color: "blue",
                      width: "fit-content",
                      height: "30px",
                      p: 1,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fonSize: "20px",
                    }}
                  >
                    {amenity.text}
                  </Typography>
                );
              })}
            </Box>
          </>
        )}
      </Box>
    </Container>
  );
};

export default PropertyDetails;

export async function getServerSideProps({ params: { id } }) {
  const data = await fetchAPI(`${baseUrl}/properties/detail?externalID=${id}`);
  return {
    props: {
      propertyDetails: data,
    },
  };
}
