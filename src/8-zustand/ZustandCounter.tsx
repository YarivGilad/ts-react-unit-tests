import { useStore } from './zustandStore'

// Single Component, both to display values and modify those
export function ZustandCounter() {
    const { count, increment } = useStore();
  
    return (
      <div>
        <div>
          <button aria-label="increments the value" onClick={increment}>
            Plus one
          </button>
          <span role="contentinfo">{count}</span>
        </div>
      </div>
    );
}

// Two separate Component
//    one to display values 
export function CounterControls() {
    const inc = useStore(state => state.increment)
    return <button aria-label="increment button" onClick={inc}>one up</button>
}
//    and the other modify those
export function CounterLabel() {
    const count = useStore(state => state.count)
    return <h1>{count}</h1>
}


