import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface DateState {
  days: number | null;
  month: number | null;
  year: number | null;
  writeD: (e: any) => void;
  writeM: (e: any) => void;
  writeY: (e: any) => void;
}

const useStoreDate = create<DateState>()(
  devtools((set) => ({
    days: null,
    month: null,
    year: null,
    writeD: (e) => {
      set(() => ({ days: parseInt(e.target.value) }));
    },
    writeM: (e) => {
      set(() => ({ month: parseInt(e.target.value) }));
    },
    writeY: (e) => {
      set(() => ({ year: parseInt(e.target.value) }));
    },
  }))
);

export default useStoreDate;
