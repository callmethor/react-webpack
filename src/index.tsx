import React from 'react' // nạp thư viện react
import ReactDOM from 'react-dom' // nạp thư viện react-dom
import { Provider } from 'react-redux'
import Count from './components/Count'
import Hobby from './components/Hobby'
import store from './redux/store'

// Tạo component App
function App() {
    return (
        <Provider store={ store}>
            <div>
                <h1>Xin chào anh em F8!</h1>
                <Count/>
                <Hobby></Hobby>
            </div>
        </Provider>
    )
}

// Render component App vào #root element
ReactDOM.render(<App />, document.getElementById('root'))

