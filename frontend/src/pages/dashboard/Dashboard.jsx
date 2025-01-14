import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Loading from '../../components/Loading';
import getBaseURL from '../../utils/baseUrl';

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
    console.log(data)


  if (loading) {
    return <Loading />;
  }

  return (
    <div>Dashboard</div>
  )
}

export default Dashboard