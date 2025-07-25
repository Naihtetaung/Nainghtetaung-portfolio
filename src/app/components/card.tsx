"use client"
import React, { useState } from "react";

interface CardProps {
  title: string;
  content: string;
}

const Card: React.FC<CardProps> = ({ title, content }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className="bg-transparent border border-transparent dark:border border-white rounded-lg shadow-md p-4 transition-transform transform hover:scale-[1.01] cursor-pointer"
      onClick={() => setExpanded(!expanded)}
    >
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p
        className={`text-gray-600 ${
          expanded ? "" : "line-clamp-5"
        } transition-all duration-300`}
      >
        {content}
      </p>
      {!expanded && (
        <span className="text-sm text-primary mt-1 inline-block">...more</span>
      )}
    </div>
  );
};

export default function CardGrid() {
  const cards = [
    {
      title: "Oneberry Monitoring",
      content: `This CVMS project involves the development of an intelligent CCTV management system designed to monitor multiple
        locations for potential fire and flood hazards. The system integrates real-time video surveillance with smart alert
        capabilities to detect early signs of fire and flooding. When such threats are identified, it triggers immediate alerts to
        designated authorities for swift response.`,
    },
    {
      title: "Invoice Management System",
      content: `The Invoice Management System is a web-based application designed to automate and streamline the process of
        creating, managing, and tracking invoices for businesses. It allows users to generate invoices, manage client details,
        record payments, and monitor outstanding balances in real time. The system enhances financial record-keeping, reduces
        manual errors, and improves billing efficiency.`,
    },
    {
        title: "Collage Dao",
        content: `The College DAO project aims to establish a decentralized governance model for student communities within educational
        institutions using blockchain technology. By leveraging smart contracts and token-based voting systems, students,
        faculty, and administrators can transparently manage decisions, funding, events, and academic initiatives in a democratic
        and decentralized manner.`,
    },
    {
        title: "Edu tech",
        content: `SmartLearn is an innovative edtech platform designed to make personalized education accessible and engaging for
        learners of all ages. The platform leverages AI-driven assessments, adaptive learning paths, and interactive content
        (including videos, quizzes, and gamified activities) to meet individual student needs. With features like real-time
        performance tracking, teacher dashboards, and collaborative tools, SmartLearn empowers educators and students to
        maximize learning outcomes in both classroom and remote settings.`,
    },
    {
        title: "One Energy",
        content: `One Energy is a smart energy management system that enables users to monitor and optimize their electricity
        consumption in real-time. The project integrates with digital electric meters to capture energy usage (in units/kWh) and
        automatically calculates the cost based on dynamic tariff rates. Users can view detailed usage analytics through a user-
        friendly dashboard, set consumption alerts, and compare historical data to reduce energy bills and carbon footprint.`,
    },
    {
        title: "Consult tech",
        content: `ConsultTech is a digital consulting platform designed to connect clients with industry experts across various fields
        including business, finance, healthcare, education, and technology. The system enables users to book virtual
        consultations, chat with professionals, and receive personalized advice through a secure and user-friendly interface.`,
    },
    {
        title: "GNS Inventory",
        content: `GNS Inventory project is an intelligent retail solution that enables users to scan products using barcodes or QR codes to
        instantly view product details, availability, and pricing. The system also includes a powerful search feature to browse
        products by name, category, or SKU, and allows customers to place orders directly through a user-friendly interface.`,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">
      {cards.map((card, idx) => (
        <Card key={idx} title={card.title} content={card.content} />
      ))}
    </div>
  );
}
