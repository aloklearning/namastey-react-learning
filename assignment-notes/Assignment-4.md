## Config Driven UI

- It is a design pattern in UI or React, with which the **structure**, **behavior** of the UI is being
  controlled via the config.
- It is very good for dynamic UI rendering. A server can control the UI renderings, and we will not be
  needing any UI interferences, once the code is enough to interpret the config.
- For example: Getting the response from API, and dynamic showcasing of a component like restaurant cards.

## React Fibre

- React fibre is an enhanced capability of React, introduced in **React 16** to make the rendering process faster.
  It use the `Reconcilliation` algorithm logic from previous react, and uses its own rendering algorithm.
- **Increment Rendering:** It does this by chunking/splitting the rendering process, and have it done in multiple
  frames. This prevents blocking the main thread, ensuring the UI remains interactive.
- **Time Slicing:** In simpler terms, it allows React to pause and come back to it, when it is done with more priority
  work. Makes the experience smooth.
- **Concurrency:** It can perform task simultaneously, or in "concurrent mode" without having to block the main thread.
- **Prioritisation:** It can prioritize critical tasks like animations over less urgent background tasks.

# Important

> _React is compatible in native devices like iOS and Android along with browser, because, React offers Reconcilliation algorithm as globally used algorithm for both React DOM and React Native, and rendering remains separate for both of them._
