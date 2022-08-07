import React from "react";
import styled from "styled-components";

import { Colors, MediaQuery, Transition } from "@/constraints";
import MenuNav from "./MenuNav";

const SideBarMenuWrapper = styled.div`
    z-index: 20;
    flex-grow: 1;

    display: flex;
    flex-flow: column;
`;

const SideBarWrapper = styled.div`
    ${Transition.Slow}
    transition-property: left;

    width: 256px;
    height: 100vh;
    overflow-x: auto;
    background: ${Colors.Pupple[700]};

    ${MediaQuery.UNDER_R} {
        display: none;

        body.sidebar-opened & {
            display: block;
        }
    }
`;

export const SideBar: React.FC = () => {
    return (
        <SideBarWrapper>
            {/* Place for Page Icon */}
            <SideBarMenuWrapper>
                <MenuNav />
            </SideBarMenuWrapper>
        </SideBarWrapper>
    );
};

export default SideBar;
