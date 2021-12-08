import React, {useState, useEffect} from "react";

const Footer = () => {

  const [date, setDate] = useState();

  const getYear = () => setDate(new Date().getFullYear())

  useEffect(() => {
    getYear()
  }, [])

  return (
    <footer className="footer text-center">
      <div>`© {date} Omnivoltaic Energy Solutions</div>
    </footer>
  );
};
export default Footer;