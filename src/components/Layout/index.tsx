import React, { ReactNode } from "react";
import styled from "styled-components";

import { Colors } from "@/constraints";

import SideBar from "./SideBar";

const LayoutDiv = styled.div`
    background: ${Colors.Pupple[500]};
    min-width: 100%;
    min-height: 100vh;
    display: flex;
    overflow: auto;
`;
const ChildWrapper = styled.div`
    flex-grow: 1;
`;
const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <LayoutDiv>
            <SideBar />
            <ChildWrapper>{children}</ChildWrapper>
        </LayoutDiv>
    );
};
export default Layout;
