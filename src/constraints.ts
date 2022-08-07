import React from "react";
import { css } from "styled-components";

/* Colors */
export namespace Colors {
    export const Yellow = {
        100: "rgb(255, 240, 150)",
        500: "rgb(170, 160, 100)",
        900: "rgb(90, 80, 50)",
    };
    export const Pupple = {
        100: "rgb(222, 208, 255)",
        200: "rgb(183, 170, 216)",
        300: "rgb(146, 133, 178)",
        400: "rgb(109, 98, 141)",
        500: "rgb(75, 65, 105)",
        700: "rgb(38, 33, 53)",
    };

    export const Brown = {
        500: "rgb(40, 35, 35)",
        300: "rgb(32, 28, 28)",
        100: "rgb(23, 20, 20)",
        "100_A70": "rgba(23, 20, 20, 0.7)",
    };

    export const Red = { 500: "rgb(255, 90, 90)" };
    export const Turquoise = { 500: "rgb(60, 200, 170)" };
    export const White = { 100: "rgb(250, 250, 250)", 200: "rgb(174, 169, 186)", 500: "rgb(73, 68, 84)" };
    export const Blue = { 700: "rgb(70, 70, 170)" };
}

export namespace Fonts {
    export const TEXT_XL = css`
        color: ${Colors.Yellow[100]};
        font-size: 1.5rem;
        font-weight: bold;
        line-height: 1.5;
    `;
    export const TEXT_L = css`
        color: ${Colors.Yellow[100]};
        font-size: 1.125rem;
        font-weight: bold;
        line-height: 1.5;
    `;
    export const TEXT_R = css`
        color: ${Colors.Yellow[100]};
        font-size: 1rem;
        line-height: 1.5;
    `;
    export const TEXT_S = css`
        color: ${Colors.Yellow[100]};
        font-size: 0.875rem;
        line-height: 1.5;
    `;
    export const SUBTEXT_R = css`
        color: ${Colors.Yellow[500]};
        font-size: 1rem;
        line-height: 1.5;
    `;
    export const SUBTEXT_S = css`
        color: ${Colors.Yellow[500]};
        font-size: 0.875rem;
        line-height: 1.5;
    `;
    export const SUBTEXT_XS = css`
        color: ${Colors.Yellow[500]};
        font-size: 0.75rem;
        line-height: 1.5;
    `;
}

/* CSS Transition */
export namespace Transition {
    export const Fast = css`
        transition-duration: 0.2s;
    `;
    export const Slow = css`
        transition-duration: 0.1s;
    `;
}

/* BreakPoints */
export const BreakPoint = {
    XL: 1200,
    L: 960,
    R: 768,
    S: 480,
};

export namespace MediaQuery {
    export const OVER_XL = `@media (min-width: ${BreakPoint.XL + 1}px)`;
    export const UNDER_XL = `@media (max-width: ${BreakPoint.XL}px)`;
    export const OVER_L = `@media (min-width: ${BreakPoint.L + 1}px)`;
    export const UNDER_L = `@media (max-width: ${BreakPoint.L}px)`;
    export const OVER_R = `@media (min-width: ${BreakPoint.R + 1}px)`;
    export const UNDER_R = `@media (max-width: ${BreakPoint.R}px)`;
    export const OVER_S = `@media (min-width: ${BreakPoint.S + 1}px)`;
    export const UNDER_S = `@media (max-width: ${BreakPoint.S}px)`;
}
/* Space */

export namespace Space {
    export const SPACE_XXL = "4rem"; // 64px
    export const SPACE_XL = "3rem"; // 48px
    export const SPACE_L = "2rem"; // 32px
    export const SPACE_R = "1.5rem"; // 24px
    export const SPACE_S = "1rem"; // 16px
    export const SPACE_XS = ".5rem"; // 8px

    export const Padding_Responsive = {
        L: css`
            ${MediaQuery.OVER_R} {
                padding: ${SPACE_L};
            }
            ${MediaQuery.UNDER_R} {
                padding: ${SPACE_R};
            }
        `,
        R: css`
            ${MediaQuery.OVER_R} {
                padding: ${SPACE_R};
            }
            ${MediaQuery.UNDER_R} {
                padding: ${SPACE_S};
            }
        `,
    };

    export const Margin_Responsive = {
        L: css`
            ${MediaQuery.OVER_R} {
                margin: ${SPACE_L};
            }
            ${MediaQuery.UNDER_R} {
                margin: ${SPACE_R} 0;
            }
        `,
        R: css`
            ${MediaQuery.OVER_R} {
                margin: ${SPACE_R};
            }
            ${MediaQuery.UNDER_R} {
                margin: ${SPACE_S} 0;
            }
        `,
    };
}
