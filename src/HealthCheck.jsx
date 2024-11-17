import { useEffect } from "react";

const HealthCheck = () => {
  const primaryDomain = "https://www.mayanknasa.com";
  const backupDomain = "https://mayanknasa.netlify.app";

  const checkDomainHealth = async () => {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 5000); // Timeout after 5 seconds

      const response = await fetch(primaryDomain, {
        method: "HEAD",
        mode: "no-cors",
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      // Handle opaque responses (assume success if no error occurs)
      if (!response || response.type === "opaque") {
        console.log("Primary domain is active.");
      } else {
        console.warn("Unexpected response. Redirecting to backup domain...");
        redirectToBackup();
      }
    } catch (error) {
      if (error.name === "AbortError") {
        console.error("Primary domain health check timed out. Redirecting...");
      } else {
        console.error("Error checking primary domain:", error);
      }
      redirectToBackup();
    }
  };

  const redirectToBackup = () => {
    alert(
      "It seems the primary domain is unavailable. You are being redirected to the backup domain."
    );
    window.location.href = backupDomain;
  };

  useEffect(() => {
    checkDomainHealth();
  }, []);

  return null;
};

export default HealthCheck;
