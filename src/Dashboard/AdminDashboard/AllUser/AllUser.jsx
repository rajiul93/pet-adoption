import useAxiosSecure from "@/Utils/Hook/useAxiosSecure";
import { PencilIcon } from "@heroicons/react/24/solid";
import {
  Avatar,
  Card,
  CardBody,
  CardHeader,
  Tooltip,
  Typography,
} from "@material-tailwind/react";
import toast, { Toaster } from "react-hot-toast";
import { TiDeleteOutline } from "react-icons/ti";
import { useQuery } from "react-query";

const AllUser = () => {
  const axiosSecure = useAxiosSecure();
  const { data: allUser = [], refetch } = useQuery({
    queryKey: ["allUser"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/all-user`);
      return res.data;
    },
  });

  const updateUser = async (id) => { 
    const res = await axiosSecure.patch(`/user-update/${id}`);
    console.log(res.data);
    if (res.data.status === "isExist") {
      return toast.error("User role already updated");
    } else {
      refetch();
      toast.success("User role updated");
    }
  };
  const deleteUser = async (id) => { 
    const res = await axiosSecure.delete(`/user-update/${id}`);
    console.log(res.data);
    if (res.data.status === "isExist") {
      return toast.error("User role already demotion");
    } else {
      refetch();
      toast.success("User role updated");
    }
  };

  const TABLE_HEAD = ["Member", "Role", "ID", "Action", "Delete"];

  return (
    <div>
      <Toaster />
      <Card className="h-full w-full">
        <CardHeader
          floated={false}
          shadow={false}
          className="rounded-none"
        ></CardHeader>
        <CardBody className="overflow-scroll px-0">
          <table className="mt-4 w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th
                    key={head}
                    className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                  >
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70"
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {allUser.map(({ img, _id, name, email, role }, index) => {
                const isLast = index === allUser.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50";

                return (
                  <tr key={name}>
                    <td className={classes}>
                      <div className="flex items-center gap-3">
                        <Avatar src={img} alt={name} size="sm" />
                        <div className="flex flex-col">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {name}
                          </Typography>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal opacity-70"
                          >
                            {email}
                          </Typography>
                        </div>
                      </div>
                    </td>
                    <td className={classes}>
                      <div className="flex flex-col">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {role}
                        </Typography>
                      </div>
                    </td>
                    <td className={classes}>
                      <div className="w-max">{_id}</div>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal  cursor-pointer"
                      >
                        <Tooltip content="Edit User">
                          <PencilIcon
                            onClick={() => updateUser(_id)}
                            className="h-4 w-4"
                          />
                        </Tooltip>
                      </Typography>
                    </td>
                    <td className={classes}>
                      <TiDeleteOutline onClick={()=>deleteUser(_id)} className="text-2xl text-red-500" />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </CardBody>
      </Card>
    </div>
  );
};

export default AllUser;
