import { Drawer, List, styled, Button, Typography, Box } from '@mui/material';
import UserIcon from '../../assets/usuarios.svg';
import RolIcon from '../../assets/usuarios.svg';
import TraceIcon from '../../assets/usuarios.svg';
import AuditIcon from '../../assets/usuarios.svg';
import RecordIcon from '../../assets/usuarios.svg';
import WorkerIcon from '../../assets/usuarios.svg';
import ProcessIcon from '../../assets/usuarios.svg';
import logo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';

const drawerWidth = 280;

interface DrawerButton {
  text: string;
  icon: JSX.Element;
  to: string;
}

const StyledButton = styled(Button)({
  color: '#4F2D80',
  width: '234px',
  height: '48px',
  justifyContent: 'flex-start',
  fontSize: '18px',
  marginBottom: '8px',
  paddingLeft: '23px',
  alignItems: 'left',
  gap: '.7rem',
  '&:hover, &:focus': {
    background: '#4F2D80',
    color: '#FFFFFF',
  },
});

const securityButtons: DrawerButton[] = [
  {
    text: 'Usuarios',
    icon: <UserIcon />,
    to: '/usuarios',
  },
  {
    text: 'Roles',
    icon: <RolIcon />,
    to: '/roles',
  },
  {
    text: 'Trazas',
    icon: <TraceIcon />,
    to: '/trazas',
  },
  {
    text: 'Auditoría',
    icon: <AuditIcon />,
    to: '/auditoría',
  },
];

const rrhhButtons: DrawerButton[] = [
  {
    text: 'Expedientes',
    icon: <RecordIcon />,
    to: '/expedientes',
  },
  {
    text: 'Trabajadores',
    icon: <WorkerIcon />,
    to: '/trabajadores',
  },
  {
    text: 'Procesos',
    icon: <ProcessIcon />,
    to: '/procesos',
  },
];

export const Sidebar = () => {
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
      }}
      variant='permanent'>
      <Box sx={{ w: '230px', h: '63px', margin: '40px 26.65px 40.49px 23px' }}>
        <img src={logo} />
      </Box>

      <Typography
        sx={{
          cursor: 'default',
          color: '#CBC7CF',
          ml: '23px',
          mb: '15px',
          fontSize: '18px',
          fontWeight: '600',
        }}>
        SEGURIDAD
      </Typography>
      <List sx={{ alignContent: 'center', marginX: '23px' }}>
        {securityButtons.map((button, index) => (
          <Link to={button.to} key={index} style={{ textDecoration: 'none' }}>
            <StyledButton sx={{ mr: '7px' }} startIcon={button.icon}>
              {button.text}
            </StyledButton>
          </Link>
        ))}
      </List>
      <Typography
        sx={{
          cursor: 'default',
          color: '#CBC7CF',
          ml: '23px',
          mt: '19px',
          mb: '8px',
          fontSize: '18px',
          fontWeight: '600',
        }}>
        RRHH
      </Typography>
      <List sx={{ alignContent: 'center', marginX: '23px' }}>
        {rrhhButtons.map((button, index) => (
          <Link to={button.to} key={index} style={{ textDecoration: 'none' }}>
            <StyledButton startIcon={button.icon}>{button.text}</StyledButton>
          </Link>
        ))}
      </List>
    </Drawer>
  );
};
