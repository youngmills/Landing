import { useEffect } from "react";

const Script = ({ formId }) => {
  useEffect(() => {
    // Remove "active" class from all elements
    document.querySelectorAll(".form-box").forEach((form) => form.classList.remove("active"));
    
    // Add "active" class to the target element
    if (formId) {
      const targetForm = document.getElementById(formId);
      if (targetForm) {
        targetForm.classList.add("active");
      }
    }
  }, [formId]); // Dependency array to re-run when formId changes

  return null; // This component doesn't render anything
};

export default Script;
