import * as Yup from 'yup';

const StudentLoginValidationSchema = Yup.object({
  regNo: Yup.string().length(16, "Invalid registration number")
    .required('Registration number is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

export default StudentLoginValidationSchema;
