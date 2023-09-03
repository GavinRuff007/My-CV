import { Box, Typography } from "@mui/material";
import { CopyrightRounded } from "@mui/icons-material";

const SidebarFooter = () => {
    return (
        <Box
            sx={{
                flexGrow: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "end",
                alignItems: "center",
                height: 100,
            }}
        >
            <Typography variant="subtitle2" color="text.primary">
                طراحی شده توسط پارسا افتخارمنش
            </Typography>

            <Typography variant="caption" color="text.primary" sx={{ mt: 2 }}>
                کپی رایت ۱۴۰۱{" "}
                <CopyrightRounded
                    sx={{ verticalAlign: "middle", height: 16 }}
                />
            </Typography>
        </Box>
    );
};

export default SidebarFooter;
