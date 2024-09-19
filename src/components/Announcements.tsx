import { announcementsData } from "@/lib/data";
import React from "react"; // Ensure this import is correct

const Announcements = () => {
  return (
    <div className="bg-white p-4 rounded-md">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Announcements</h1>
        <span className="text-xs text-gray-500">View All</span>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        {announcementsData.slice(0, 3).map((announcement) => (
          <div
            key={announcement.id}
            className="bg-dovebluelight rounded-md p-4"
          >
            <div className="flex items-center justify-between">
              <h2 className="font-medium">{announcement.title}</h2>
              <span className="text-sm text-gray-500 bg-white rounded-md px-1 py-1">
                {announcement.date}
              </span>
            </div>
            <p className="text-sm text-gray-500 mt-2">
              {announcement.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Announcements;
