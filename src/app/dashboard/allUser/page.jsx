"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useState, useTransition } from "react";
import { FaTrash, FaUserShield } from "react-icons/fa";
import { toast } from "react-toastify";

const page = () => {
  const [user, setUser] = useState([]);
  const [isPending, startTransition] = useTransition();
  const [loading, setLoading] = useState(false);
  const toastId = toast.loading("Loading");
  const isLoading = isPending || loading;
  const router = useRouter();

  useEffect(() => {
    fetch("https://dochouse.vercel.app/user")
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);
  const handleAdmin = async (id) => {
    setLoading(true);
    await fetch(`https://dochouse.vercel.app/user/admin/${id}`, {
      method: "PATCH",
    })
      .then(await res.json())
      .then((data) => {
        toast.dismiss(toastId);
        setLoading(false);
        toast.success("Admin Make Successfully");
        startTransition(() => {
          router.refresh();
        });
      });
  };
  const handleUser = async (id) => {
    setLoading(true);
    await fetch(`https://dochouse.vercel.app/user/user/${id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        toast.dismiss(toastId);
        setLoading(false);
        toast.success("Admin Make Successfully");
        startTransition(() => {
          router.refresh();
        });
      });
  };
  const handleRemoveUser = async (id) => {
    await fetch(`https://dochouse.vercel.app/user/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        toast.dismiss(toastId);
        setLoading(false);
        if (data.deletedCount > 0) {
          toast.success("User Remove Successfully");
        }
        const remaining = user.filter((id) => id._id !== id);
        setUser(remaining);
        startTransition(() => {
          router.refresh();
        });
      });
  };
  return (
    <div>
      <h2 className="text-3xl font-bold text-purple-800 text-center">
        All Users
      </h2>
      <div className="overflow-x-auto">
        <table className="table border-blue-600 text-center">
          {/* head */}
          <thead className="bg-base-300 font-bold text-2xl rounded text-center">
            <tr>
              <th>*</th>
              <th>Email</th>
              <th>Name</th>
              <th>Action</th>
              <th>Authorization</th>
              <th>Designation</th>
            </tr>
          </thead>
          <tbody>
            {user.map((user, index) => {
              return (
                <>
                  <tr className="font-bold text-[22px] border-blue-600">
                    <th className="border-blue-600">{index + 1}</th>
                    <td>{user?.email || user?.datas?.email}</td>
                    <td className="border-blue-600">{user?.datas?.name}</td>
                    <td className="border-blue-600">
                      <div className="flex gap-2">
                        <div>
                          <button disabled={user?.role === "admin"}>
                            <p
                              onClick={() => handleAdmin(user._id)}
                              className="text-blue-500 text-[16px] badge badge-neutral p-6"
                            >
                              Make Admin
                            </p>
                          </button>
                        </div>
                        <div>
                          <button disabled={user?.role === "user"}>
                            {
                              <p
                                onClick={() => handleUser(user._id)}
                                className=" text-[16px] badge badge-primary text-white p-4"
                              >
                                Make User
                              </p>
                            }
                          </button>
                        </div>
                        <div onClick={() => handleRemoveUser(user._id)}>
                          <button>
                            <FaTrash className="text-red-500 text-[26px]" />
                          </button>
                        </div>
                      </div>
                    </td>
                    <td>
                      <button className="btn btn-outline btn-success p-4">
                        {user?.role}
                      </button>
                    </td>
                    <td>{user?.datas?.designation}</td>
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
