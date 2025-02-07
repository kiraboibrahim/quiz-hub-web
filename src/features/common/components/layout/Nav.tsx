import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';
import DashboardIcon from '@mui/icons-material/DashboardOutlined';
import { Typography, Box, Stack, Avatar, ListItemContent } from '@mui/joy';
import QuizIcon from '@mui/icons-material/QuizOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import GroupsIcon from '@mui/icons-material/GroupsOutlined';
import HomeIcon from '@mui/icons-material/HomeOutlined';
import { Link } from 'react-router';
import { useState } from 'react';

const links = [
    {
        name: "Home",
        to: "/",
        icon: <HomeIcon sx={{ mr: 2, color: "neutral.200", fontSize: 25 }}/>
    },
    {
        name: "Dashboard",
        to: "/dashboard",
        icon: <DashboardIcon sx={{ mr: 2, color: "neutral.200", fontSize: 25 }} />
    },
    {
        name: "Quizzes",
        to: "/quizzes",
        icon: <QuizIcon sx={{ mr: 2, color: "neutral.200", fontSize: 25 }} />
    },
    {
        name: "Students",
        to: "/students",
        icon: <SchoolOutlinedIcon sx={{ mr: 2, color: "neutral.200", fontSize: 25 }} />
    },
    {
        name: "Groups",
        to: "/groups",
        icon: <GroupsIcon sx={{ mr: 2, color: "neutral.200", fontSize: 25 }} />
    }
];

export default function Nav() {
    const [activeIndex, setIndex] = useState<null | number>(0);
  return (
    <Stack direction="column" sx={{ maxWidth: "240px", height: "100vh", maxHeight: "100vh", overflowY: "scroll", bgcolor: "primary.900", p: 2 }}>
        <Box sx={{p: 3, bgcolor: "primary.800", borderRadius: "md"}}>
            <Typography level="h1" sx={{color: "common.white"}}>QuizHub</Typography>
        </Box>
        <List sx={(theme) => ({mt: 4, mb: "auto", // override global variant tokens
          '--joy-palette-neutral-plainHoverBg': theme.palette.primary[800],
          '--joy-palette-neutral-plainActiveBg': theme.palette.primary[600],
          })}>
            {links.map(({name, to, icon}, index) => {
                return <ListItem key={index}>
                <ListItemButton component={Link} to={to} sx={
                    {
                        mb: 2,
                        borderRadius: "md",
                    }
                }
                selected={activeIndex === index}
                onClick={() => setIndex(index)}
                >
                {icon}
                <Typography sx={{color: "neutral.300", fontSize: 14}}>{name}</Typography>
                </ListItemButton>
            </ListItem>
            })}
        </List>
        <Box sx={{bgcolor: "primary.800", p: 3, borderRadius: "md"}}>
            <Stack direction="row">
                <Avatar alt="KI" sx={{mr: 1}}>KI</Avatar>
                <ListItemContent>
                    <Typography level="title-sm" sx={{color: "common.white"}}>Kirabo Ibrahim</Typography>
                    <Typography level="body-xs" noWrap sx={{color: "neutral.300"}}>kiraboibra268@gmail.com</Typography>
                </ListItemContent>
            </Stack>
        </Box>
    </Stack>
    
  );
}