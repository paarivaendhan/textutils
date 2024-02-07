import React, {useState} from 'react'

export default function About() {
    
    const [myStyle, setMyStyle] = useState({
        color: 'black',
        backgroundColor: 'white'
    });

    const [btnText, setBtnText] = useState('Dark Mode');

    const [btnColor, setBtncolor] = useState('btn-dark')

    const toggleButton = ()=>{
        if(myStyle.color === 'white'){
            setMyStyle({
                color:'black',
                backgroundColor: 'white'
            })

            setBtnText('Dark Mode');
            setBtncolor('btn-dark');
        }
        else{
            setMyStyle({
                color: 'white',
                backgroundColor: 'black'
            })
            setBtnText('Light Mode');
            setBtncolor('btn-light');
        }
    }

  return (
    <div className="container py-3" style={myStyle}>
        <h2>About Us</h2>
            <div className="accordion accordion-flush" id="accordionFlushExample" style={myStyle}>
        <div className="accordion-item">
        <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
            <strong>Analyze Your Text:</strong>
            </button>
        </h2>
        <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body" style={myStyle}>Unlock the Power of Text Manipulation TextUtils empowers you to analyze your text with precision and ease. Whether you're examining the sentiment, counting words, or extracting key information, our app provides a user-friendly interface for performing various text analyses. Dive into a world of linguistic exploration and enhance your understanding of the textual content like never before.</div>
        </div>
        </div>
        <div className="accordion-item">
        <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
            <strong>Free to use:</strong>
            </button>
        </h2>
        <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body" style={myStyle}>Text Manipulation Made Accessible At TextUtils, we believe in making powerful text manipulation tools accessible to everyone. That's why we're proud to offer our app completely free of charge. No hidden fees or subscriptions - just a straightforward and robust platform for you to manipulate and analyze your text without any financial barriers. Enjoy the freedom to explore the possibilities of text manipulation at no cost.</div>
        </div>
        </div>
        <div className="accordion-item">
        <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
            <strong>Compatible:</strong>
            </button>
        </h2>
        <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body" style={myStyle}>Seamless Integration Across Platforms TextUtils is designed to seamlessly integrate into your workflow, ensuring compatibility across various platforms and devices. Whether you're on the go with your mobile device or working on a desktop, our app ensures a consistent and smooth experience. With TextUtils, enjoy the flexibility to manipulate your text wherever you are, bringing the power of linguistic analysis to your fingertips.</div>
        </div>
        </div>
        </div>

        <div className="container my-2">
            <button className={"btn "+btnColor} onClick={toggleButton}>{btnText}</button>
        </div>
    </div>
  )
}
