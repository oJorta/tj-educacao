"use client";

import { useEffect, useState } from "react";
import data from "../data/data.json";
import dict_categoria from "../data/dict_categoria.json";

import { Dropdown } from "primereact/dropdown";

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import Link from "next/link";

export default function Home() {
  const [cities, setCities] = useState(Object.keys(data));
  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  const [years, setYears] = useState<string[]>(
    Object.keys(data["Almadina"]).sort((a, b) => parseInt(b) - parseInt(a))
  );
  const [selectedYear, setSelectedYear] = useState<string | null>(null);
  const [cityData, setCityData] = useState<any | null>({});

  useEffect(() => {
    if (selectedCity && selectedYear) {
      let finalData = data[selectedCity][selectedYear];
      let keys = Object.keys(finalData);
      for (let i = 0; i < keys.length; i++) {
        finalData[keys[i]] = Object.entries(finalData[keys[i]]).map(([key, value]) => key + ": " + value).join("\n");
      }
      let finalData2 = [finalData]

      setCityData(finalData2 as any);
    }
  }, [selectedCity, selectedYear]);

  return (
    <>
      <Dropdown
        value={selectedCity}
        onChange={(e) => setSelectedCity(e.value)}
        options={cities}
        placeholder="Selecione uma cidade"
      />

      <Dropdown
        value={selectedYear}
        onChange={(e) => setSelectedYear(e.value)}
        options={years}
        placeholder="Selecione um ano"
      />

      <div>
        <DataTable value={cityData || []} tableStyle={{ minWidth: "50rem" }}>
          {cityData &&
            Object.keys(cityData).length > 0 &&
            Object.keys(cityData[0]).map((key, i) => (
              <Column
                key={i}
                field={key}
                header={dict_categoria[key]?.["nome"] || key}
                pt={{
                  bodyCell: "whitespace-pre-line",
                }}
              />
            ))}
        </DataTable>
      </div>
    </>
  );
}
