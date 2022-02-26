function IndustCard(props) {
    return (
        <div className="dark-card">
            <div className="text-center mt-4">
                <h4 className="text-red-600">{props.number}</h4>
                <h4 className=" mt-4 text-white">{props.title}</h4>
                <p className="mt-7 text-ijikod-sm">{props.content}</p>
            </div>
        </div>
    )
}

export default IndustCard;