import React from "react";
import { Helmet } from "react-helmet";
import { CloseSVG } from "../../assets/images";
import { Img, Text, Heading, Button, Input } from "../../components";
import AgentsFooter from "../../components/AgentsFooter";
import { ReactTable } from "../../components/ReactTable";
import Sidebar from "../../components/Sidebar";
import { createColumnHelper } from "@tanstack/react-table";

const table1Data = [
  {
    Data: "1",
    name: "Nina Rapha Ella Velasco",
    contactnumber: "09069462736",
    email: "ninaraphaella@gmail.com",
    action: "images/img_dropdown.svg",
  },
  {
    Data: "2",
    name: "Paulo Regalado",
    contactnumber: "09069462736",
    email: "paulo@gmail.com",
    action: "images/img_dropdown.svg",
  },
];

export default function AdminPage() {
  const [searchBarValue2, setSearchBarValue2] = React.useState("");
  const table1Columns = React.useMemo(() => {
    const table1ColumnHelper = createColumnHelper();
    return [
      table1ColumnHelper.accessor("Data", {
        cell: (info) => (
          <Text size="md" as="p" className="!text-gray-500_01">
            {info?.getValue?.()}
          </Text>
        ),
        header: (info) => (
          <Text as="p" className="pl-[29px] pr-6 py-[15px] sm:px-5">
            #
          </Text>
        ),
        meta: { width: "62px" },
      }),
      table1ColumnHelper.accessor("name", {
        cell: (info) => (
          <div className="flex items-center gap-2">
            <Img src="images/img_ellipse_2_1.png" alt="circleimage_one" className="h-[32px] w-[32px] rounded-[50%]" />
            <Heading size="xs" as="h2" className="self-end mb-1.5">
              {info?.getValue?.()}
            </Heading>
          </div>
        ),
        header: (info) => (
          <Text as="p" className="pt-[18px] pb-3">
            Name
          </Text>
        ),
        meta: { width: "315px" },
      }),
      table1ColumnHelper.accessor("contactnumber", {
        cell: (info) => <Text as="p">{info?.getValue?.()}</Text>,
        header: (info) => (
          <Text as="p" className="pt-[17px] pb-[13px]">
            Contact Number
          </Text>
        ),
        meta: { width: "189px" },
      }),
      table1ColumnHelper.accessor("email", {
        cell: (info) => <Text as="p">{info?.getValue?.()}</Text>,
        header: (info) => (
          <Text as="p" className="pt-[18px] pb-3 px-px">
            Email
          </Text>
        ),
        meta: { width: "264px" },
      }),
      table1ColumnHelper.accessor("action", {
        cell: (info) => (
          <div className="flex">
            <Img src={info?.getValue?.()} alt="dropdown_one" className="h-[32px] w-[32px] my-[21px]" />
          </div>
        ),
        header: (info) => (
          <Text as="p" className="py-[15px]">
            Action
          </Text>
        ),
        meta: { width: "60px" },
      }),
    ];
  }, []);

  return (
    <>
      <Helmet>
        <title>1568 Realstate</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex h-screen items-start w-full pr-12 gap-8 md:pr-5 bg-gray-100_01">
        <Sidebar />
        <div className="flex flex-col w-[71%] md:w-full mt-[59px] gap-[31px] md:p-5 ml-[350px]">
          <div className="flex flex-col gap-[5px]">
            <Heading size="xl" as="h1">
              <span className="text-gray-900">Users /&nbsp;</span>
              <span className="text-teal-900">Admin</span>
            </Heading>
            <Text size="xs" as="p" className="!text-gray-500">
              View and manage list of admin
            </Text>
          </div>
          <div className="flex md:flex-col justify-end ml-[508px] gap-2 md:ml-0">
            <div className="w-60 h-11 pl-6 pr-5 py-3 bg-white rounded border border-neutral-400 justify-between items-center inline-flex">
              <input
                type="text"
                placeholder="Search"
                className="text-black text-sm font-normal font-['Helvetica'] bg-transparent border-none focus:outline-none w-full"
              />
              <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="iconamoon:search">
                  <path id="Vector" d="M12.7501 13.2501L10.0358 10.5358M10.0358 10.5358C10.5001 10.0714 10.8684 9.52024 11.1196 8.91359C11.3709 8.30695 11.5003 7.65675 11.5003 7.00013C11.5003 6.3435 11.3709 5.69331 11.1196 5.08666C10.8684 4.48002 10.5001 3.92881 10.0358 3.4645C9.57145 3.0002 9.02024 2.63189 8.41359 2.38061C7.80695 2.12933 7.15675 2 6.50013 2C5.8435 2 5.19331 2.12933 4.58666 2.38061C3.98002 2.63189 3.42881 3.0002 2.9645 3.4645C2.0268 4.40221 1.5 5.67401 1.5 7.00013C1.5 8.32625 2.0268 9.59805 2.9645 10.5358C3.90221 11.4735 5.17401 12.0003 6.50013 12.0003C7.82625 12.0003 9.09805 11.4735 10.0358 10.5358Z" stroke="#1C1C1C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </g>
              </svg>
            </div>
            <button className="w-36 h-11 pl-2.5 pr-3 py-2.5 bg-green-800 rounded flex-col justify-start items-start gap-5 inline-flex" style={{ whiteSpace: 'nowrap' }}>
              <div className="justify-start items-center gap-2 inline-flex">
                <svg width="15" height="15" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-[1px]">
                  <path d="M10 1V19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M1 10H19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div className="text-stone-50 text-base font-bold font-['Helvetica']">Add Admin</div>
              </div>
            </button>
          </div>
          <div>
            <ReactTable 
              size="xs"
              bodyProps={{ className: "" }}
              headerProps={{
                className: "border-gray-300 border border-solid bg-white-A700 rounded-tl-lg rounded-tr-lg flex-wrap",
              }}
              rowDataProps={{ className: "md:flex-col" }}
              columns={table1Columns}
              data={table1Data}
            />
            <div className="flex justify-end">
              <AgentsFooter p110of100="1 of 1" className="flex justify-between items-center w-[35%] md:w-full gap-5" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}