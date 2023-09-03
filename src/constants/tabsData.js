import {
    HomeRounded,
    FaceRounded,
    TextSnippetRounded,
} from "@mui/icons-material";

const tabProps = (index) => {
    return {
        id: `sidebar-tab-${index}`,
        "aria-controls": `tabpanel-${index}`,
    };
};

export const tabsData = () => {
    const tabs = [
        { label: "صفحه اصلی", icon: <HomeRounded />, ...tabProps(0) },
        { label: "درباره من", icon: <FaceRounded />, ...tabProps(1) },
        { label: "رزومه من", icon: <TextSnippetRounded />, ...tabProps(2) },
    ];

    return tabs;
};
