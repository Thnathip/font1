"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Page() {
  const [username, setUserName] = useState("");
  const [password, setPassWord] = useState("");
  const [token, setToken] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("backend-pi-ten-83.vercel.app/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    const result = await res.json();
    setToken(result.token);
  };

  if (typeof window !== "undefined") {
    localStorage.setItem("token", token);

    const localtoken = localStorage.getItem("token");

    if (localtoken) {
      router.push("./users");
    }

    const localtokens = localStorage.getItem("token");

    if (localtokens) {
      router.push("./users");
    }

  }

  console.log(token);

  return (
    <>
      <br />
      <br />
      <br />
      <div className="container">
        <div class="card">
          <div class="card-header bg-success text-white">SignUp Form</div>
          <div class="card-body">
            <form className="row g-3" onSubmit={handleSubmit}>
              <div className="col-md-6">
                <label for="basic-url" className="form-label">
                  Username
                </label>
                <div className="input-group">
                  <span className="input-group-text" id="basic-addon3">
                    <i className="bi bi-person-vcard"></i>
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    value={username}
                    onChange={(e) => setUserName(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="col-md-6">
                <label for="basic-url" className="form-label">
                  Password
                </label>
                <div className="input-group">
                  <span className="input-group-text" id="basic-addon3">
                    <i className="bi bi-person-vcard-fill"></i>
                  </span>
                  <input
                    type="password"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassWord(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="col-12">
                <button type="submit" className="btn btn-success">
                  <i class="bi bi-box-arrow-right"></i> Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
