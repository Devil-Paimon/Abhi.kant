import { AiOutlineMail } from "react-icons/ai";
const Contact = () => {
  return (
    <>
      <div className="pb-16">
        <form className="flex flex-col items-center justify-between gap-5 form ">
          <p className="text-3xl font-semibold text-center pt-16 pb-5 text-black underline">
            Contact
          </p>
          <div className="flex flex-col items-center gap-5 w-full ">
            <div className=" w-full md:w-1/3 lg:w-1/3 field">
              <svg
                className="input-icon"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M13.106 7.222c0-2.967-2.249-5.032-5.482-5.032-3.35 0-5.646 2.318-5.646 5.702 0 3.493 2.235 5.708 5.762 5.708.862 0 1.689-.123 2.304-.335v-.862c-.43.199-1.354.328-2.29.328-2.926 0-4.813-1.88-4.813-4.798 0-2.844 1.921-4.881 4.594-4.881 2.735 0 4.608 1.688 4.608 4.156 0 1.682-.554 2.769-1.416 2.769-.492 0-.772-.28-.772-.76V5.206H8.923v.834h-.11c-.266-.595-.881-.964-1.6-.964-1.4 0-2.378 1.162-2.378 2.823 0 1.737.957 2.906 2.379 2.906.8 0 1.415-.39 1.709-1.087h.11c.081.67.703 1.148 1.503 1.148 1.572 0 2.57-1.415 2.57-3.643zm-7.177.704c0-1.197.54-1.907 1.456-1.907.93 0 1.524.738 1.524 1.907S8.308 9.84 7.371 9.84c-.895 0-1.442-.725-1.442-1.914z"></path>
              </svg>
              <input
                autoComplete="off"
                placeholder="Name"
                className=" input-field "
                type="text"
              />
            </div>
            <div className="w-full md:w-1/3 lg:w-1/3 field">
              <AiOutlineMail />

              <input placeholder="Email" className="input-field" type="email" />
            </div>
            <div className="w-full md:w-1/3 lg:w-1/3 field">
              <textarea
                rows={5}
                placeholder="Message"
                className="input-field"
                type="text"
              />
            </div>
          </div>
          <div className="w-full md:w-1/3 flex flex-col items-center p-2 border-4 border-primary border-dashed">
            <button className=" btn w-full rounded-none bg-primary text-white text-lg">
              Send
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Contact;
