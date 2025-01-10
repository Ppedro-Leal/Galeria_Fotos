import Header from "../components/header";
import Gallery from "../components/Galeria";
import Footer from "../components/Footer";

const App = () => (
  <div className="flex flex-col min-h-screen">
    <Header />
    <main className="flex-grow">
      <Gallery />
    </main>
    <Footer />
  </div>
);

export default App;