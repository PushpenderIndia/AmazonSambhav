import React from "react";

type ProductModalProps = {
  product: {
    product_id: string;
    created_at: string;
    images_list: string[];
    product_title: string;
    price: string;
    product_details: { [key: string]: string };
    about_this_item: string;
    product_description: string;
    approved: boolean;
  };
  onClose: () => void;
};

const Modal = ({ product, onClose }: ProductModalProps) => {
  return (
    <div className="modal show d-block" tabIndex={-1}>
      <div className="modal-dialog modal-lg modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{product.product_title}</h5>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            <div className="mb-3">
              <strong>Price:</strong> ₹{product.price || "N/A"}
            </div>
            <div className="mb-3">
              <strong>Brand:</strong> {product.product_details?.Brand || "N/A"}
            </div>
            <div className="mb-3">
              <strong>About This Item:</strong>
              <p>{product.about_this_item || "No details available."}</p>
            </div>
            <div className="mb-3">
              <strong>Product Description:</strong>
              <p>{product.product_description || "No description available."}</p>
            </div>
            <div className="mb-3">
              <strong>Created At:</strong> {new Date(product.created_at).toLocaleString()}
            </div>
            <div className="mb-3">
              <strong>Product Images:</strong>
              <div className="d-flex flex-wrap gap-2">
                {product.images_list.length > 0 ? (
                  product.images_list.map((image, index) => (
                    <img
                      key={index}
                      src={`${import.meta.env.VITE_BASE_PATH}${image}`}
                      alt={`Product ${index + 1}`}
                      className="img-thumbnail"
                      style={{ maxWidth: "150px", height: "auto" }}
                    />
                  ))
                ) : (
                  <p>No images available</p>
                )}
              </div>
            </div>
            <div className="mb-3">
              <strong>Product Details:</strong>
              <ul>
                {product.product_details &&
                  Object.entries(product.product_details).map(([key, value], index) => (
                    <li key={index}>
                      <strong>{key}:</strong> {value}
                    </li>
                  ))}
              </ul>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
