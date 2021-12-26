import React, { useEffect, useState } from "react";

export default function Navbar() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return <div>This is the navbar {mounted && <span>Is mounted</span>} </div>;
}
