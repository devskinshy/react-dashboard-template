import React, {useState} from 'react';
import * as Yup from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {FormProvider, RHFTextField} from "../../helpers/hook-form";
import {Alert, IconButton, InputAdornment, Stack} from "@mui/material";
import {Iconify} from "../../helpers/iconify";
import {LoadingButton} from "@mui/lab";
import {styled} from "@mui/material/styles";

const LoginButtonStyle = styled(LoadingButton)(({theme}) => ({
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(2),
}))

const AuthForm = ({isSubmitting, onSubmit, error}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword((show) => !show);
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Email must be a valid email address').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  const defaultValues = {
    email: 'test@signal.io',
    password: 'test123!@#',
  };

  const methods = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues,
  });

  const { handleSubmit } = methods;

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        {!!error && <Alert severity="error">{error}</Alert>}

        <RHFTextField name="email" label="Email address" />

        <RHFTextField
          name="password"
          label="Password"
          type={showPassword ? 'text' : 'password'}
          autoComplete={"on"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleShowPassword} edge="end">
                  <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Stack>

      <LoginButtonStyle fullWidth size="large" type="submit" variant="contained" loading={isSubmitting}>
        Login
      </LoginButtonStyle>
    </FormProvider>
  );
};

export default AuthForm;