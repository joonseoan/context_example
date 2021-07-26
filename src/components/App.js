// Set Context Provider
import { Provider as BlogProvider } from '../context/BlogContext';
import ShowBlogScreen from './ShowBlogScreen';

function App() {
  
  return (
    <BlogProvider>
      <ShowBlogScreen />
    </BlogProvider>
  );
}

export default App;
