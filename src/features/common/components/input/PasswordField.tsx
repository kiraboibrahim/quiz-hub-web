import { useState } from "react";
import { InputProps, FormControl, IconButton, FormHelperText, Input, FormLabel } from "@mui/joy";
import { useField, Field, ErrorMessage } from "formik";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Visibility, VisibilityOff } from '@mui/icons-material';


export default function PasswordField({name="password", label="Password", sx=[], ...props}: InputProps & {label?: string}) {
    const [field, meta] = useField(name);
    const [isPasswordVisible, setPasswordVisibility] = useState(false);
    const togglePasswordVisibility = () => {
        setPasswordVisibility(!isPasswordVisible);
    }
    const hasError = meta.touched && !!meta.error;
    return (
        <FormControl error={hasError} sx={[...Array.isArray(sx) ? sx: [sx]]}>
          <FormLabel htmlFor={name}>{label}</FormLabel>
          <Field
            as={Input}
            startDecorator={<LockOutlinedIcon sx={{fontSize: 20}} />}
            type={isPasswordVisible ? 'text' : 'password'}
            {...field}
            {...props}
            endDecorator={
              <IconButton
                onClick={() => togglePasswordVisibility()}
                variant="plain"
                color="neutral"
              >
                {isPasswordVisible ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            }
          />
          <FormHelperText sx={{fontSize: 13}}>
            <ErrorMessage name={name} />
          </FormHelperText>
        </FormControl>
    )
}