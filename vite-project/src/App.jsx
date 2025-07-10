import Title from './title.jsx';
import Footer from './footer.jsx';
function App() {
  return(
    <>
      <Title userName="ayush" textColor="blue"/>
      <Title userName="John Doe" textColor="red"/>
      <Footer userMsg="Thank you for visiting!" colors="gray" />
    </>
  );
}

export default App;
