import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  linkText: string;
  imageUrl?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  link,
  linkText,
  imageUrl,
}) => {
  return (
    <Link
      to={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block h-full"
    >
      <Card className="card-shadow h-full flex flex-col items-center text-center group hover:shadow-lg transition-shadow duration-200 cursor-pointer p-4">
        <CardHeader className="flex flex-col items-center">
          {imageUrl ? (
            <div className="mb-4">
              <img
                src={imageUrl}
                alt={title}
                className="w-[120px] h-[120px] object-cover rounded-md"
              />
            </div>
          ) : (
            <div className="mb-4 text-gov-blue">{icon}</div>
          )}
          <CardTitle className="text-xl">{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow" />
      </Card>
    </Link>
  );
};

export default ServiceCard;
