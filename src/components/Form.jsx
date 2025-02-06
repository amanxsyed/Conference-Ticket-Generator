import { useDropzone } from 'react-dropzone';
import uploadIcon from '../assets/images/icon-upload.svg'
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

const MAX_SIZE = 500 * 1024 // 500 KB



const Form = ({ setAvatarImage, setEmail, setUsername, setGithubUsername }) => {
    const [preview, setPreview] = useState(null);
    const [uploadError, setUploadError] = useState(false);

    const navigate = useNavigate();
    const onDrop = (acceptedFiles, rejectedFiles) => {
        if (rejectedFiles.length > 0) {
            const { file, errors } = rejectedFiles[0];
            errors.forEach(error => {
                if (error.code === 'file-too-large') {
                    setUploadError(true);
                }
            });
        } else {
            const file = acceptedFiles[0];
            const reader = new FileReader();
            setAvatarImage(file);
            reader.onloadend = () => {
                setPreview(reader.result);
                setUploadError(false);
            };
            reader.readAsDataURL(file);
        }
    };
    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        maxSize: MAX_SIZE,
        accept: {
            'image/*': ['.jpeg', '.png', '.jpg'] // Fixing the syntax here
        },
        multiple: false
    });

    const handleForm = (e) => {
        e.preventDefault();
        navigate('/conference-ticket-generator/ticket');

    }
    return (
        <div className="p-4 max-w-4xl mx-auto">
            <h1 tabIndex="0" className="text-center text-2xl font-extrabold text-gray-900 mb-4">
                Your Journey to Coding Conf 2025 Starts Here!
            </h1>
            <p tabIndex="0" className="text-center text-gray-500 mb-4">
                Secure your spot at next year&apos;s biggest coding conference.
            </p>

            <form onSubmit={handleForm} aria-labelledby="form-title" className="flex flex-col max-w-2xl mx-auto gap-6">
                <label htmlFor="avatar" className="font-semibold">Upload Avatar</label>
                <div
                    {...getRootProps()}
                    className="flex justify-center items-center w-full h-48 border-2 border-dashed border-gray-500 rounded-lg bg-gray-100 text-center cursor-pointer"
                    role="button"
                    aria-label="Upload your avatar. Drag and drop or click to upload."
                    tabIndex="0"
                    onKeyDown={(e) => e.key === "Enter" && document.getElementById('avatar').click()}
                >
                    <input {...getInputProps()} id="avatar" required aria-required="true" />
                    {preview ? (
                        <div>
                            <img
                                src={preview}
                                alt="Uploaded avatar preview"
                                className="max-w-full max-h-16"
                            />
                            <div className="flex gap-4">
                                <button
                                    type="button"
                                    className="bg-gray-700 text-white p-2 rounded border border-gray-500"
                                    onClick={() => setPreview(null)}
                                    aria-label="Remove uploaded image"
                                >
                                    Remove Image
                                </button>
                                <button
                                    type="button"
                                    className="bg-gray-700 text-white p-2 rounded border border-gray-500"
                                    onClick={() => document.getElementById('avatar').click()}
                                    aria-label="Change uploaded image"
                                >
                                    Change Image
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div>
                            <div className="flex justify-center items-center">
                                <img src={uploadIcon} alt="Upload icon" className="w-12 h-12" />
                            </div>
                            <p className="text-gray-500">Drag & drop, or click to upload</p>
                        </div>
                    )}
                </div>
                {uploadError ? (
                    <p className="text-orange-500 text-sm" role="alert">File too large. Please upload a photo under 500KB.</p>
                ) : (
                    <p className="text-gray-500 text-sm">Upload your photo (JPG or PNG, max size: 500KB).</p>
                )}

                <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="font-semibold">Full Name</label>
                    <input
                        type="text"
                        id="name"
                        placeholder="Enter your name"
                        onChange={(e) => setUsername(e.target.value)}
                        autoComplete="off"
                        required
                        aria-required="true"
                        className="p-3 border border-gray-500 rounded bg-gray-100 text-gray-900"
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="font-semibold">Email Address</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Enter your email"
                        onChange={(e) => setEmail(e.target.value)}
                        autoComplete="off"
                        required
                        aria-required="true"
                        aria-describedby="email-desc"
                        className="p-3 border border-gray-500 rounded bg-gray-100 text-gray-900"
                    />
                    <p id="email-desc" className="text-sm text-gray-500">Please enter a valid email address</p>
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="github" className="font-semibold">Github Username</label>
                    <input
                        type="text"
                        id="github"
                        placeholder="GitHub @username"
                        onChange={(e) => setGithubUsername(e.target.value)}
                        autoComplete="off"
                        required
                        aria-required="true"
                        className="p-3 border border-gray-500 rounded bg-gray-100 text-gray-900"
                    />
                </div>

                <input
                    type="submit"
                    value="Generate My Ticket"
                    className="py-3 px-6 bg-orange-500 text-gray-900 font-semibold rounded-lg cursor-pointer hover:bg-orange-600"
                    aria-label="Generate your ticket"
                />
            </form>
        </div>

    );
};

export default Form;