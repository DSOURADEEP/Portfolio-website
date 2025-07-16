import React from 'react';
import '../styles/components/footer.css'; 

export default function Footer() {
  return (
    <footer className="footer">
      <p>
        © {new Date().getFullYear()} Souradeep Das – Built with little Craziness & ❤️
      </p>
    </footer>
  );
}