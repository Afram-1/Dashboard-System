import React, { useEffect, useState } from "react";

// Data API
import { dataCard } from "../Components/DataCard";

const UseDashbourd = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      try {
        setData(dataCard);
      } catch {
        setError("Failed to load dashboard data");
      } finally {
        setLoading(false);
      }
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  return { data, loading, error };
};

export default UseDashbourd;
