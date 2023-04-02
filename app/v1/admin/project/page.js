"use client";

import { useState } from "react";
import { db } from "@/firebase/firebase";
import { storage } from "@/firebase/firebase";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

const ProjectUpload = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [projectImage, setProjectImage] = useState("");

  const submitProject = async () => {
    const uploadProjectRef = await addDoc(collection(db, "Project"), {
      title,
      description,
      Timestamp: serverTimestamp(),
      uploaderName: "Rohit Patel",
      uploaderEmail: "rohit@gmail.com",
      projectCategory: "bakery",
    });
    console.log("new added project id", uploadProjectRef.id);

    const projectImageRef = ref(
      storage,
      `Project/${uploadProjectRef.id}/image`
    );

    await uploadBytes(projectImageRef, projectImage).then(async (snapshot) => {
      const downloadURL = await getDownloadURL(projectImageRef);

      await updateDoc(doc(db, "Project", uploadProjectRef.id), {
        Image: downloadURL,
      });
    });

    setTitle("");
    setDescription("");
    setProjectImage("");
  };

  return (
    <div>
      <h2 className="text-center text-red-600 text-2xl p-6 bg-green-300">
        Lets upload Our Project
      </h2>
      <div className="p-10">
        {/* Image */}
        {/* title */}
        {/* description */}

        <input
          type="file"
          placeholder="Enter project Image"
          onChange={(e) => {
            setProjectImage(e.target.files[0]);
          }}
        />
        <input
          type="text"
          value={title}
          placeholder="Enter title"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <input
          type="text"
          value={description}
          placeholder="Enter Description"
          onChange={(e) => setDescription(e.target.value)}
        />
        <button
          onClick={submitProject}
          className="p-4 bg-blue-600 rounded-md text-white font-medium"
        >
          Add Project
        </button>
      </div>
    </div>
  );
};

export default ProjectUpload;
