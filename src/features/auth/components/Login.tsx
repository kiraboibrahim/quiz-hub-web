import { Formik, Form, FormikHelpers } from 'formik';
import {
  Box,
  Sheet,
  Typography,
  Button,
  Alert,
  Stack,
  TabPanel,
} from '@mui/joy';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import { School } from '@mui/icons-material';
import CustomTabs from '../../common/components/layout/Tabs';
import CustomTabList from '../../common/components/layout/TabList';
import CustomTab from '../../common/components/layout/Tab';
import PasswordField from '../../common/components/input/PasswordField';
import TextField from '../../common/components/input/TextField';
import InstructorLoginValidationSchema from '../schemas/instructorLoginSchema';
import StudentLoginValidationSchema from '../schemas/studentLoginSchema';
import useLogin from '../hooks/useLogin';

type InstructorFormValues = {
    email: string,
    password: string,
}

type StudentFormValues = {
    regNo: string,
    password: string
}

enum TABS {
    STUDENT = 0,
    INSTRUCTOR = 1
};
  
const Login = () => {
  const loginInstructor = useLogin("instructor");
  const loginStudent = useLogin("student");
  const handleInstructorLogin = async (values: InstructorFormValues, { setSubmitting, setStatus }: FormikHelpers<InstructorFormValues>) => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      await loginInstructor(values as any);
    } catch {
      setStatus('Invalid credentials. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };
  const handleStudentLogin = async (values: StudentFormValues, { setSubmitting, setStatus }: FormikHelpers<StudentFormValues>) => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      await loginStudent(values as any)
    } catch {
      setStatus('Invalid credentials. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };
  

  return (
    <Box
      sx={{
        display: 'flex',
        minHeight: '100vh',
        minWidth: "100vw",
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'background.level1',
      }}
    >
      <Sheet
        variant="outlined"
        sx={{
          width: { xs: '90%', sm: '350px' },
          borderRadius: 'md',
          boxShadow: 'md',
          padding: 2
        }}
      >
        <Stack alignItems="center" sx={{marginBottom: 5}}>
            <School sx={{ fontSize: 80, color: 'primary.500' }} />
            <Typography level="h1" fontSize={15}>Welcome to QuizHub</Typography>
        </Stack>
          <CustomTabs defaultValue={TABS.INSTRUCTOR}>
            <CustomTabList>
              <CustomTab sx={{flexGrow: 1, fontSize: 14}}>Instructor</CustomTab>
              <CustomTab sx={{flexGrow: 1, fontSize: 14}}>Student</CustomTab>
            </CustomTabList>
            <TabPanel value={TABS.INSTRUCTOR}>
              <InstructorLoginForm onSubmit={handleInstructorLogin}/>
            </TabPanel>
            <TabPanel value={TABS.STUDENT}>
              <StudentLoginForm onSubmit={handleStudentLogin} />
            </TabPanel>
          </CustomTabs>
      </Sheet>
    </Box>
  );
};

const InstructorLoginForm =({onSubmit}: {onSubmit: (values: InstructorFormValues, helpers: FormikHelpers<InstructorFormValues>) => void}) => (
  <Formik
    initialValues={{ email: '', password: '' }}
    validationSchema={InstructorLoginValidationSchema}
    onSubmit={onSubmit}
  >
    {({isSubmitting, status}) => (
      <Form>
        <Stack spacing={2}>
          {status && (
            <Alert variant="soft" color="danger">
              {status}
            </Alert>
          )}
          <TextField
            label="Email"
            startDecorator={<EmailOutlinedIcon sx={{fontSize: 20 }} />}
            name="email"
            type="email"
          />
          <PasswordField />
        </Stack>
        <Stack direction="row" sx={{mt: 5}}>
          <Button variant="plain" color="primary" size="sm">
            Forgot password?
          </Button>
          <Button
              type="submit"
              color="primary"
              sx={{marginLeft: "auto"}}
              loading={isSubmitting}
              disabled={isSubmitting}
              loadingPosition="start"
          >
              Signin
          </Button>
        </Stack>
      </Form>
    )}   
  </Formik>
);

const StudentLoginForm = ({onSubmit}: {onSubmit: (values: StudentFormValues, helpers: FormikHelpers<StudentFormValues>) => void}) => (
  <Formik
    initialValues={{ regNo: '', password: '' }}
    validationSchema={StudentLoginValidationSchema}
    onSubmit={onSubmit}
  >
    {({isSubmitting, status}) => (
      <Form>
        <Stack spacing={2}>
          {status && (
            <Alert variant="soft" color="danger">
              {status}
            </Alert>
          )}
          <TextField
            label="Reg No"
            startDecorator={<SchoolOutlinedIcon sx={{fontSize: 20 }} />}
            name="regNo"
            type="text"
          />
          <PasswordField />
        </Stack>
        <Stack direction="row" sx={{mt: 5}}>
          <Button variant="plain" color="primary" size="sm">
            Forgot password?
          </Button>
          <Button
              type="submit"
              color="primary"
              sx={{marginLeft: "auto"}}
              loading={isSubmitting}
              disabled={isSubmitting}
              loadingPosition="start"
          >
              Signin
          </Button>
        </Stack>
      </Form>
    )}   
  </Formik>
);

export default Login;