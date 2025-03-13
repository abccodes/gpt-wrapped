import React, { useState, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useLoading } from "../context/LoadingContext";
import { useData } from "../context/DataContext"; // Import DataContext
import CTAButton from "./ui/CTAButton";

const ZipUpload: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();
  const { startLoading, stopLoading } = useLoading();
  const { setData } = useData(); // Use setData from context

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile && selectedFile.type === "application/zip") {
      setFile(selectedFile);
    } else {
      alert("Please upload a valid ZIP file.");
    }
  };

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

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
      const response = await axios.post(
        "http://localhost:3000/api/upload",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      setData(response.data); // Store API response in Context

      const elapsedTime = Date.now() - startTime;
      const remainingTime = Math.max(5000 - elapsedTime, 0);

      setTimeout(() => {
        stopLoading();
        setUploading(false);
        navigate("/results"); // Go to results page
      }, remainingTime);
    } catch (error) {
      alert("Upload failed. Please try again.");
      stopLoading();
      setUploading(false);
      navigate("/upload");
    }
  };

  return (
    <div className="w-full h-full border rounded-lg shadow-md bg-[#EBEBEB] flex flex-col justify-center items-center p-6">
      {!file ? (
        <CTAButton onClick={handleButtonClick}>
          <span className="block text-center">Choose a ZIP File</span>
        </CTAButton>
      ) : (
        <span className="text-black text-lg">Your GPT zip file.</span>
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
  );
};

export default ZipUpload;
