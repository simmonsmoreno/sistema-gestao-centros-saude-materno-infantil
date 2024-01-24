// Importando o componente SvgColor
import SvgColor from 'src/components/svg-color';

// Função para criar um ícone SVG com uma cor específica
// O nome do ícone é passado como argumento
const icon = (name) => (
  // SvgColor é um componente que renderiza um ícone SVG
  // O caminho para o arquivo SVG é construído usando o nome do ícone
  // A largura e a altura do ícone são definidas como 1
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

// Configuração da navegação
// Cada item do array representa um link na navegação
// Cada item tem um título, um caminho e um ícone
const navConfig = [
  {
    title: 'dashboard',
    path: '/',
    icon: icon('ic_analytics'),
  },
  {
    title: 'user',
    path: '/user',
    icon: icon('ic_user'),
  },
  {
    title: 'product',
    path: '/products',
    icon: icon('ic_cart'),
  },
  {
    title: 'blog',
    path: '/blog',
    icon: icon('ic_blog'),
  },
  {
    title: 'login',
    path: '/login',
    icon: icon('ic_lock'),
  },
  {
    title: 'Not found',
    path: '/404',
    icon: icon('ic_disabled'),
  },
];

// Exportando a configuração da navegação
export default navConfig;