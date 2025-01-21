"use client";
import React from "react";
import { Provider } from "jotai"; // Jotai Provider
import { Maincomponents } from '@/components/Maincomponents';
import { Question } from '@/components/Question';

export default function Home() {
  return (
    <Provider>
      <div className="bg-red">
        <Maincomponents />
        <Question />
      </div>
    </Provider>
  );
}
