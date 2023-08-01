import create from 'zustand'


export interface GlobalStore {
    count: number,
    increment: ()=> void
};

export const useStore = create<GlobalStore>(set => ({
  count: 0,
  increment: () => set(state => ({ count: state.count + 1 })),
}))

