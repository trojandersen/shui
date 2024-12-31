import { BrowserRouter, Routes, Route } from "react-router-dom";
import Flow from "./pages/Flow";
import Write from "./pages/Write";
import Logo from "./components/Logo";
import Edit from "./pages/Edit";
import WriteButton from "./components/WriteButton";

function App() {
  return (
    <div className="bg-gray-900 min-h-screen py-12">
      <BrowserRouter>
        <Logo />
        <Routes>
          <Route path="/" element={<Flow />} />
          <Route path="/write" element={<Write />} />
          <Route path="/edit/:msgId" element={<Edit />} />
        </Routes>
        <WriteButton />
      </BrowserRouter>
    </div>
  );
}

export default App;
