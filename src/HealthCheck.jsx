import { useEffect } from "react";

const HealthCheck = () => {
  const primaryDomain = "https://www.mayanknasa.com";
  const backupDomain = "https://mayanknasa.netlify.app";

  const isLocal = window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1";

  const checkDomainHealth = async () => {
    // Skip if running locally or on the backup domain
    if (isLocal || window.location.href.includes(backupDomain)) {
      console.log("No redirection needed.");
      return;
    }

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 5000); // Timeout after 5 seconds

      const response = await fetch(primaryDomain, {
        method: "HEAD",
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        console.log("Primary domain is unavailable. Redirecting to backup...");
        window.location.href = backupDomain;
      } else {
        console.log("Primary domain is active. No redirection.");
      }
    } catch (error) {
      if (error.name === "AbortError") {
        console.log("Primary domain health check timed out. Redirecting to backup...");
      } else {
        console.log("Error checking primary domain:", error);
      }
      window.location.href = backupDomain;
    }
  };

  useEffect(() => {
    checkDomainHealth();
  }, []);

  return null;
};

export default HealthCheck;
