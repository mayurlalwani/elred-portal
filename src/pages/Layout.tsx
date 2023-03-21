import { Box } from "@mui/material";
import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

type Props = {
  children: string | JSX.Element | JSX.Element[];
};

const Layout = ({ children }: Props) => {
  return (
    <Box>
      <Box>
        <Header />
      </Box>
      <Box
        sx={{
          backgroundColor: "#EFF2F9",
          display: "flex",
          height: "calc(100vh - 80px)",
        }}
      >
        <Sidebar />
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
