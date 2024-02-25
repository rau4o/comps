import Button from "./Button";

function App() {
    return (
        <div>
            <div>
                <Button secondary outline rounded>Hello</Button>
            </div>
            <div>
                <Button danger outline>Hello</Button>
            </div>
            <div>
                <Button warning>Hello</Button>
            </div>
            <div>
                <Button secondary outline>Hello</Button>
            </div>
            <div>
                <Button primary>Hello</Button>
            </div>
        </div>
    )
}

export default App
