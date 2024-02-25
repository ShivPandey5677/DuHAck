

import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { FaTwitter, FaInstagram, FaFacebookF, FaLinkedin, FaPinterest, FaMapMarkerAlt, FaEnvelope,FaGlobe } from 'react-icons/fa';
import { makeRequest } from '../axios';
import { useLocation } from 'react-router-dom';
import { AuthContext } from '../context/authContext';

const Profile = () => {
  const [openUpdate, setOpenUpdate] = useState(false);
  const { currentUser } = useContext(AuthContext);
  const userId = parseInt(useLocation().pathname.split("/")[2]);
  const { isLoading, error, data } = useQuery({
    queryKey: ["user"],
    queryFn: () => makeRequest.get("/users/find/" + userId).then((res) => res.data)
  });
  return (
    <div className="">
      {isLoading ? (
        "loading"
      ) : (
    <>
      <div className="w-full h-[300px] relative">
        <img src={"/upload/"+data.coverpic} alt="" className="w-full h-full object-cover" />
        <img src={"/upload/"+data.profilepic} alt="" className="w-[200px] h-[200px] rounded-[50%] object-cover absolute left-0 right-0 m-auto top-[200px]" />
      </div>
    
      <div className='px-[20px] py-[70px] md:p-[20px] sm:p-[10px]'>
        
        <div className="h-[180px] shadow-lg rounded-lg bg-[white] text-[#000] p-[50px] flex items-center justify-between mb-[20px] md:flex-col md:h-30vh md:p-[20px] md:mt-[100px]">
        <b className="text-xl">{data.name}</b>
          <div className="flex-1 gap-[10px] sm:flex-wrap flex items-center">
             
            <FaTwitter className='cursor-pointer' size={30} color="#0077b5"></FaTwitter>
            <FaInstagram className='cursor-pointer' size={30} color="#e4405f" ></FaInstagram>
            <FaFacebookF className='cursor-pointer' size={30} color="#1877f2"></FaFacebookF>
            <FaLinkedin className='cursor-pointer' size={30} color="#0077b5"></FaLinkedin>
            <FaPinterest className='cursor-pointer' size={30} color="#bd081c"></FaPinterest>
            <FaMapMarkerAlt size={30} color="#4caf50" />
            <FaEnvelope size={30} color="#2196f3" />
            <FaGlobe size={30} color="#333" />
          </div>
        </div>
      </div>
    </>
        )}
        </div>
  );
}

export default Profile;
