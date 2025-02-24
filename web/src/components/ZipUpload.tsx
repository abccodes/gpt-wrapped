import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ZipUpload: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const navigate = useNavigate();

  // Handle File Selection
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile && selectedFile.type === "application/zip") {
      setFile(selectedFile);
    } else {
      alert("Please upload a valid ZIP file.");
    }
  };

  // Handle File Upload
  const handleUpload = async () => {
    if (!file) {
      alert("No file selected.");
      return;
    }

    const formData = new FormData();
    formData.append("zipFile", file);

    setUploading(true);
    navigate("/loading");

    const startTime = Date.now();

    try {
      await axios.post("http://localhost:3000/api/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      const elapsedTime = Date.now() - startTime;
      const remainingTime = Math.max(5000 - elapsedTime, 0);

      setTimeout(() => {
        navigate("/results");
      }, remainingTime);
    } catch (error) {
      alert("Upload failed. Please try again.");
      navigate("/tutorial");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="p-4 border rounded-lg shadow-md max-w-md mx-auto">
      <h2 className="text-lg font-semibold mb-2">Upload a ZIP File</h2>
      <input
        type="file"
        accept=".zip"
        onChange={handleFileChange}
        className="mb-2"
      />
      <button
        onClick={handleUpload}
        className="px-4 py-2 bg-blue-500 text-white rounded"
        disabled={uploading}
      >
        {uploading ? "Uploading..." : "Upload"}
      </button>
    </div>
  );
};

export default ZipUpload;
