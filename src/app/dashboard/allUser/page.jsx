"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useState, useTransition } from "react";
import { FaTrash, FaUserShield } from "react-icons/fa";
import { toast } from "react-toastify";

const page = () => {
  const [user, setUser] = useState([]);
  const [isPending, startTransition] = useTransition();
  const toastId = toast.loading("Loading");

  const router = useRouter();
  useEffect(() => {
    fetch("http://localhost:5000/user")
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);
  const handleAdmin = (id) => {
    fetch(`http://localhost:5000/user/admin/${id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        toast.dismiss(toastId);
        toast.success("Admin Make Successfully");
        startTransition(() => {
          router.refresh();
        });
      });
  };
  const handleUser = (id) => {
    fetch(`http://localhost:5000/user/user/${id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        toast.dismiss(toastId);
        toast.success("Admin Make Successfully");
        startTransition(() => {
          router.refresh();
        });
      });
  };
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table border-blue-600">
          {/* head */}
          <thead className="bg-base-300 font-bold text-2xl rounded">
            <tr>
              <th></th>
              <th>Email</th>
              <th>Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {user.map((user, index) => {
              return (
                <>
                  <tr className="font-bold text-[22px] border-blue-600">
                    <th className="border-blue-600">{index + 1}</th>
                    <td>{user.data.email}</td>
                    <td className="border-blue-600">{user.data.name}</td>
                    <td className="border-blue-600">
                      <div className="flex gap-2">
                        <div>
                          <button>
                            {user.role === "admin" ? (
                              <button className="btn">Admin</button>
                            ) : (
                              <FaUserShield
                                onClick={() => handleAdmin(user._id)}
                                className="text-blue-500 text-[26px]"
                              />
                            )}
                          </button>
                        </div>
                        <div>
                          <button>
                            {user.role === "user" ? (
                              <button className="btn">User</button>
                            ) : (
                              <FaUserShield
                                onClick={() => handleUser(user._id)}
                                className="text-blue-500 text-[26px]"
                              />
                            )}
                          </button>
                        </div>
                        <div>
                          <button>
                            <FaTrash className="text-red-500 text-[26px]" />
                          </button>
                        </div>
                      </div>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default page;
