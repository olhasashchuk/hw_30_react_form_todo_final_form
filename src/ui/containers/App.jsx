import {Provider} from "react-redux"
import { TodoForm } from "../components/Form.jsx";
import {List} from "../components/List.jsx";
import {store} from "../../shared/store.js"
import {Footer} from "../components/Footer.jsx";

function App() {
    return (
        <Provider store={store}>
            <div className="container p-1" style={{ backgroundColor: 'orange' }}>
                <h1>TODO</h1>
                <TodoForm />
                <List />
                <Footer/>
            </div>
        </Provider>
    )
}

export default App
