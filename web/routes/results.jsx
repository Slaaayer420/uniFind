import React, { useEffect, useState } from "react";


const Results = ({ criteria = {}, userName = "there", universityData }) => {
  const [filteredUniversity, setFilteredUniversity] = useState(null);

  // Fetch university preferences dynamically
  useEffect(() => {
    const fetchUniversityPreferences = async () => {
      try {
        // Simulate fetching data from a database or API
        const response = await fetch("/api/user/me", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response.ok) {
          const userData = await response.json();
          const universities = userData.universityPreferences || [];

          // Filter universities based on user-selected criteria
          const result = universities.find(
            (university) =>
              university.country.toLowerCase() === criteria.location?.toLowerCase() &&
              (criteria.program
                ? university.name.toLowerCase().includes(criteria.program.toLowerCase())
                : true)
          );

          setFilteredUniversity(result || null);
        } else {
          console.error("Failed to fetch university preferences");
        }
      } catch (error) {
        console.error("Error fetching university preferences:", error);
      }
    };

    fetchUniversityPreferences();
  }, [criteria]);

  // Fallback university if no match found
  const fallbackUniversity = {
    name: "University of Sydney",
    ranking: "Top 40",
    tuition: "AUD 56,000",
    scholarships: "Available",
    employmentRate: "83.1%",
    partTimeJobs: "Easy to find",
    location: "Sydney, Australia",
    program: "Computer Science",
    language: "English",
  };

  const university = filteredUniversity || universityData || fallbackUniversity;

  return (
    <div style={{ fontFamily: "Poppins, sans-serif", padding: "2rem" }}>
      <h1 style={{ textAlign: "center", marginBottom: "1rem" }}>
        Hey {userName}!
      </h1>
      <p style={{ textAlign: "center", marginBottom: "2rem", fontSize: "1.2rem" }}>
        Based on your preferences, here’s the best match for you:
      </p>

      <div
        style={{
          background: "#f9f9f9",
          padding: "2rem",
          borderRadius: "12px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          maxWidth: "800px",
          margin: "0 auto",
        }}
      >
        <h2
  style={{
    color: "#584a37",
    textAlign: "center",
    textDecoration: "underline" // Added underline
  }}
>
  {university.name}
</h2>


        <table style={{ width: "100%", marginTop: "1.5rem", fontSize: "1rem" }}>
          <tbody>
            <tr>
              <td style={{ padding: "0.5rem 1rem", fontWeight: "bold" }}>
                Program:
              </td>
              <td style={{ padding: "0.5rem 1rem" }}>
                {criteria.program || university.program}
              </td>
            </tr>
            <tr>
              <td style={{ padding: "0.5rem 1rem", fontWeight: "bold" }}>
                Location:
              </td>
              <td style={{ padding: "0.5rem 1rem" }}>
                {criteria.location || university.location}
              </td>
            </tr>
            <tr>
              <td style={{ padding: "0.5rem 1rem", fontWeight: "bold" }}>
                Ranking:
              </td>
              <td style={{ padding: "0.5rem 1rem" }}>
                {university.ranking || "Not specified"}
              </td>
            </tr>
            <tr>
              <td style={{ padding: "0.5rem 1rem", fontWeight: "bold" }}>
                Tuition Fees:
              </td>
              <td style={{ padding: "0.5rem 1rem" }}>
                {university.tuition || "Not specified"}
              </td>
            </tr>
            <tr>
              <td style={{ padding: "0.5rem 1rem", fontWeight: "bold" }}>
                Scholarships:
              </td>
              <td style={{ padding: "0.5rem 1rem" }}>
                {university.scholarships || "Not specified"}
              </td>
            </tr>
            <tr>
              <td style={{ padding: "0.5rem 1rem", fontWeight: "bold" }}>
                Employment Rate:
              </td>
              <td style={{ padding: "0.5rem 1rem" }}>
                {university.employmentRate || "Not specified"}
              </td>
            </tr>
            <tr>
              <td style={{ padding: "0.5rem 1rem", fontWeight: "bold" }}>
                Part-Time Jobs:
              </td>
              <td style={{ padding: "0.5rem 1rem" }}>
                {university.partTimeJobs || "Not specified"}
              </td>
            </tr>
            <tr>
              <td style={{ padding: "0.5rem 1rem", fontWeight: "bold" }}>
                Teaching Language:
              </td>
              <td style={{ padding: "0.5rem 1rem" }}>
                {criteria.language || university.language}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Results;
