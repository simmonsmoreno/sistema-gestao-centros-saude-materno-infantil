// Importando os módulos necessários
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { useTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';

import { useResponsive } from 'src/hooks/use-responsive';

import { bgBlur } from 'src/theme/css';

import Iconify from 'src/components/iconify';

import Searchbar from './common/searchbar';
import { NAV, HEADER } from './config-layout';
import AccountPopover from './common/account-popover';
import NotificationsPopover from './common/notifications-popover';

// ----------------------------------------------------------------------

export default function Header({ onOpenNav }) {

  // Obtendo o tema atual
  const theme = useTheme();

  // Verificando se a largura da tela é maior ou igual a 'lg'
  const lgUp = useResponsive('up', 'lg');

  // Conteúdo a ser renderizado no cabeçalho
  const renderContent = (
    <>
      {/* Se a largura da tela for menor que 'lg', renderiza o botão para abrir a navegação */}
      {!lgUp && (
        <IconButton onClick={onOpenNav} sx={{ mr: 1 }}>
          <Iconify icon="eva:menu-2-fill" />
        </IconButton>
      )}

      {/* Barra de pesquisa */}
      <Searchbar />

      {/* Espaço vazio para empurrar o restante do conteúdo para a direita */}
      <Box sx={{ flexGrow: 1 }} />

      {/* Popovers de notificações e conta */}
      <Stack direction="row" alignItems="center" spacing={1}>
        <NotificationsPopover />
        <AccountPopover />
      </Stack>
    </>
  );

  // Renderização do componente
  return (
    <AppBar
      sx={{
        boxShadow: 'none',
        height: HEADER.H_MOBILE,
        zIndex: theme.zIndex.appBar + 1,
        ...bgBlur({
          color: theme.palette.background.default,
        }),
        transition: theme.transitions.create(['height'], {
          duration: theme.transitions.duration.shorter,
        }),
        ...(lgUp && {
          width: `calc(100% - ${NAV.WIDTH + 1}px)`,
          height: HEADER.H_DESKTOP,
        }),
      }}
    >
      <Toolbar
        sx={{
          height: 1,
          px: { lg: 5 },
        }}
      >
        {renderContent}
      </Toolbar>
    </AppBar>
  );
}

// Definindo as propriedades do componente
Header.propTypes = {
  onOpenNav: PropTypes.func,
};