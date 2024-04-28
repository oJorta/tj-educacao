"use client";

import { useEffect, useState } from "react";
import cityNames from "../data/cities";
import data from "../data/data.json";
import dict_categoria from "../data/dict_categoria.json";
import cities_data from "../data/cities_data.json";

import { Dropdown } from "primereact/dropdown";

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { GiWhiteBook } from "react-icons/gi";
import { IoIosMenu } from "react-icons/io";

type DictCategoria = {
  [key: string]: {
    nome: string;
    categoria: {
      [key: string]: string;
    };
  };
};

export default function Home() {
  const [cities, setCities] = useState(Object.keys(cityNames));
  const [selectedCity, setSelectedCity] = useState<string>('Itabuna');
  const [selectedCityData, setSelectedCityData] = useState<any | null>(null);
  const [years, setYears] = useState<string[]>(
    Object.keys(data["Almadina"]).sort((a, b) => parseInt(b) - parseInt(a))
  );
  const [selectedYear, setSelectedYear] = useState<string | null>('2023');
  const [cityData, setCityData] = useState<any | null>({});

  useEffect(() => {
    if(selectedCity) {
      setSelectedCityData(cities_data['cidades'].find((city) => city['nome'] === selectedCity));
    }

    if (selectedCity && selectedYear) {
      let cityDataOnYear = data[selectedCity as keyof typeof data][selectedYear as keyof typeof data[keyof typeof data]];
      let keys = cityDataOnYear ? Object.keys(cityDataOnYear) : null;
      let dataArray = []

      if (!keys) {
        setCityData({});
        return;
      }

      for (let i = 0; i < keys.length; i++) {
        dataArray.push({
          indicador: dict_categoria[keys[i]]?.['nome'] || keys[i],
          estatísticas: Object.entries(cityDataOnYear[keys[i]]).map(([key, value]) => key + ": " + value)
          .join("\n"),
        })
      }

      console.log(dataArray);
      setCityData(dataArray);
    }
  }, [selectedCity, selectedYear]);

  return (
    <>
      <header className="flex justify-between items-center mt-8">
        <GiWhiteBook size={36}/>
        <h1 className="text-2xl font-semibold text-center px-8">OBSERVATÓRIO DA EDUCAÇÃO INFANTIL</h1>
        <IoIosMenu size={36}/>
      </header>

      <section className="flex flex-col items-center mt-8">
        <Dropdown
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.value)}
          options={cities}
          placeholder="Selecione uma cidade"
          className="w-full max-w-[350px] min-w-max shadow-md border-[1px] border-gray-300"
        />

        <div className="w-full flex gap-4 mt-4">
          <iframe className="w-full border-none" src={cityNames[selectedCity as keyof typeof cityNames]}></iframe>
          <div className="w-full bg-gray-200 shadow-sm rounded-sm p-4">
            {selectedCityData && (
              Object.keys(selectedCityData).map((data, i) => (
                <h2 key={i}>
                  <b>{data.toUpperCase().split("_").join(" ")}</b>: {selectedCityData[data]}
                </h2>
            )))}
          </div>
        </div>
        
      </section>
      
      <section className="w-full flex flex-col items-center mt-8">
        <Dropdown
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.value)}
          options={years}
          placeholder="Selecione um ano"
          className="shadow-md border-[1px] border-gray-300"
        />

      </section>

      <div className="w-full mt-8 box-border">
        <DataTable
          value={cityData || []}
          tableStyle={{ minWidth: "50rem" }}
          size='small'
          showGridlines
          stripedRows
        >
          <Column
            field='indicador'
            header='INDICADOR'
            pt={{
              bodyCell: "whitespace-pre-line",
            }}
          />
          <Column
            field='estatísticas'
            header='ESTATÍSTICAS'
            pt={{
              bodyCell: "whitespace-pre-line",
            }}
          />
        </DataTable>
      </div>
    </>
  );
}
