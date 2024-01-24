import { useState } from 'react';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';

import Nav from './nav';
import Main from './main';
import Header from './header';

// ----------------------------------------------------------------------

export default function DashboardLayout({ children }) {

  // Estado para controlar a abertura da navegação
  const [openNav, setOpenNav] = useState(false);

  return (
    <>
      {/* Cabeçalho, que recebe uma função para abrir a navegação */}
      <Header onOpenNav={() => setOpenNav(true)} />

      {/* Box que contém a navegação e o conteúdo principal */}
      <Box
        sx={{
          minHeight: 1,
          display: 'flex',
          flexDirection: { xs: 'column', lg: 'row' },
        }}
      >
        {/* Navegação, que recebe o estado de abertura e uma função para fechá-la */}
        <Nav openNav={openNav} onCloseNav={() => setOpenNav(false)} />

        {/* Conteúdo principal, que recebe os filhos do componente DashboardLayout */}
        <Main>{children}</Main>
      </Box>
    </>
  );
}

// Definindo as propriedades do componente
DashboardLayout.propTypes = {
  children: PropTypes.node,
};
