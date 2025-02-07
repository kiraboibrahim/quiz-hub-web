import {
  Grid,
  Card,
  Typography,
  Button,
  Stack,
  TabPanel,
  Sheet,
  Box,
  TabPanelProps,
  CircularProgress,
} from '@mui/joy';
import {
  Group,
  Upload,
} from '@mui/icons-material';
import QuizIcon from '@mui/icons-material/Quiz';
import SchoolIcon from '@mui/icons-material/School';
import QuizCard from './QuizCard';
import { Quiz } from '../types/quiz.types';
import CustomTabs from '../../common/components/layout/Tabs';
import CustomTabList from '../../common/components/layout/TabList';
import CustomTab from '../../common/components/layout/Tab';

const mockQuizzes: Quiz[] = [
  {
    id: '1',
    title: 'Introduction to Programming',
    duration: 60,
    dueDate: new Date('2024-03-20'),
    status: 'upcoming',
    totalStudents: 50,
    submitted: 0,
    course: 'CS101'
  },
  {
    id: '2',
    title: 'Systems Approach',
    duration: 60,
    dueDate: new Date('2024-03-20'),
    status: 'upcoming',
    totalStudents: 50,
    submitted: 0,
    course: 'CS101'
  },
  {
    id: '10',
    title: 'Systems Approach',
    duration: 60,
    dueDate: new Date('2024-03-20'),
    status: 'upcoming',
    totalStudents: 50,
    submitted: 0,
    course: 'CS101'
  },
  {
    id: '3',
    title: 'Principles of OOP',
    duration: 60,
    dueDate: new Date('2024-03-20'),
    status: 'open',
    totalStudents: 50,
    submitted: 0,
    course: 'CS101'
  },
  {
    id: '4',
    title: 'Science & the Quran',
    duration: 60,
    dueDate: new Date('2024-03-20'),
    status: 'closed',
    totalStudents: 50,
    submitted: 0,
    course: 'CS101'
  },
  {
    id: '5',
    title: 'Introduction to Database Programming',
    duration: 60,
    dueDate: new Date('2024-03-20'),
    status: 'closed',
    totalStudents: 50,
    submitted: 0,
    course: 'CS101'
  },

  {
    id: '6',
    title: 'SDLC',
    duration: 60,
    dueDate: new Date('2024-03-20'),
    status: 'open',
    totalStudents: 50,
    submitted: 0,
    course: 'CS101'
  },
];

const InstructorDashboard = () => {
  return (
    <Sheet sx={{ p: 3, margin: '0 auto', bgcolor: "background.level1" }}>
      <Analytics />
      <Grid container spacing={2}>
        <Grid xs={12} md={7}>
          <QuizOverview />
        </Grid>
        <Grid xs={12} md={5}>
          <QuickActions />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid xs={0} md={7}></Grid>
        <Grid xs={12} md={5}>
          <Preferences />
        </Grid>
      </Grid>
    </Sheet>
  );
};

const analytics = [
  {label: "Active Quizzes", value: "12"},
  {label: "Students", value: "145"},
  {label: "Courses", value: 8},
  {label: "Avg. Performance", value: "85%"}
]
const Analytics = () => {
  return (
    <Grid container spacing={2} sx={{ mb: 3 }}>
      {analytics.map(({label, value}, index) => {
        return <Grid xs={12} sm={6} md={3} key={index}>
        <Card variant="soft" sx={{bgcolor: "background.body"}}>
          <Stack direction="row" spacing={2} alignItems="center">
            <div>
              <Typography level="h4">{value}</Typography>
              <Typography level="body-sm">{label}</Typography>
            </div>
          </Stack>
        </Card>
      </Grid>
      })}
    </Grid>
  )
}

const quickActions = [
  {label: "Create Quiz", icon: <QuizIcon sx={{fontSize: 30, color: "primary.500"}}/>},
  {label: "Create Student", icon: <SchoolIcon sx={{fontSize: 30, color: "primary.500"}} />},
  {label: "Create Group", icon: <Group sx={{fontSize: 30, color: "primary.500"}} />},
  {label: "Upload Material", icon: <Upload  sx={{fontSize: 30, color: "primary.500"}} />}
]
const QuickActions = () => {
  return (
    <Box sx={{bgcolor: 'background.body', borderRadius: "sm"}}>
      <Typography level="h2" sx={{fontSize: 14, p: 2, m: 0, borderBottom: "1px solid", bgcolor: "primary.500", color: "common.white"}}>Quick Actions</Typography>
      <Grid container sx={{overflow: "hidden"}}>
      {quickActions.map(({ label, icon }, index) => (
        <Grid
          key={label}
          xs={6}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            borderRight: index % 2 === 0 ? '1px solid' : 'none',
            borderBottom: index < 2 ? '1px solid' : 'none',
            borderColor: 'divider',
            p: 2,
          }}
        >
          <Stack alignItems="center">
            {icon}
            <Button variant="plain" color="neutral" sx={{fontSize: 13, borderRadius: "lg"}}>
              {label}
            </Button>
          </Stack>
        </Grid>
      ))}
    </Grid>
    </Box>
    
  )
}

const preferences = [
  {
    value: <CircularProgress size="lg" determinate value={60}>60%</CircularProgress>,
    label: "Pass mark"
  },
  {
    value: "30 min",
    label: "Duration"
  },
  {
    value: "14 days",
    label: "Validity"
  },
  {
    value: "01",
    label: "Attempts"
  }
]
const Preferences = () => {
  return (
    <Box sx={{bgcolor: "background.body"}}>
      <Typography level="h2" sx={{fontSize: 14, p: 2, m: 0, borderBottom: "1px solid", borderBottomColor: "divider", bgcolor: "primary.500", color: "common.white"}}>
        Preferences
      </Typography>
    <Grid container spacing={2} sx={{ mb: 3, p: 1 }}>
      {preferences.map(({label, value}, index) => {
        return <Grid xs={12} sm={6} key={index}>
        <Card variant="soft" sx={{ height: 1}} >
          <Stack direction="row" spacing={2} alignItems="center">
            <div>
              <Typography level="h4">{value}</Typography>
              <Typography level="body-sm">{label}</Typography>
            </div>
          </Stack>
        </Card>
      </Grid>
      })}
    </Grid>    
    </Box>
  )
}
const HorizontalScrollTabPanel = (props: TabPanelProps) => {
  const {sx=[], children} = props;

  return <TabPanel {...props} sx={[
    {
      width: 1,
      overflowY: "hidden",
      overflowX: "auto",
      whiteSpace: "nowrap",
      "&::-webkit-scrollbar": {
        display: "none",
      },
      "&": {
        scrollbarWidth: "none",
        msOverflowStyle: "none",
      },
    },
    ...(Array.isArray(sx) ? sx: [sx])
  ]
  }>{children}</TabPanel>; 
}
const QuizOverview = () => {
  return (
    <Card variant="plain">
      <CustomTabs defaultValue={0}>
        <CustomTabList sx={
          {
            overflow: 'auto',
            scrollSnapType: 'x mandatory',
            '&::-webkit-scrollbar': { 
              display: 'none' 
            },
          }
        }>
          <CustomTab sx={{flexGrow: 1, flexShrink: 0, fontSize: 14, scrollSnapAlign: 'start'}}>Upcoming Quizzes</CustomTab>
          <CustomTab sx={{flexGrow: 1, flexShrink: 0, fontSize: 14, scrollSnapAlign: 'start'}}>Open Quizzes</CustomTab>
          <CustomTab sx={{flexGrow: 1, flexShrink: 0, fontSize: 14, scrollSnapAlign: 'start'}}>Closed Quizzes</CustomTab>
        </CustomTabList>
        <HorizontalScrollTabPanel value={0}>
          {mockQuizzes
            .filter(quiz => quiz.status === 'upcoming')
            .map((quiz, index) => (
              <QuizCard
                key={quiz.id}
                quiz={quiz}
                sx={
                  {
                    display: "inline-block",
                    mr: index === mockQuizzes.length - 1 ? 0 : 1,
                  }
                }
              />
            ))}
        </HorizontalScrollTabPanel>
        <HorizontalScrollTabPanel value={1}>
        {mockQuizzes
            .filter(quiz => quiz.status === 'open')
            .map((quiz, index) => (
              <QuizCard
                key={quiz.id}
                quiz={quiz}
                sx={
                  {
                    display: "inline-block",
                    mr: index === mockQuizzes.length - 1 ? 0 : 1,
                  }
                }
              />
            ))}
        </HorizontalScrollTabPanel>
        <HorizontalScrollTabPanel value={2}>
        {mockQuizzes
            .filter(quiz => quiz.status === 'closed')
            .map((quiz, index) => (
              <QuizCard
                key={quiz.id}
                quiz={quiz}
                sx={
                  {
                    display: "inline-block",
                    mr: index === mockQuizzes.length - 1 ? 0 : 1,
                  }
                }
              />
            ))}
        </HorizontalScrollTabPanel>        
      </CustomTabs>
    </Card>
  )
}
export default InstructorDashboard;