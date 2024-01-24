import { useState } from 'react';

import Slide from '@mui/material/Slide';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import ClickAwayListener from '@mui/material/ClickAwayListener';

import { bgBlur } from 'src/theme/css';

import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

// Definindo constantes para as alturas do cabeçalho móvel e desktop
const HEADER_MOBILE = 64;
const HEADER_DESKTOP = 92;

// Definindo um componente estilizado para a barra de pesquisa
const StyledSearchbar = styled('div')(({ theme }) => ({
  // Aplicando um efeito de desfoque ao fundo
  ...bgBlur({
    color: theme.palette.background.default,
  }),
  // Definindo as propriedades CSS do componente
  top: 0,
  left: 0,
  zIndex: 99,
  width: '100%',
  display: 'flex',
  position: 'absolute',
  alignItems: 'center',
  height: HEADER_MOBILE,
  padding: theme.spacing(0, 3),
  boxShadow: theme.customShadows.z8,
  [theme.breakpoints.up('md')]: {
    height: HEADER_DESKTOP,
    padding: theme.spacing(0, 5),
  },
}));

// ----------------------------------------------------------------------

export default function Searchbar() {

  // Estado para controlar a abertura da barra de pesquisa
  const [open, setOpen] = useState(false);

  // Função para abrir/fechar a barra de pesquisa
  const handleOpen = () => {
    setOpen(!open);
  };

  // Função para fechar a barra de pesquisa
  const handleClose = () => {
    setOpen(false);
  };

  return (
    // O ClickAwayListener fecha a barra de pesquisa quando o usuário clica fora dela
    <ClickAwayListener onClickAway={handleClose}>
      <div>
        {/* O botão de pesquisa só é exibido quando a barra de pesquisa está fechada */}
        {!open && (
          <IconButton onClick={handleOpen}>
            <Iconify icon="eva:search-fill" />
          </IconButton>
        )}

        {/* A barra de pesquisa é exibida com uma animação de deslizamento */}
        <Slide direction="down" in={open} mountOnEnter unmountOnExit>
          <StyledSearchbar>
            {/* O campo de entrada da barra de pesquisa */}
            <Input
              autoFocus
              fullWidth
              disableUnderline
              placeholder="Pesquisar…"
              startAdornment={
                <InputAdornment position="start">
                  <Iconify
                    icon="eva:search-fill"
                    sx={{ color: 'text.disabled', width: 20, height: 20 }}
                  />
                </InputAdornment>
              }
              sx={{ mr: 1, fontWeight: 'fontWeightBold' }}
            />
            {/* O botão para executar a pesquisa */}
            <Button variant="contained" onClick={handleClose}>
              Pesquisar
            </Button>
          </StyledSearchbar>
        </Slide>
      </div>
    </ClickAwayListener>
  );
}
