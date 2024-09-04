import { useRouteError } from "react-router-dom"

const Error = () => {
    const err = useRouteError()
    console.log(err)
    return (
        <div className="container">
            <h1>Page Not Found</h1>
            <h2>{err.status}: {err.statusText}</h2>

        </div>
    )
}

export default Error