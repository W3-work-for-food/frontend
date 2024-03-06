import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Box, IconButton, InputAdornment } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import { useSelector } from 'react-redux';
import loginSchema from '@/utils/validationSchema';

import {
  ErrorMessage,
  DefaultLabel,
  ErrorLabel,
} from '@/components/ui/Form/Elements';
import { PrimaryButton } from '@/components/ui/Buttons/Buttons';
import Logo from '@/assets/icons/Logo';
import { useAppDispatch } from '@/services/typeHooks';
import {
  getProfileUser,
  loginUser,
  selectError,
} from '@/services/redux/slices/auth/auth';
import {
  DefaultInput,
  DefaultOutlinedInput,
} from '@/components/ui/Inputs/Inputs';
import { ROUTE_HOME } from '@/utils/constants';
import SlashedEye from '@/assets/icons/SlashedEye';
import Eye from '@/assets/icons/Eye';

const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [emailС, setEmail] = useState('');
  const [passwordС, setPassword] = useState('');

  const [showPassword, setShowPassword] = useState(false);
  const error = useSelector(selectError);

  useEffect(() => {
    // console.log(error);
  }, [error]); // Подписываемся на изменения error

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  interface LoginFormInputs {
    email: string;
    password: string;
  }

  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    resolver: yupResolver<LoginFormInputs>(loginSchema),
    mode: 'onSubmit',
  });

  const getInputError = (fieldName: string) => {
    return Object.prototype.hasOwnProperty.call(errors, fieldName);
  };

  // Form submission handler
  const onSubmit: SubmitHandler<LoginFormInputs> = (data) => {
    const email = data.email as string;
    const password = data.password as string;

    // Вызываем loginUser action с данными из формы
    dispatch(loginUser({ email, password })).then((resultAction) => {
      if (loginUser.fulfilled.match(resultAction)) {
        // После успешного входа, пользователь будет перенаправлен на главную страницу
        const access = localStorage.getItem('accessToken') ?? '';
        dispatch(getProfileUser({ access }));
        navigate(ROUTE_HOME);
      }
    });
  };

  interface Props {
    field: {
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
      value: string;
    };
  }

  return (
    <form noValidate onSubmit={handleSubmit(onSubmit)} data-testid="loginForm">
      <Logo />
      <Box
        sx={{
          gap: '4px',
          display: 'flex',
          alignItems: 'center',
          marginBottom: '24px',
          flexDirection: 'column',
        }}
      >
        {error && (
          <ErrorLabel>
            Не удается войти. Пожалуйста, проверьте правильность написания
            логина и пароля
          </ErrorLabel>
        )}
      </Box>
      <DefaultLabel style={{ textAlign: 'left' }}>E-mail</DefaultLabel>
      <FormControl
        style={{ marginBottom: '16px' }}
        fullWidth
        error={!!errors.email}
        variant="standard"
      >
        <Controller
          control={control}
          name="email"
          defaultValue={emailС}
          render={(props: Props) => (
            <DefaultInput
              autoComplete="off"
              type="email"
              value={props.field.value}
              fullWidth
              placeholder="Введите E-mail"
              autoFocus
              id="email"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setValue('email', e.target.value);
                setEmail(e.target.value);
                props.field.onChange(e);
              }}
              error={getInputError('email')}
            />
          )}
        />
        <div className="auth-error">
          {errors.email && (
            <ErrorMessage id="email">{errors.email?.message}</ErrorMessage>
          )}
        </div>
      </FormControl>
      <DefaultLabel style={{ textAlign: 'left' }}>Пароль</DefaultLabel>
      <FormControl
        style={{ marginBottom: '24px' }}
        fullWidth
        variant="standard"
        error={!!errors.password}
      >
        <Controller
          control={control}
          name="password"
          defaultValue={passwordС}
          render={(props) => (
            <DefaultOutlinedInput
              value={props.field.value}
              fullWidth
              placeholder="Введите пароль"
              type={showPassword ? 'text' : 'password'}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <SlashedEye /> : <Eye />}
                  </IconButton>
                </InputAdornment>
              }
              id="password"
              onChange={(e) => {
                setValue('password', e.target.value);
                setPassword(e.target.value);
                props.field.onChange(e);
              }}
              error={getInputError('password')}
            />
          )}
        />
        <div className="auth-error">
          {errors.password && (
            <ErrorMessage id="password">
              {errors.password?.message}
            </ErrorMessage>
          )}
        </div>
      </FormControl>
      <PrimaryButton type="submit" variant="contained">
        Войти
      </PrimaryButton>
    </form>
  );
};

export default Login;
