import "../index.css"

export default function Title(props) {
    return <h2>{props.title} <span>{props.subTitle}</span></h2>;
}