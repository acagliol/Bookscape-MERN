import React from 'react'

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
  

  return (
    <div>Dashboard</div>
  )
}

export default Dashboard