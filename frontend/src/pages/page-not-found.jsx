import { Helmet } from 'react-helmet-async';

import { NotFoundView } from 'src/sections/error';

// ----------------------------------------------------------------------

export default function NotFoundPage() {
  return (
    <>
      <Helmet>
        <title> 404 Página não encontrada </title>
      </Helmet>

      <NotFoundView />
    </>
  );
}
