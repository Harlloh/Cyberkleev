import { useState, useEffect } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

function Contact() {
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setShouldAnimate(true);
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    country: "",
    occupation: "",
    phone: "", // Changed to string
    email: "",
    amount: "",
    complaint: "",
  });

  const initialFormData = {
    name: "",
    country: "",
    occupation: "",
    phone: "",
    email: "",
    amount: "",
    complaint: "",
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   emailjs.sendForm(
  //       'service_2k5lg8r',
  //       // 'service_stxwd6g',
  //       'template_oiqws3p',
  //       // 'template_xewlvcq',
  //       e.target,
  //       'jg5LzRpGZ8fm9abb7'
  //       ).then(res => {
  //           console.log(res)
  //           if(res.text === 'OK'){
  //             setFormData(initialFormData);              toast.success('Your message as been sent succefully')
  //           }

  //       }).catch((err) => toast.error('Message sent failed'));
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post(
        "https://bitsos-backend.onrender.com",
        formData
      );
      console.log(res);
      if (res.status === 200) {
        // Assuming the server returns a status of 200 for success
        const result = res.data;
        toast.success(result.status);
        console.log(result);
        setFormData({
          name: "",
          country: "",
          occupation: "",
          phone: "", // Changed to string
          email: "",
          amount: "",
          complaint: "",
        });
      } else {
        // Handle non-success status codes
        toast.error("Failed to submit the form. Please try again.");
      }
    } catch (error) {
      console.error(error);
      toast.error(
        "An error occurred while submitting the form. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      <div className="container contactcont">
        <h1 className={`contactconthead ${shouldAnimate ? "animate" : ""}`}>
          Complete this form to file a complaint
        </h1>
        <form onSubmit={handleSubmit} method="POST" action="/send">
          <div className="inputcontainer">
            <input
              type="text"
              required
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="inputcontainer">
            <input
              type="text"
              placeholder="Country of Residence"
              name="country"
              required
              value={formData.country}
              onChange={handleChange}
            />
          </div>

          <div className="inputcontainer">
            <input
              type="text"
              placeholder="Occupation"
              name="occupation"
              required
              value={formData.occupation}
              onChange={handleChange}
            />
          </div>

          <div className="inputcontainer">
            <PhoneInput
              name="phone"
              placeholder="Enter phone number"
              value={formData.phone}
              defaultCountry="US"
              onChange={(value) =>
                setFormData((prevData) => ({
                  ...prevData,
                  phone: value, // Update the phone field with the new value
                }))
              }
              international
              countryCallingCodeEditable={true}
            />
          </div>
          <div className="inputcontainer">
            <input
              type="email"
              name="email"
              required
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="inputcontainer">
            <input
              type="number"
              placeholder="Amount"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
            />
          </div>

          <div className="inputcontainer">
            <textarea
              name="complaint"
              id="complaint"
              cols="30"
              rows="10"
              placeholder="Complaint/Message"
              value={formData.complaint}
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={loading && "disabled"}
          >
            {loading ? "sending..." : "Send Complaint"}
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Contact;
