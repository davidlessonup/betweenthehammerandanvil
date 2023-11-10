import React from "react";

export interface NotesTableProps {
  notes: string[];
  slideName: string;
}

export const NotesTable: React.FC<NotesTableProps> = ({ notes, slideName }) => (
  <ul>
    {notes.map((note, index) => (
      <li key={`${slideName}-${index}`}>{note}</li>
    ))}
  </ul>
);
