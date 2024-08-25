import React, { useState, useEffect } from "react";
import Input from "./Input";
import Button from "./Button";
import { useForm } from "react-hook-form";

function Form() {
  // Initialize react-hook-form and get register, handleSubmit, and reset functions
  const { register, handleSubmit, reset } = useForm();

  // State to manage the display of the success message
  const [isSubmitted, setIsSubmitted] = useState(true);

  // Function to handle form submission
  const submit = async (data) => {
    // Add the access_key to the submitted data
    const modifiedData = {
      ...data,
      access_key: "87f048da-398c-40be-baeb-18a42ae040ae",
    };

    // Convert the data to JSON format
    const json = JSON.stringify(modifiedData);

    try {
      // Send the data to Web3Forms using a POST request
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      }).then((res) => res.json());

      // If the submission is successful
      if (res.success) {
        reset(); // Reset the form fields to make it blank
        setIsSubmitted(true); // Display the success message
      } else {
        // Handle the error if submission fails (optional)
      }
    } catch (error) {
      // Handle any errors that occur during submission (optional)
    }
  };

  // useEffect to hide the message after 2 seconds
  useEffect(() => {
    if (isSubmitted) {
      const timer = setTimeout(() => {
        setIsSubmitted(false); // Hide the message after 2 seconds
      }, 2000);

      return () => clearTimeout(timer); // Cleanup the timer on component unmount
    }
  }, [isSubmitted]);

  return (
    <>
    <div className="relative ">
      {/* Form component with onSubmit event handled by handleSubmit and submit function */}
      <form
        onSubmit={handleSubmit(submit)}
        className="flex justify-center m-8 w-[35%] h-[70%] max-md:w-[82%]"
      >
        {/* Container for the input fields and submit button */}
        <div className="w-full h-auto ">
          {/* Input field for "Your name" */}
          <Input
            placeholder="Your name"
            className="mb-4 p-3 border-b-2 border-white bg-transparent focus:outline-none text-2xl text-white w-[19rem]"
            {...register("Yourname", { required: true })}
          />
          {/* Input field for "Email" */}
          <Input
            placeholder="Email"
            className="mb-4 p-3  border-b-2 border-white bg-transparent focus:outline-none text-2xl text-white w-[19rem]"
            {...register("Email", { required: true })}
          />
          {/* Input field for "Your Message" */}
          <Input
            placeholder="Your Message"
            className="mb-8 p-3  border-b-2 border-white bg-transparent focus:outline-none text-2xl text-white w-[19rem]"
            {...register("YourMessage", { required: true })}
          />
          {/* Submit button to send the form data */}
          <Button
            type="submit"
            className="w-[19rem] py-3 px-4 bg-[#E0B6BE] text-white rounded hover:bg-[#C160AC] text-xl "
          >
            <span>Send Message</span>
          </Button>
        </div>
      </form>

      {/* Display the success message after submission */}
      {isSubmitted && (
        <div className="text-center  top-[21rem] left-[4rem] absolute text-white border-2 rounded-full p-3 mt-4 ml-2 max-md:text-[13px]">
          Your message has been sent
        </div>
      )}
      </div>
    </>
  );
}

export default Form;
