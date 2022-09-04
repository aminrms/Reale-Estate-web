// Next
import Link from "next/link";
import Image from "next/image";
// Material-UI
import {
  Container,
  Box,
  Button,
  Toolbar,
  Grid,
  Typography,
} from "@mui/material";
// Css
import styles from "../styles/Banner.module.css";
const Banner = ({
  imageUrl,
  buttonText,
  title1,
  title2,
  desc1,
  LinkName,
  purpose,
}) => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        justifyContent: "center",
        justifyItems: "center",
        mt: 4,
        mb: 4,
        borderBottom: "1px solid #ddd",
        padding: "0.5rem 0 !important",
      }}
    >
      <Grid className={styles.gridBox}>
        <Grid item xs={12} md={8}>
          <Image
            src={imageUrl}
            alt={title1}
            width={600}
            height={400}
            className={styles.image}
          />
        </Grid>
        <Grid item xs={12} md={4} className={styles.rightItem}>
          <Typography
            variant={"subtitle1"}
            component="h3"
            fontWeight={"bold"}
            color="textSecondary"
          >
            {purpose}
          </Typography>
          <Typography
            variant="subtitle2"
            component="h4"
            fontWeight={"bold"}
            color="textSecondary"
          >
            {title1} / {title2}
          </Typography>
          <Typography variant="body1" component="p" color="textSecondary">
            {desc1}
          </Typography>

          <Link href={LinkName} style={{ width: "100%", height: "100%" }}>
            <Button sx={{ mt: 2, textTransform: "unset" }} variant="outlined">
              {" "}
              {buttonText}
            </Button>
          </Link>
        </Grid>
      </Grid>
    </Container>
  );
};
export default Banner;
