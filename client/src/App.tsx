import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "./pages/Home";
import { useEffect, useState } from "react";
import { MusicProvider } from "./context/MusicContext";
import PasswordProtection from "./components/PasswordProtection";

function Router() {
  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  const handleAuthenticated = () => {
    setIsAuthenticated(true);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <MusicProvider>
        {!isAuthenticated ? (
          <PasswordProtection 
            password="ilymokshita" 
            onAuthenticated={handleAuthenticated} 
          />
        ) : (
          <>
            <Router />
            <Toaster />
          </>
        )}
      </MusicProvider>
    </QueryClientProvider>
  );
}

export default App;
