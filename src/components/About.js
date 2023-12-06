import React from "react";
import UserClass from "./UserClass";
import User from "./User";


class About extends React.Component {

    constructor(props) {
        super(props)
        // console.log("Parent constructor");
    }

    componentDidMount() {
        // console.log("Parent componentDidMount")
    }

    render() {
        // console.log("Parent render");
        return (
            <div>
                <h1>About Us</h1>
                <h2>This is About us page</h2>
                {/* <UserClass name={"First Child (Class)"} location={"Kolkata(class)"} /> */}
                <User />
            </div>
        )
    }

}


// const About = () => {
//     return (
//         <div>
//             <h1>About Us</h1>
//             <h2>This is About us page</h2>
//             <UserClass name={"Ajay Chaudhary (Class)"} location={"Kolkata(class)"} />
//         </div>
//     )
// }



export default About;