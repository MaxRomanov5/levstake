import { Stack, Typography, useTheme, useMediaQuery } from "@mui/material";
import images from "../../assets/images";
import styled from "./StakingCard.module.css";
import { NavLink } from "react-router-dom";
import links from "../../helpers/links.js";
import { useUser } from "../../Context/userContext.jsx";
const StackingCard = ({ pool }) => {
  const { isLoggedIn } = useUser();
  const theme = useTheme();
  const mob = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <div className={styled.card}>
      <div className={styled.cardWrap}>
        <Stack
          flexDirection="row"
          justifyContent="space-between"
          sx={{ marginBottom: "3px" }}
        >
          <img
            style={{ height: "48px", width: "48px" }}
            src={pool.asset.picture}
            alt={pool.asset.blockchain.currency_name}
          />

          <Typography
            sx={{ fontSize: "34px" }}
            variant="h2"
            color="success.main"
          >
            {Number(pool?.profit_rate).toFixed(0) + "%"}
          </Typography>
        </Stack>

        <Typography
          sx={{ marginBottom: "10px",fontWeight:'400' }}
          color="primary.main"
          variant="p"
        >
          {pool.asset.blockchain.currency_name}
        </Typography>
      </div>
      <NavLink to={links(isLoggedIn, mob)}>
        {" "}
        <button className={styled.btn}>
          <img
            src={images.rocketPrpl}
            style={{ marginRight: "16px" }}
            alt="rocket"
          />{" "}
          Flexible Stake
        </button>
      </NavLink>
    </div>
  );
};

export default StackingCard;
