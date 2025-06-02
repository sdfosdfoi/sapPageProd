import React from "react";

export default function NotificationWidget({ notifications }) {
  if (!notifications?.length) return null;
  return (
    <div style={{
      position: "fixed", right: 32, bottom: 32, zIndex: 1000,
      background: "#fff", borderRadius: 12, boxShadow: "0 4px 24px #E1E4F0", minWidth: 320, padding: 16
    }}>
      <b>Уведомления:</b>
      <ul style={{margin: 0, padding: "8px 0 0 18px"}}>
        {notifications.map((n, i) => (
          <li key={i}>{n}</li>
        ))}
      </ul>
    </div>
  );
}

