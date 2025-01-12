import axios from "axios";
import React, { useEffect, useState } from "react";
import getBaseURL from "../../utils/baseUrl";

const DashboardLayout = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${getBaseURL()}/api/admin`, {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem("token")}}`,
            'Content-Type': 'application/json',
          },

        });
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error:", error);
        setLoading(false);
      }
    }
  }, []);
  if (loading) {
    return <div>Loading...</div>;
  }

  return <div>DashboardLayout</div>;
};

export default DashboardLayout;
