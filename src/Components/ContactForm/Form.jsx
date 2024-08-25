import React from "react";
import Input from "./Input";
import Button from "./Button";
import { useForm } from "react-hook-form";


function Form() {
  const { register, handleSubmit } = useForm();

  const submit = async (data) => {
    const modifiedData = {
      ...data,
      access_key: "87f048da-398c-40be-baeb-18a42ae040ae",
    };

    const json = JSON.stringify(modifiedData);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      }).then((res) => res.json());

      if (res.success) {
        // console.log("Success", res);
      } else {
        // console.log("Error", res);
      }
    } catch (error) {
      // console.error("Submission error:", error);
    }
  };

  return (

    <form
  onSubmit={handleSubmit(submit)}
  className="flex justify-center  m-8 w-[35%] h-[70%]   max-md:w-[82%] "
>
  <div className="w-full  h-auto pt-14 "> {/* Added top padding here */}
    <Input
      placeholder="Your name"
      className="mb-4 p-3  w-full border-b-2 border-white bg-transparent focus:outline-none  text-2xl text-white"
      {...register("Yourname", { required: true })}
    />
    <Input
      placeholder="Email"
      className="mb-4 p-3 w-full border-b-2 border-white bg-transparent focus:outline-none text-2xl text-white"
      {...register("Email", { required: true })}
    />
    <Input
      placeholder="Your Message"
      className="mb-8 p-3 w-full border-b-2 border-white bg-transparent focus:outline-none text-2xl text-white"
      {...register("YourMessage", { required: true })}
    />
    <Button
      type="submit"
      className="w-[50%] py-3 px-4 bg-[#E0B6BE] text-white rounded hover:bg-[#C160AC] text-xl"
    >
      <span>Send Message</span>
    </Button>

  </div>
</form>


  );
}

export default Form;
