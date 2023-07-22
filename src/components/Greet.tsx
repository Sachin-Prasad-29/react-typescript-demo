type GreetPro = {
    name: string
    messageCount: number
    isLoggedIn: boolean
}

const Greet = (props: GreetPro) => {
    return (
        <div>
            <h2>{props.isLoggedIn ? `Hello ${props.name} with count ${props.messageCount}` : 'Please Login First'}</h2>
        </div>
    )
}

export default Greet
