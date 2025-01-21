"use client";
import React, { useState } from "react";
import { Maincomponents } from '@/components/Maincomponents';
import { Question } from '@/components/Question';

export default function Home() {
  return (
    <div className="bg-red">
      <Maincomponents />
      <Question />
    </div>
  );
}
