// Next
import Link from "next/link";
import Image from "next/image";
// Material-UI
import {
  Container,
  Box,
  Button,
  Skeleton,
  Typography,
  Avatar,
} from "@mui/material";
// Material-Icons
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import BathtubIcon from "@mui/icons-material/Bathtub";
import ChairIcon from "@mui/icons-material/Chair";
import CropIcon from "@mui/icons-material/Crop";
// Css
import img from "../Images/Buy-Home-image.jpeg";
import millify from "millify";
import moment from "moment";
const Property = ({
  property: {
    externalID,
    rooms,
    coverPhoto,
    price,
    rentFrequency,
    title,
    baths,
    area,
    agency,
    isVerified,
    updateAt,
  },
}) => {
  return (
    <Link href={`/property/${externalID}`} className="card-link" passHref>
      <div className={"propertyCard"}>
        <div
          className={"propertyCard_background"}
          style={{
            backgroundImage: `${
              coverPhoto ? `url(${coverPhoto?.url})` : `url(${img})`
            }`,
          }}
        ></div>
        <div className={"cardHeader"}>{title}</div>
        <div className={"card-details"}>
          <div className={"details-header"}>
            <Typography
              variant="subtitle2"
              fontWeight="bold"
              color="textSecondary"
              component="span"
            >
              {isVerified && (
                <CheckCircleIcon sx={{ fontSize: "22px", color: "green" }} />
              )}
              AED {millify(price)}
              {rentFrequency && `/${rentFrequency}`}
            </Typography>
            <Avatar
              src={agency?.logo?.url}
              alt="logo"
              sx={{ width: "35px", height: "35px", objectFit: "cover" }}
            />
          </div>
          <div className="details-content">
            <Typography
              variant="subtitle2"
              fontWeight="bold"
              color="textSecondary"
              component="span"
            >
              {rooms}
              <ChairIcon sx={{ fontSize: "18px", ml: 1 }} />
            </Typography>
            <Typography
              variant="subtitle2"
              fontWeight="bold"
              color="textSecondary"
              component="span"
            >
              {baths}
              <BathtubIcon sx={{ fontSize: "18px", ml: 1 }} />
            </Typography>
            <Typography
              variant="subtitle2"
              fontWeight="bold"
              color="textSecondary"
              component="span"
            >
              {millify(area)}sqrt
              <CropIcon sx={{ fontSize: "18px", ml: 1 }} />
            </Typography>
          </div>
          <div className="details-title">
            <Typography fontWeight="bold" variant="subtitle2" component={"h5"}>
              {agency?.name}
            </Typography>
          </div>
          <div className="details-actions">
            <Typography
              variant="subtitle2"
              component={"span"}
              color="textSecondary"
            >
              {moment(updateAt).startOf("month").fromNow()}
            </Typography>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Property;
