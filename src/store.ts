import { create } from "zustand";

interface DateState {
  days: number;
  month: number;
  year: number;
}

let UseDateStore = create<DateState>()((set) => ({
  days: 0,
  month: 0,
  year: 0,
}));
