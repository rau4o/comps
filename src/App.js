import Button from "./Button";

function App() {
    return (
        <div>
            <div>
                <Button danger>Hello</Button>
            </div>
            <div>
                <Button warning>Hello</Button>
            </div>
            <div>
                <Button secondary>Hello</Button>
            </div>
            <div>
                <Button primary rounded>Hello</Button>
            </div>
        </div>
    )
}

export default App
