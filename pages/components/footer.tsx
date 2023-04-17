'use client'
import Link from "next/link";
// import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import React, { ReactElement } from "react";
import Address from "../assets/svg/address.svg"
import Mail from "../assets/svg/mail.svg"
import Phone from "../assets/svg/phone.svg"


interface FooterColumn {
    id: number;
    title: string;
    content: {
      id: number;
      icon?: ReactElement;
      text: string;
      url?: string;
    }[];
  }


const Footer = () => {
    const footerColumns: FooterColumn[]= [
    {
      id: 1,
      title: "SB Job Market",
      content: [
        {
            id: 1,
            icon: <Address />,
            text: '65 Rasul View, Mymensingh Lane, Banglamotor, Dhaka',
          },
          {
            id: 2,
            icon: <Mail />,
            text: 'info@sobkisubazar.com',
          },
          {
            id: 3,
            icon: <Phone />,
            text: 'Phone: 09678-800843',
          },
          
      ],
    },

   {
      id: 2,
      title: "Sobkisu Bazar",
      content: [
        {
          id: 1,
          text: "About Job Market",
          url: "/",
        },
        {
          id: 2,
          text: "Accessibility Statement",
          url: "/",
        },
        {
          id: 3,
          text: "International Partners",
          url: "/",
        },
        {
          id: 4,
          text: "Other Partners",
          url: "/",
        },
        {
          id: 5,
          text: "Privacy Policy",
          url: "/",
        },
        {
          id: 6,
          text: "Feedback",
          url: "/",
        },
        {
          id: 7,
          text: "Contact Us",
          url: "/",
        },
      ],
    },
    {
      id: 3,
      title: "Job Seekers",
      content: [
        {
          id: 1,
          text: "Help Center",
          url: "/",
        },
        {
          id: 2,
          text: "Privacy Policy",
          url: "/",
        },
        {
          id: 3,
          text: "Terms & Conditions",
          url: "/",
        },
        {
          id: 4,
          text: "Create Account",
          url: "/",
        },
        {
          id: 5,
          text: "CV Upload",
          url: "/",
        },
        {
          id: 6,
          text: "FAQ",
          url: "/",
        },
      ],
    },
    {
      id: 4,
      title: "Employees",
      content: [
        {
          id: 1,
          text: "Help Center",
          url: "/",
        },
        {
          id: 2,
          text: "Privacy Policy",
          url: "/",
        },
        {
          id: 3,
          text: "Terms & Conditions",
          url: "/",
        },
        {
          id: 4,
          text: "Create Account",
          url: "/",
        },
        {
          id: 5,
          text: "Job Post",
          url: "/",
        },
        {
          id: 6,
          text: "FAQ",
          url: "/",
        },
      ],
    },
  ];


  return (
    <footer className="bg-gray-50 text-slate-900">
      <div className="container mx-auto py-8 lg:py-16 flex flex-col lg:flex-row">
        <div className="flex-1 items-center justify-center lg:justify-start mb-8 lg:mb-0">
          <img src="/logo.png" className="mr-8 mb-8" alt="Logo" />
            {/* <p className="font-bold">Company Name</p> */}
              <div>
              {footerColumns[0].content.map((item) => (
                <p key={item.id} className="flex items-center text-sm mb-4">
                  {item.icon}
                  <span className="ml-2">{item.text}</span>
                </p>
              ))}
            </div>
        </div>
        {footerColumns.slice(1).map((column) => (
          <div key={column.id} className="flex-1">
            <h3 className="font-bold">{column.title}</h3>
            <ul className="mt-4">
              {column.content.map((item) => (
                <li key={item.id} className="mb-2">
                  <Link href={item.url ?? '/'} className="text-sm hover:text-gray-400 ">
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
