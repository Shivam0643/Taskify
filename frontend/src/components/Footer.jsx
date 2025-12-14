import React from "react";
export default function Footer() {
  return (
    <footer className="bg-blue-200 text-center py-3 text-sm text-gray-700">
      © {new Date().getFullYear()} Taskify. All rights reserved.
    </footer>
  );
}
