// import React from "react";
// import Container from "../components/Container";
// import styles from "../page_css/AddProduct.module.css";
// import Footer from "../components/Footer";
// import { useState } from "react";
// import { api_url } from "../constant";

// const AddProduct = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     discount: "",
//     price: "",
//     file: "",
//   });

//   const handleSubmit = async (e) => {
//     console.log(formData.file);
//     e.preventDefault();
//     const res = await fetch(`${api_url}/addProduct`, {
//       method: "POST",
//       body: JSON.stringify(formData),
//       files: {
//         file: formData.file,
//       },
//       headers: {
//         "Content-type": "application/json; charset=UTF-8",
//       },
//     });
//     const data = await res.json();
//     console.log(data);
//   };

//   return (
//     <div>
//       <Container>
//         <h2>Add Product</h2>
//         <form action="post" className={styles.form} onSubmit={handleSubmit}>
//           <input
//             type="text"
//             name="name"
//             placeholder="Name.."
//             value={formData.name}
//             onChange={(e) => {
//               setFormData((prevData) => {
//                 return { ...prevData, [e.target.name]: e.target.value };
//               });
//             }}
//           />
//           <input
//             type="text"
//             name="price"
//             placeholder="Price.."
//             value={formData.price}
//             onChange={(e) => {
//               setFormData((prevData) => {
//                 return { ...prevData, [e.target.name]: e.target.value };
//               });
//             }}
//           />
//           <input
//             type="text"
//             placeholder="Discount.."
//             value={formData.discount}
//             name="discount"
//             onChange={(e) => {
//               setFormData((prevData) => {
//                 return { ...prevData, [e.target.name]: e.target.value };
//               });
//             }}
//           />
//           <input
//             type="file"
//             name="file"
//             value={formData.file}
//             onChange={(e) => {
//               setFormData((prevData) => {
//                 return { ...prevData, [e.target.name]: e.target.value };
//               });
//             }}
//           />
//           <button>Add</button>
//         </form>
//       </Container>
//       <Footer></Footer>
//     </div>
//   );
// };

// export default AddProduct;

import React, { useState } from "react";
import Container from "../components/Container";
import styles from "../page_css/AddProduct.module.css";
import Footer from "../components/Footer";
import { api_url } from "../constant";

const AddProduct = () => {
  const [formData, setFormData] = useState({
    name: "",
    discount: "",
    price: "",
    file: null, // Change to null
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData(); // Create FormData object
    formDataToSend.append("name", formData.name);
    formDataToSend.append("discount", formData.discount);
    formDataToSend.append("price", formData.price);
    formDataToSend.append("file", formData.file); // Append file

    const res = await fetch(`${api_url}/addProduct`, {
      method: "POST",
      body: formDataToSend, // Pass FormData object
    });
    const data = await res.json();
    console.log(data);
    setFormData({
      name: "",
      discount: "",
      price: "",
      file: null, // Change to null
    });
  };

  return (
    <div>
      <Container>
        <h2>Add Product</h2>
        <form action="POST" className={styles.form} onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name.."
            value={formData.name}
            onChange={(e) => {
              setFormData((prevData) => {
                return { ...prevData, [e.target.name]: e.target.value };
              });
            }}
          />
          <input
            type="text"
            name="price"
            placeholder="Price.."
            value={formData.price}
            onChange={(e) => {
              setFormData((prevData) => {
                return { ...prevData, [e.target.name]: e.target.value };
              });
            }}
          />
          <input
            type="text"
            placeholder="Discount.."
            value={formData.discount}
            name="discount"
            onChange={(e) => {
              setFormData((prevData) => {
                return { ...prevData, [e.target.name]: e.target.value };
              });
            }}
          />
          <input
            type="file"
            name="file"
            onChange={(e) => {
              setFormData((prevData) => {
                return { ...prevData, file: e.target.files[0] }; // Update file value with selected file
              });
            }}
          />
          <button>Add</button>
        </form>
      </Container>
      <Footer />
    </div>
  );
};

export default AddProduct;
