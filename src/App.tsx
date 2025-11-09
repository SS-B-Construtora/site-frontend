import { lazy, Suspense } from 'react';
import { ErrorBoundary, type FallbackProps } from 'react-error-boundary';
import { Route, Routes } from 'react-router';
import { LoadingOrError } from '@/components/LoadingOrError';
import { Gallery } from '@/pages/Gallery';
import { Home } from './pages/Home';
import { AboutUs } from './pages/about/AboutUs';
import Obras from './pages/obras/Obras';
import Locacoes from './pages/locacoes/Locacoes';
import QSMS from './pages/qsms/QSMS';
import DetailsLocation from './pages/locacoes/DetailsLocation';
import Noticias from './pages/noticias/Noticias';
import DetalhesNoticia from './pages/noticias/DetalhesNoticia';
import Contact from './pages/contact/Contact';
import { ProjetosSociais } from './pages/projetos-sociais';
import { DetalhesProjetoSocial } from './pages/projetos-sociais';
import DetailsObra from './pages/obras/DetailsObra';

const Details = lazy(async () =>
  import('@/pages/Details').then((m) => ({ default: m.Details })),
);

function renderError({ error }: FallbackProps) {
  return <LoadingOrError error={error} />;
}

export function App() {
  return (
    <ErrorBoundary fallbackRender={renderError}>
      <Suspense fallback={<LoadingOrError />}>
        <Routes>
          <Route element={<Home />} index={true} />
          <Route element={<AboutUs />} path="aboutUs" />
          <Route element={<Obras />} path="obras" />
          <Route element={<DetailsObra />} path="obras/detalhes" />
          <Route element={<QSMS />} path="qsms" />
          <Route element={<DetailsLocation />} path="locacoes/detalhes/" />
          <Route element={<Noticias />} path="noticias" />
					<Route element={<DetalhesNoticia />} path="noticias/detalhes" />
          <Route element={<Contact />} path="faleconosco" />
          <Route element={<ProjetosSociais />} path="projetos-sociais" />
          <Route element={<DetalhesProjetoSocial />} path="projetos-sociais/detalhes" />


          <Route element={<Locacoes />} path="locacoes" />
          <Route element={<Gallery />} path=":gallery" />
          <Route element={<Details />} path=":fruitName" />
        </Routes>
      </Suspense>
    </ErrorBoundary>
  );
}
