import { BrowserRouter, Routes, Route } from "react-router";
import Login from "../features/auth/components/Login";
import InstructorDashboard from "../features/dashboard/components/InstructorDashboard";
import Main from "../features/common/components/layout/Main";
import { Typography } from "@mui/joy";

export default function Router() {
    return <BrowserRouter>
        <Routes>
        <Route path="/login" element={<Login />} />
            <Route path="/" element={<Main />}>
                <Route path="home" element={<Typography level="h1">Home</Typography>} />
                <Route path="dashboard" element={<InstructorDashboard />} />
                <Route path="quizzes" element={<Typography level="h1">Quizzes</Typography>} />
                <Route path="students" element={<Typography level="h1">Students</Typography>} />
                <Route path="groups" element={<Typography level="h1">Groups</Typography>} />
                <Route path="instructors/dashboard" element={<InstructorDashboard />} />
            </Route>         
        </Routes>
    </BrowserRouter>
}