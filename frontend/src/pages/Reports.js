import React from "react";
import DataTable from "../components/DataTable";

export default function Reports() {
  return (
    <div>
      <h2>Отчёты и выгрузка</h2>
      <DataTable columns={["Дата", "Выручка", "Платежей", "Комиссия"]}
        data={[
          ["02.06.2025", "1 700 000₽", 147, "2 535₽"],
          ["01.06.2025", "980 000₽", 115, "1 960₽"]
        ]}
      />
      <button style={{marginTop: 20}}>Экспорт CSV</button>
    </div>
  );
}

