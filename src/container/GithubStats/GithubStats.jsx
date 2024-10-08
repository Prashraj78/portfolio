import "./GithuStats.scss";
import GitHubCalendar from "react-github-calendar";
import { AppWrap, MotionWrap } from "../../wrapper";
import { Stack, Box, useMediaQuery } from "@mui/material";

const GithubStats = () => {
  const matches = useMediaQuery("(min-width:2000px)");

  return (
    <Stack justifyContent="center" alignItems="center">
      <h2 className="head-text" style={{ marginBottom: "2.5rem" }}>
        My <span>Github</span> Stats
      </h2>
      <Box
        width="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
        border="2px solid green"
        borderRadius= "10px"
      >
        <GitHubCalendar
          username="prashraj78"
          fontSize={matches ? 35 : 12}
          blockSize={matches ? 30 : 12}
          colorScheme={"light"}
          style={{ fontWeight: "bold" }}
        />
      </Box>
      <Stack
        direction={{ xs: "column", xl: "row", lg: "row", md: "row" }}
        gap="10px"
        mt="15px"
        width="100%"
        height={{ xl: "400px", lg: "200px", md: "170px" }}
      >
        <img
          src="https://github-readme-stats.vercel.app/api?username=prashraj78&count_private=true&show_icons=true&theme=vision-friendly-light"
          alt="prahsraj78"
          style={{ width: "100%", height: "100%" }}
        />
        <img
          src="https://github-readme-streak-stats.herokuapp.com/?user=prashraj78&theme=vision-friendly-light"
          alt="prashraj78"
          style={{ width: "100%", height: "100%" }}
        />
      </Stack>
    </Stack>
  );
};

export default AppWrap(
  MotionWrap(GithubStats, ".app__githubstats"),
  "githubstats",
  "app__primarybg"
);
