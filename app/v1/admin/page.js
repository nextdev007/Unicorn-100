import Link from "next/link";
import React from "react";

const Admin = () => {
  return (
    <div>
      <button>
        <Link href="/v1/admin/project">
          <p>Upload Project</p>
        </Link>
      </button>
    </div>
  );
};

export default Admin;
