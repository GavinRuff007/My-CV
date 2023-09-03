import { Typography } from "@mui/material";
import { KeyboardArrowLeftRounded } from "@mui/icons-material";

const Info = ({ children }) => {
    return (
        <Typography
            variant="body1"
            color="black"
            textAlign="left"
            sx={{ mt: 2 }}
        >
            {children}
            <KeyboardArrowLeftRounded
                sx={{
                    verticalAlign: "bottom",
                    color: "primary.main",
                }}
            />
        </Typography>
    );
};

const DevInfo = () => {
    return (
        <>
            <Info>نام و نام خانوادگی : پارسا افتخارمنش</Info>
            <Info>سن : ۲۱</Info>
            <Info>شهر : تهران</Info>
            <Info>pa_eftekharmanesh81@mathdep.iust.ac.ir : آدرس ایمیل</Info>
            <Info>شماره موبایل : ۰۹۰۱۶۷۶۱۴۷۶</Info>
        </>
    );
};

export default DevInfo;
