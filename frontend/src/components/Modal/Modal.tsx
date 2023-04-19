import React from "react";

export const Modal = ({
  children,
  buttonLabel,
  htmlFor,
  labelClass = "",
}: {
  children: React.ReactNode;
  buttonLabel: string | React.ReactNode;
  htmlFor: string;
  labelClass?: string;
}) => (
  <>
    <label htmlFor={htmlFor} className={`btn btn-gho btn-xs ${labelClass}`}>
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
