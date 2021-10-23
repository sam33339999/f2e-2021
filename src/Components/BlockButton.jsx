export default function BlockButtom(props) {

    const color = props.color;
    const symbol = props.symbol;

    return (

        <>
            <button style={{
                width: "40px",
                height: "40px",
                top: "394px",
                left: "846px",
                borderRadius: "6px",
                padding: "10px",
                backgroundColor: color ?? "green",
            }}>
                <i>{symbol}</i>
            </button>
        </>
    );
}