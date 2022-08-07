import React from "react";

import { Colors, Fonts, Space, Transition } from "@/constraints";
import styled from "styled-components";

type PlaceNavItemProps = {
    /* 링크에 대한 id */
    id: string;
    isCurrent?: boolean;
    children: React.ReactNode;
};

const PlaceNavListItem = styled.li`
    ${Transition.Fast}
    transition-property: color;

    padding-right: ${Space.SPACE_R};

    ${Fonts.SUBTEXT_R};
    height: 64px;
    line-height: 64px;
    text-align: right;

    cursor: pointer;

    &:hover {
        color: ${Colors.Yellow[100]};
    }

    &.current {
        color: ${Colors.Yellow[100]};
        font-weight: bold;
        cursor: unset;
    }
`;

const PlaceNavItemBackground = styled.div`
    ${Transition.Fast}
    transition-property: opacity;

    z-index: -1;

    background-size: cover;
    background-position: center;
    opacity: 0.4;

    li:hover > &,
    li.current > & {
        opacity: 1;
    }

    li:active > & {
        opacity: 0.4;
    }
`;

export const PlaceNavItem: React.FC<PlaceNavItemProps> = ({ id, isCurrent, children }) => {
    return (
        <PlaceNavListItem className={isCurrent ? "current" : ""}>
            <PlaceNavItemBackground />
            {children}
        </PlaceNavListItem>
    );
};

const MenuListStyle: React.CSSProperties = { margin: 0 };

export const MenuNav: React.FC = () => {
    return (
        <React.Fragment>
            <ul style={MenuListStyle}>
                <PlaceNavItem isCurrent id="0">
                    메인
                </PlaceNavItem>
            </ul>
        </React.Fragment>
    );
};

export default MenuNav;
