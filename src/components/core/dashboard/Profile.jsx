import React, { useContext } from "react";
import { motion } from "framer-motion";
import { AuthContext } from "../../../Context/AuthContext";
import LayoutProvider from "../../common/LayoutProvider";

export const Profile = () => {

  const { user } = useContext(AuthContext);
  // console.log(user)

  return (
    <LayoutProvider heading={'Profile'}>
      <div className="flex gap-3 w-full">
        <motion.div
          className="w-full sm:w-full flex flex-col gap-4 max-w-2xl bg-white shadow-md rounded-2xl p-2.5 sm:p-8 border border-gray-200"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Profile Header */}
          <motion.h1
            className="text-3xl font-bold sm:text-4xl sm:font-extrabold text-[#1C398E] pb-2 text-center"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            Employee Details
          </motion.h1>

          {/* Profile Details */}
          <div className="space-y-4  flex flex-col gap-2 w-full">
            <ProfileItem label="Name" value={user?.name} />
            <ProfileItem label="Email" value={user?.email} />
            <ProfileItem label="Phone No" value={user?.phoneNo} />
            <ProfileItem label="Assigned Team" value={user?.team?.teamName} />
            <ProfileItem label="Assigned Tasks" value={user?.tasks?.length} />
            {
              user?.teamLeader &&
              <ProfileItem label="Leader of" value={user?.teamLeader?.teamName} />
            }
          </div>
        </motion.div>
        <div className="shadow-md ">
          <img src="/m1.jpg" alt="img" className="rounded-lg" />
        </div>
      </div>
    </LayoutProvider>
  );
};

// Profile Item Component
const ProfileItem = ({ label, value }) => {
  return (
    <motion.div
      className="w-full flex max-sm:flex-col justify-between sm:items-center bg-gray-100 p-4 rounded-lg hover:bg-gray-200 transition border border-gray-300"
      whileHover={{ scale: 1.02 }}
    >
      <h3 className="text-lg font-semibold text-[#374151]">{label}:</h3>
      <p className="text-lg text-gray-900 font-medium">{value}</p>
    </motion.div>
  );
};