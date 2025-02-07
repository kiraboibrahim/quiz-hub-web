import { InputProps, FormControl, FormHelperText, Input, FormLabel } from "@mui/joy";
import { useField, Field, ErrorMessage } from "formik";

export default function TextField({name, label, sx=[], ...props}: InputProps & {label: string, name: string}) {
    const [field, meta] = useField(name);
    const hasError = meta.touched && !!meta.error;
    return (
        <FormControl error={hasError} sx={[...Array.isArray(sx) ? sx: [sx]]}>
          <FormLabel htmlFor={name}>{label}</FormLabel>
          <Field
            as={Input}
            type="text"
            {...field}
            {...props}
          />
          <FormHelperText sx={{fontSize: 13}}>
            <ErrorMessage name={name} />
          </FormHelperText>
        </FormControl>
    )
}