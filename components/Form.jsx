"use client";
import { useState } from "react";

const MovieForm = () => {
  const [message, setMessage] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    image: "",
    name: "",
    details: "",
    downloadLink: [{ name: "", link: "" }],
    trailer: "",
    genre: {
      genre1: "",
      genre2: "",
      genre3: "",
    },
    releaseDate: "",
    runtime: "",
    director: "",
    rated: "",
    type: "",
    quality: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith("downloadLink.")) {
      const [, index, key] = name.split(".");
      setFormData((prevState) => ({
        ...prevState,
        downloadLink: prevState.downloadLink.map((link, i) =>
          i === parseInt(index) ? { ...link, [key]: value } : link
        ),
      }));
    } else if (name.startsWith("genre.")) {
      const genreName = name.split(".")[1];
      setFormData((prevState) => ({
        ...prevState,
        genre: {
          ...prevState.genre,
          [genreName]: value,
        },
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setSubmitting(true);
      const response = await fetch("/api/admin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setMessage("Movie added successfully!");
        setFormData({
          image: "",
          name: "",
          details: "",
          downloadLink: [{ name: "", link: "" }],
          trailer: "",
          genre: {
            genre1: "",
            genre2: "",
            genre3: "",
          },
          releaseDate: "",
          runtime: "",
          director: "",
          rated: "",
          type: "",
          quality: "",
        });
      } else {
        setMessage("Failed to add movie. Please try again later.");
      }
    } catch (error) {
      console.error("Error adding movie:", error);
      setMessage("Failed to add movie. Please try again later.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto p-4 bg-gray-800 rounded-md shadow-md"
      >
        <label className="block">
          Image:
          <input
            type="text"
            name="image"
            required
            value={formData.image}
            onChange={handleChange}
            className="mt-1 text-black p-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          />
        </label>
        <br />
        <label className="block">
          Name:
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="mt-1 text-black p-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          />
        </label>
        <br />
        <label className="block">
          Details:
          <textarea
            name="details"
            required
            value={formData.details}
            onChange={handleChange}
            className="mt-1 text-black p-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          />
        </label>
        <br />
        <div>
          <label className="block">Download Links:</label>
          {formData.downloadLink.map((link, index) => (
            <div key={index} className="">
              <div className="flex gap-2 items-center">
                <input
                  type="text"
                  name={`downloadLink.${index}.name`}
                  value={link.name}
                  onChange={handleChange}
                  placeholder="Name"
                  className="mt-1 text-black p-1 flex-1 border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                />
                <input
                  type="text"
                  name={`downloadLink.${index}.link`}
                  value={link.link}
                  onChange={handleChange}
                  placeholder="Link"
                  className="mt-1 text-black p-1 flex-1 border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                />
              </div>
              <br />
              {index === formData.downloadLink.length - 1 && (
                <button
                  type="button"
                  onClick={() =>
                    setFormData((prevState) => ({
                      ...prevState,
                      downloadLink: [
                        ...prevState.downloadLink,
                        { name: "", link: "" },
                      ],
                    }))
                  }
                  className="bg-blue-500 text-white py-1 px-2 rounded-md hover:bg-blue-600"
                >
                  Add
                </button>
              )}
            </div>
          ))}
        </div>
        <br />
        <label className="block">
          Trailer:
          <input
            type="text"
            name="trailer"
            required
            value={formData.trailer}
            onChange={handleChange}
            className="mt-1 text-black p-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          />
        </label>
        <br />
        <div className="space-y-2">
          <label className="block">Genres:</label>
          <div className="flex flex-col gap-2">
            {["genre1", "genre2", "genre3"].map((genreName, index) => (
              <input
                key={index}
                type="text"
                name={`genre.${genreName}`}
                value={formData.genre[genreName]}
                onChange={handleChange}
                className="mt-1 text-black p-1 flex-1 border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              />
            ))}
          </div>
        </div>
        <br />
        <label className="block">
          Release Date:
          <input
            type="text"
            name="releaseDate"
            value={formData.releaseDate}
            onChange={handleChange}
            className="mt-1 text-black p-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          />
        </label>
        <br />
        <label className="block">
          Runtime:
          <input
            type="text"
            name="runtime"
            value={formData.runtime}
            onChange={handleChange}
            className="mt-1 text-black p-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          />
        </label>
        <br />
        <label className="block">
          Director:
          <input
            type="text"
            name="director"
            value={formData.director}
            onChange={handleChange}
            className="mt-1 text-black p-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          />
        </label>
        <br />
        <label className="block">
          Rated:
          <input
            type="text"
            name="rated"
            value={formData.rated}
            onChange={handleChange}
            className="mt-1 text-black p-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          />
        </label>
        <br />
        <label className="block">
          Type:
          <input
            type="text"
            name="type"
            required
            value={formData.type}
            onChange={handleChange}
            className="mt-1 text-black p-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          />
        </label>
        <br />
        <label className="block">
          Quality:
          <input
            type="text"
            name="quality"
            required
            value={formData.quality}
            onChange={handleChange}
            className="mt-1 text-black p-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          />
        </label>
        <br />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          {submitting ? "Submitting..." : "Submit"}
        </button>
      </form>
      <div className="text-center">{message && <p>{message}</p>}</div>
    </>
  );
};

export default MovieForm;
