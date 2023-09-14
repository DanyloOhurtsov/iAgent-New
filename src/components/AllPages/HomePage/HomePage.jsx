import React from "react";
import { allStyles } from "../../../styles/allStyles";
import { FocusHome } from "./FocusHome";
import { SliderHome } from "./SliderHome";
import { NewsHome } from "./NewsHome";
import { BestHome } from "./BestHome";
import { CollectionHome } from "./CollectionHome";

export const HomePage = ({
    value: { dataNew, setCurrentItem},
}) => {
    const styles = allStyles.allPagesStyles.homePageStyles.homePage;

    return (
        <div className={styles.homeComp}>
            <FocusHome value={{ dataNew, setCurrentItem }} />
            <NewsHome value={{ dataNew, setCurrentItem }} />
            <SliderHome value={{ dataNew }} />
            <CollectionHome
                value={{ dataNew, setCurrentItem  }}
            />
            <BestHome value={{ dataNew, setCurrentItem }} />
        </div>
    );
};
