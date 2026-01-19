import { Link } from "react-router-dom";
import { Home } from "lucide-react";
import Layout from "@/components/layout/Layout";

const NotFound = () => {
  return (
    <Layout>
      <section className="py-20 bg-off-white min-h-[60vh] flex items-center">
        <div className="section-container text-center">
          <h1 className="text-primary mb-4">404</h1>
          <h2 className="text-primary mb-6">Page Not Found</h2>
          <div className="gold-divider mb-6" />
          <p className="text-muted-foreground max-w-md mx-auto mb-8">
            The page you are looking for does not exist or has been moved. Please
            return to the home page.
          </p>
          <Link
            to="/"
            className="btn-primary inline-flex items-center justify-center gap-2"
          >
            <Home size={18} />
            Return to Home
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
