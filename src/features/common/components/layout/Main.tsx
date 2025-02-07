import { Box, Sheet} from "@mui/joy";
import Nav from "./Nav";
import { Outlet } from "react-router";

export default function Main() {
    return <Sheet sx={{display: "grid", gridTemplateColumns: "240px 1fr", overflow:"hidden" }}>
            <Nav />
            <Box sx={{p: 1, overflowY: "auto", maxHeight: "100vh" }}>
                <Outlet />
            </Box>
            
    </Sheet>
}