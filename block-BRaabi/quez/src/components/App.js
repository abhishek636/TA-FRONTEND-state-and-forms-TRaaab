import React from "react";
import data from "../data.json";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        activeQuestion: "",
        };
    }

    handleClick = (que) => {
        this.setState({
        activeQuestion: this.state.activeQuestion === que ? null : que,
        });
    };

    render() {
        return (
        <>
            <ul>
                {data.map((que, i) => (
                    <li key={i} onClick={() => this.handleClick(que.Q)}>
                        <div
                            className={
                            this.state.activeQuestion === que.Q ? "active flex" : "flex"
                            }
                        >
                            <h2>{que.Q}</h2>
                            <span>
                            {this.state.activeQuestion === que.Q ? "👆" : "👇"}{" "}
                            </span>
                        </div>
                        <h3>{this.state.activeQuestion === que.Q ? que.A : ""}</h3>
                    </li>
                ))}
            </ul>
        </>
        );
    }
}

export default App;

// acoding to tutoril video
// import React from "react";
// import faqs from "../data.json";

// class App extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//         activeIndex: null,
//         };
//     }

//     render() {

//         return (
//             <>
//                 <h1>AltCampus FAQ</h1>
//                 <ul>
//                     {faqs.map((faq,index) => (
//                         <li>
//                             <h2
//                                 onClick={() => {
//                                     this.setState({activeIndex : this.state.activeIndex === index ? null : index})
//                                 }}
//                             >{faq.Q} {this.state.activeIndex === index ?"👆" :"👇"}</h2>
//                             {
//                                 index === this.state.activeIndex && <p>{faq.A}</p>
//                             }
//                         </li>
//                     ))}
//                 </ul>
//             </>
//         );
//     }
// }

// export default App;