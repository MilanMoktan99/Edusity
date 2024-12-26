import './Title.css';

function Title(props){

    const subtitle = props.subtitle;
    const title = props.title;

    return (
        <div className="title">
            <p>{subtitle}</p>
            <h2>{title}</h2>
        </div>
    )
}

export default Title