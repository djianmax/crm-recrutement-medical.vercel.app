'use client';

import { useState } from "react";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";

export default function Home() {
  const [candidates, setCandidates] = useState([]);
  const [name, setName] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [location, setLocation] = useState("");

  const addCandidate = () => {
    if (!name) return;
    setCandidates([
      ...candidates,
      { id: Date.now(), name, specialty, location, status: "Nouveau lead" },
    ]);
    setName("");
    setSpecialty("");
    setLocation("");
  };

  const updateStatus = (id, newStatus) => {
    setCandidates(
      candidates.map((c) =>
        c.id === id ? { ...c, status: newStatus } : c
      )
    );
  };

  return (
    <div style={{ padding: 40 }}>
      <h1 style={{ fontSize: 28, fontWeight: "bold" }}>
        CRM Recrutement Médical
      </h1>

      <div style={{ marginTop: 20 }}>
        <h2>Ajouter un candidat</h2>
        <input
          placeholder="Nom"
          value={name}
          onChange={(e) => setName(e.target.value)}
        /><br /><br />
        <input
          placeholder="Spécialité"
          value={specialty}
          onChange={(e) => setSpecialty(e.target.value)}
        /><br /><br />
        <input
          placeholder="Localisation"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        /><br /><br />
        <button onClick={addCandidate}>
          <Plus size={16} /> Ajouter
        </button>
      </div>

      <div style={{ marginTop: 40 }}>
        <h2>Candidats</h2>
        {candidates.map((c) => (
          <motion.div key={c.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            style={{ border: "1px solid #ddd", padding: 10, marginBottom: 10 }}>
            <strong>{c.name}</strong><br />
            {c.specialty} – {c.location}<br />
            <select
              value={c.status}
              onChange={(e) => updateStatus(c.id, e.target.value)}
            >
              <option>Nouveau lead</option>
              <option>Contacté</option>
              <option>Entretien</option>
              <option>Envoyé au client</option>
              <option>Offre</option>
              <option>Placée</option>
            </select>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
