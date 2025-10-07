import { useRef } from "react";

import Footer from "./components/Footer";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import { ThemeProvider } from "./context/theme/ThemeProvider";
import Layout from "./components/Layout";

function App() {
  const inputRef = useRef<HTMLInputElement>(null);

  function focusInput() {
    inputRef.current?.focus();
  }

  return (
    <ThemeProvider>
      <Header
      // focusInput={focusInput}
      />
      <Layout focusInput={focusInput}>
        <TodoList inputRef={inputRef} />
      </Layout>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
