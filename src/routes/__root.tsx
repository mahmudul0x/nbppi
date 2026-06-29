import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
} from "@tanstack/react-router";
import { useEffect } from "react";

function NotFoundComponent() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-[#07204E]">
      {/* Grid bg */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      {/* Glow blobs */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-[#0A6A38]/20 blur-[100px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-64 w-64 rounded-full bg-[#0B2D6B]/40 blur-[80px]" />

      {/* Content */}
      <div className="relative flex flex-1 flex-col items-center justify-center px-4 text-center">
        {/* 404 number */}
        <div className="font-display text-[120px] font-black leading-none tracking-tight text-white/5 sm:text-[180px] lg:text-[220px]">
          404
        </div>
        <div className="-mt-6 sm:-mt-10">
          <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.28em] text-[#7FE0D4]">
            <span className="h-px w-6 bg-[#7FE0D4]" />
            Page not found
            <span className="h-px w-6 bg-[#7FE0D4]" />
          </div>
          <h1 className="mt-4 font-display text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
            This page doesn't exist.
          </h1>
          <p className="mx-auto mt-4 max-w-sm text-sm leading-relaxed text-white/50 sm:text-base">
            The page you're looking for may have been moved, renamed or is temporarily unavailable.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-xl bg-[#0A6A38] px-6 py-3 text-sm font-semibold text-white shadow-[0_8px_20px_-8px_rgba(10,106,56,0.6)] transition hover:bg-[#22887b]"
            >
              ← Back to Home
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Contact Us
            </Link>
          </div>

          {/* Quick links */}
          <div className="mt-12 border-t border-white/10 pt-8">
            <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/30">
              Quick Links
            </div>
            <div className="mt-4 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-white/50">
              {[
                ["Products", "/products"],
                ["About", "/about"],
                ["Quality", "/quality"],
                ["FAQ", "/faq"],
                ["Quote", "/quote"],
              ].map(([label, to]) => (
                <Link key={to} to={to} className="hover:text-[#7FE0D4] transition">
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer strip */}
      <div className="relative border-t border-white/10 py-4 text-center text-xs text-white/30">
        © {new Date().getFullYear()} North Bengal Poly &amp; Packaging Industries Ltd.
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    console.error("Route error:", error);
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
