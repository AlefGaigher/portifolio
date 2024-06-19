'use client'
import { useEffect, useState } from 'react';

const calculateDaysUntilBirthday = (): number => {
  const today = new Date();
  const birthday = new Date(today.getFullYear(), 9, 21); 

  if (today > birthday) {
    birthday.setFullYear(today.getFullYear() + 1);
  }

  const timeDifference = birthday.getTime() - today.getTime();
  const daysUntilBirthday = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

  return daysUntilBirthday;
};

const calculateProgress = (): number => {
  const today = new Date();
  const start = new Date(today.getFullYear() - 1, 9, 21); 
  const end = new Date(today.getFullYear(), 9, 21); 

  const totalDays = (end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24);
  const daysUntilBirthday = calculateDaysUntilBirthday();
  const daysPassed = totalDays - daysUntilBirthday;

  return (daysPassed / totalDays) * 100;
};

export const BirthdayProgressBar: React.FC = () => {
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    setProgress(calculateProgress());
  }, []);

  return (
    <div className="w-full ">
      <div className="relative pt-1">
        <div className="flex mb-2 items-center justify-between">
          <div>
            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-indigo-400 bg-indigo-200">
                XP aniversário: {calculateDaysUntilBirthday()} Dias
            </span>
          </div>
          <div className="text-right">
            <span className="text-xs font-semibold inline-block text-indigo-400">
              {progress.toFixed(2)}%
            </span>
          </div>
        </div>
        <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
          <div
            style={{ width: `${progress}%` }}
            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-indigo-400"
          ></div>
        </div>
      </div>
    </div>
  );
};
