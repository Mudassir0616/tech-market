import { Breadcrumbs } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import GlobalForm from "../components/common/GlobalForm";

const ContactUs = () => {
  const form_json = [
    {
      type: "text",
      name: "first_name",
      label: "First Name",
      fullWidth: true,
      xs: 12,
      sm: 6,
      md: 6,
      lg: 6,
      validation_message: "Please enter first name",
      required: true,
    },
    {
      type: "text",
      name: "last_name",
      label: "Last Name",
      fullWidth: true,
      xs: 12,
      sm: 6,
      md: 6,
      lg: 6,
      validation_message: "Please enter last name",
      required: true,
    },

    {
      type: "email",
      name: "email_id",
      label: "Email Address",
      fullWidth: true,
      xs: 12,
      validation_message: "Please enter email",
      required: true,
    },

    {
      type: "tel",
      name: "phone_number",
      label: "Phone Number",
      fullWidth: true,
      xs: 12,
      validation_message: "Please enter phone number",
      required: true,
    },
    {
      type: "text",
      name: "message",
      label: "Message",
      fullWidth: true,
      multiline: true,
      rows: 5,
      xs: 12,
      validation_message: "Please enter message",
      required: true,
    },
  ];

  const handleSubmit = async (values, resetForm) => {
    console.log("Submitting form:", values);

    // try {
    //   await ContactApi.post("", values);
    //   toast.success("Successfully submitted");
    //   resetForm();
    // } catch (error) {
    //   toast.error("Failed to submit", error);
    // }
  };

  return (
    <section className="container">
      <div role="presentation" className="bread-crumbs">
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" to="/">
            Home
          </Link>
          <p>Contact Us</p>
        </Breadcrumbs>
      </div>

      <div className="contact-container">
        <h1>
          Let&apos;s <span className="white-shine">talk business. </span>But you
          first
        </h1>

        <div className="form-container">
          <div className="form">
            <GlobalForm
              form_config={form_json}
              on_Submit={handleSubmit}
              btnClassName={"orange-cta"}
              btnText={"Save"}
              showSubmitBtn={false}
            >
              <div className="black-btn" type="submit">
                <div className="text">Submit</div>
              </div>
            </GlobalForm>
          </div>

          <div className="details"></div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
