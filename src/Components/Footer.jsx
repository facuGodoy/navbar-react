import React, { useEffect, useState } from "react";
import { Grid, Link, Typography } from "@mui/material";
import { Facebook, Instagram, Twitter, WhatsApp } from "@mui/icons-material";
import Loader from "./helper/Loader";

export default function Footer() {
  const [loading, setloading] = useState(false);

  useEffect(() => {
    setloading(true);
    setTimeout(() => {
      setloading(false);
    }, 2000);
  }, [])
  


  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "10rem" }}>
      {loading ? (
        <Loader />
      ) : (
        <div className="footer">
          <Grid item xs={4} sm={1} sx={{ justifyContent: "center" }}>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              color={"white"}
              sx={{ textDecoration: "underline", textAlign: "center", display: { xs: "none", sm: "block" } }}
            >
              Redes sociales
            </Typography>

            <div style={{ display: "flex", justifyContent: "center", gridColumnGap: "8%", padding: "2vh 0" }}>
              <Link href="https://www.facebook.com/" color="secondary">
                <Facebook id="facebook" sx={{ fontSize: "3rem" }} />
              </Link>
              <Link href="/https://www.whatsapp.com/" color="secondary">
                <WhatsApp id="whatsapp" sx={{ fontSize: "3rem" }} />
              </Link>
              <Link href="https://www.twitter.com/" color="secondary">
                <Twitter id="twitter" sx={{ fontSize: "3rem" }} />
              </Link>
              <Link href="https://www.instagram.com/" color="secondary">
                <Instagram id="instagram" sx={{ fontSize: "3rem" }} />
              </Link>
            </div>
          </Grid>
        </div>
      )}
    </div>
  );
}
