import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const CartIcon = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleIcon = () => {
    toast.dismiss();
    setIsActive(!isActive);
  };
  useEffect(() => {
    if (isActive) {
      toast.success("It's a great choice!", {
        position: "top-right",
        autoClose: 400,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        icon: false,
        style: {
          background: "#f5c518",
          color: "black",
        },
      });
    }
  }, [isActive]);
  return (
    <div
      onClick={toggleIcon}
      role="button"
      aria-label="Bookmark"
      style={{
        position: "absolute",
        top: "10px",
        right: "10px",
        cursor: "pointer",
      }}
    >
      <i
        className={`bi bi-bookmark-fill ${
          isActive ? "text-primary" : "text-light"
        }`}
        style={{ fontSize: "24px" }}
      />
      <ToastContainer />
    </div>
  );
};

export default CartIcon;
