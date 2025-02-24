import React, { useState, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useLoading } from "../context/LoadingContext";
import CTAButton from "./ui/CTAButton";

const ZipUpload: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();
  const { startLoading, stopLoading } = useLoading();

  // Handle File Selection
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile && selectedFile.type === "application/zip") {
      setFile(selectedFile);
    } else {
      alert("Please upload a valid ZIP file.");
    }
  };

  // Open File Picker
  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  // Handle File Upload
  const handleUpload = async () => {
    if (!file) {
      alert("No file selected.");
      return;
    }

    setUploading(true);
    startLoading();
    navigate("/loading");

    const formData = new FormData();
    formData.append("zipFile", file);
    const startTime = Date.now();

    try {
      await axios.post("http://localhost:3000/api/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      // Ensure a minimum of 5 seconds before navigating
      const elapsedTime = Date.now() - startTime;
      const remainingTime = Math.max(5000 - elapsedTime, 0);

      setTimeout(() => {
        stopLoading();
        setUploading(false);
        navigate("/results");
      }, remainingTime);
    } catch (error) {
      alert("Upload failed. Please try again.");
      stopLoading();
      setUploading(false);
      navigate("/upload");
    }
  };

  return (
    <>
      <div className="w-full h-full border rounded-lg shadow-md bg-[#EBEBEB] flex flex-col justify-center items-center p-6">
        {!file ? (
          <CTAButton onClick={handleButtonClick}>
            <span className="block text-center">Choose a ZIP File</span>
          </CTAButton>
        ) : (
          <span className="text-black text-lg">{file.name}</span>
        )}
        <input
          type="file"
          accept=".zip"
          ref={fileInputRef}
          onChange={handleFileChange}
          className="hidden"
        />
        {file && (
          <CTAButton onClick={handleUpload} className="mt-4">
            Upload
          </CTAButton>
        )}
      </div>
    </>
  );
};

export default ZipUpload;
