import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Loading from '../../components/Loading';

const Dashboard = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState({});
    const navigate = useNavigate();
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(`${getBaseURL()}/api/admin`, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}}`,
              "Content-Type": "application/json",
            },
          });
          setData(response.data);
          setLoading(false);
        } catch (error) {
          console.error("Error:", error);
          setLoading(false);
        }
      };
      fetchData();
    }, []);
  if (loading) {
    return <Loading />;
  }

  return (
    <div>Dashboard</div>
  )
}

export default Dashboard