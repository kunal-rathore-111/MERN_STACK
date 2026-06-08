'use client';

import { useEffect, useState } from 'react';
import { FetchService } from './services/fetchService';

export default function Home() {
  const [data, setData] = useState<{ id: string; name: string; createdAt: Date }[] | undefined | null>(null);
  useEffect(() => {
    async function fetch() {
      const response = await FetchService();
      if (response.message) {
        return alert(response.message);
      } else setData(response.data);
    }
    fetch();
  }, []);

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div>
          <h1>Fetched data- </h1>
          <ol>
            {data &&
              data.map((d: any, index: number) => {
                return <li key={index}>{d.name}</li>;
              })}
          </ol>
        </div>
      </main>
    </div>
  );
}

export const dynamic = 'force-dynamic';
