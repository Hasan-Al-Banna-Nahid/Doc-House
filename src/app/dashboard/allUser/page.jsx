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
                    <td>{user.email}</td>
                    <td className="border-blue-600">{user?.name}</td>
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
                              <p
                                onClick={() => handleUser(user._id)}
                                className="text-blue-500 text-[26px] badge badge-warning p-4"
                              >
                                Make User
                              </p>
                            )}
                          </button>
                        </div>
                        <div onClick={() => handleRemoveUser(user._id)}>
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
