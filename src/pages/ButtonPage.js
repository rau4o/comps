import Button from "../components/Button";
import { GoBell, GoCloudDownload, GoDatabase } from "react-icons/go";

function ButtonPage() {
    const handleClick = () => {

    }

    return (
        <div>
            <div>
                <Button className="mb-5" secondary outline rounded onClick={handleClick}>
                    <GoBell/>
                    Hello
                </Button>
            </div>
            <div>
                <Button danger outline>
                    <GoCloudDownload/>
                    Hello
                </Button>
            </div>
            <div>
                <Button warning>
                    <GoDatabase/>
                    Hello
                </Button>
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

export default ButtonPage
