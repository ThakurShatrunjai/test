import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from 'next-themes';
import { Toaster } from '@/components/ui/sonner';
import { RouterProvider, createRouter, createRootRoute, createRoute } from '@tanstack/react-router';
import { lazy, Suspense } from 'react';

// Lazy load pages for code-splitting
const HomePage = lazy(() => import('./pages/HomePage'));
const AboutUsPage = lazy(() => import('./pages/AboutUsPage'));
const ContactUsPage = lazy(() => import('./pages/ContactUsPage'));
const MediaPressPage = lazy(() => import('./pages/MediaPressPage'));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      gcTime: 1000 * 60 * 10,
    },
  },
});

function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-4">
        <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto" />
        <p className="text-muted-foreground">Loading...</p>
      </div>
    </div>
  );
}

const rootRoute = createRootRoute();

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <HomePage />
    </Suspense>
  ),
});

const aboutUsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about-us',
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <AboutUsPage />
    </Suspense>
  ),
});

const contactUsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/contact-us',
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <ContactUsPage />
    </Suspense>
  ),
});

const mediaPressRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/media-press',
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <MediaPressPage />
    </Suspense>
  ),
});

const routeTree = rootRoute.addChildren([
  homeRoute, 
  aboutUsRoute, 
  contactUsRoute, 
  mediaPressRoute
]);

const router = createRouter({ 
  routeTree,
  basepath: import.meta.env.BASE_URL || '/',
});

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
        <RouterProvider router={router} />
        <Toaster />
      </ThemeProvider>
    </QueryClientProvider>
  );
}
