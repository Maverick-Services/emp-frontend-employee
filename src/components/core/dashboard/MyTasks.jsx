import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthContext";
import { fetchAllEmployeeTasks } from "../../../services/operations/authAPI";
import { Spinner } from "../../common/Spinner";
import { motion } from "framer-motion";
import { formattedFullDate } from "../../../utils/dateFormatter";
import { STATUS } from "../../../utils/constants";
import LayoutProvider from "../../common/LayoutProvider";

const MyTasks = () => {
  const { token, loading, setLoading } = useContext(AuthContext);
  const [tasks, setTasks] = useState([]);

  const fetchEmployeeTasks = async () => {
    setLoading(true);
    const result = await fetchAllEmployeeTasks(token);
    if (result) {
      setTasks(result);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchEmployeeTasks();
  }, []);

  if (loading || !tasks) return <Spinner />;

  return (
    <LayoutProvider heading={"My Tasks"}>
      {tasks && tasks.length === 0 ? (
        <p className="text-center text-xl text-gray-600">
          No Tasks assigned to you yet
        </p>
      ) : (
        <motion.div
          initial="hidden"
          animate="visible"
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full"
        >
          {tasks.map((ts) => (
            <motion.div
              key={ts?._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.2 }}
              className="w-full max-w-[350px] flex-1 flex justify-center"
            >
              <Link to={`/dashboard/tasks/${ts?._id}`} className="w-full">
                <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-start gap-2 transition-all hover:shadow-xl min-h-[200px] h-auto">
                  <h3 className="text-lg font-semibold text-gray-800 break-words whitespace-normal">
                    Task Name: {ts?.name}
                  </h3>
                  <p className="text-gray-700 break-words whitespace-normal">
                    <span className="font-medium">Created At:</span>{" "}
                    {formattedFullDate(ts?.createdAt)}
                  </p>
                  <p className="text-gray-700 break-words whitespace-normal">
                    <span className="font-medium">Deadline:</span>{" "}
                    {formattedFullDate(ts?.deadline)}
                  </p>
                  <span
                    className={`p-[0.2rem] px-[0.5rem] rounded-full text-sm font-medium text-white ${ts?.status === STATUS.COMPLETED ? "bg-green-500" : "bg-red-500"
                      }`}
                  >
                    {ts?.status}
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      )}
    </LayoutProvider>
  );
};

export default MyTasks;
