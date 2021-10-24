import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSearch, faCheckSquare, faCoffee, faCheck } from '@fortawesome/fontawesome-free-solid'
import icons from '@fortawesome/fontawesome-free-solid'
import fontawesome from '@fortawesome/fontawesome'

// fontawesome.library.add(faCheckSquare, faCoffee);
{/* <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" /> */}
export default function BlockButtom(props) {

    const color = props.color;
    const icon = props.icon ?? "faCheck";
    const showIcon = icons[icon];

    return (
        <>
            <button style={{
                width: "40px",
                height: "40px",
                top: "394px",
                left: "846px",
                borderRadius: "6px",
                border: "1px solid transparent",
                color: 'white',
                padding: "10px",
                backgroundColor: color ?? "#FF1D6C",
            }}>
                <FontAwesomeIcon icon={showIcon} />
            </button>
        </>
    );
}