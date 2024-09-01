"use client"; // Marque como Client Component

import { getCsrfToken, signIn } from "next-auth/react";
import React, { useState, useEffect } from "react";

const SignInPage = () => {
  const [csrfToken, setCsrfToken] = useState<string | undefined>(undefined);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    // Fetch o CSRF token na montagem do componente
    const fetchCsrfToken = async () => {
      const token = await getCsrfToken();
      setCsrfToken(token);
    };

    fetchCsrfToken();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await signIn("credentials", { username, password });
  };

  if (!csrfToken) {
    return <div>Loading...</div>; // Exibe um loading enquanto o token não é carregado
  }

  return (
    <div className="flex justify-center items-center min-h-screen">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm p-4 border rounded-lg shadow-lg"
      >
        <h1 className="text-2xl font-bold mb-4">Sign In</h1>
        <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Username</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg"
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

export default SignInPage;
