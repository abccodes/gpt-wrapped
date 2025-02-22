import React, { useState } from "react";
import axios from "axios";

const ZipUpload: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState("");

  // Handle File Selection
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile && selectedFile.type === "application/zip") {
      setFile(selectedFile);
      setMessage("");
    } else {
      setMessage("Please upload a valid ZIP file.");
    }
  };

  // Handle File Upload
  const handleUpload = async () => {
    if (!file) {
      setMessage("No file selected.");
      return;
    }

    const formData = new FormData();
    formData.append("zipFile", file);

    setUploading(true);
    setMessage("");

    try {
      const response = await axios.post(
        "http://localhost:3000/api/upload",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      setMessage(`Upload successful: ${response.data.message}`);
    } catch (error) {
      setMessage("Upload failed. Please try again.");
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
        disabled={uploading}
        className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-400"
      >
        {uploading ? "Uploading..." : "Upload"}
      </button>
      {message && <p className="mt-2 text-sm text-red-600">{message}</p>}
    </div>
  );
};

export default ZipUpload;
