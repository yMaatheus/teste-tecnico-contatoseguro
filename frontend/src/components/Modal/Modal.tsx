import React from "react";

export const Modal = ({
  children,
  buttonLabel,
  htmlFor,
}: {
  children: React.ReactNode;
  buttonLabel: string;
  htmlFor: string;
}) => (
  <>
    <label htmlFor={htmlFor} className="btn btn-ghost btn-xs">
      {buttonLabel}
    </label>

    <input type="checkbox" id={htmlFor} className="modal-toggle" />
    <label htmlFor={htmlFor} className="modal cursor-pointer">
      <label className="modal-box w-11/12 max-w-5xl" htmlFor="">
        <label
          htmlFor={htmlFor}
          className="btn btn-sm btn-circle absolute right-2 top-2"
        >
          ✕
        </label>

        {children}
      </label>
    </label>
  </>
);
