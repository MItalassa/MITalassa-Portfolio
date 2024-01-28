import ReactDOM  from "react-dom"

function Contact() {
    return <div>
        <h2 className="p-5"> Contact me: </h2>
        <div className="px-5 py-3 inline-block">
            <h3>
                <a href='mailto:marina.iacomino@gmail.com' className='p-3'></a>

                <a href='https://www.linkedin.com/' className='p-3'></a>

                <a href='https://github.com/MItalassa' className='p-3'></a>
            </h3>

        </div>
    </div>
}

export default Contact