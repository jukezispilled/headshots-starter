'use client';

import React from 'react';
import Ticker from 'framer-motion-ticker';

export default async function Bicker() {
    const colors = ['#f2f2f2'];
  
    return (
      <div className="hover:scale-[100.5%] transition ease-in duration-200 my-14">
        <Ticker duration={7}>
            {colors.map((item, index) => (
            <div
                className="hover:scale-[101.5%] transition ease-in duration-200 hover:outline outline-offset-2 outline-1 outline-slate-300"
                key={index}
                style={{
                backgroundColor: item,
                margin: '14px',
                height: '300px',
                width: '200px',
                }}
            />
            ))}
        </Ticker>
      </div>
    );
  }