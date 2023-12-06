import React from "react";


class UserClass extends React.Component {

    constructor(props) {
        super(props)
        console.log(this.props.name + "constructor");
        this.state = {
            userInfo: {
                name: "Dummy",
            }
        }
    }

    componentDidMount() {
        // const data = await fetch("https://api.github.com/users/raj9211");
        console.log(this.props.name + "componentDidMout")

        this.timer = setInterval(() => {
            console.log("Interval calling")
        }, 1000);

        // const json = await data.json();

        // console.log(json);

        // this.setState({
        //     userInfo: json
        // })
    }


    componentDidUpdate() {
        console.log("Child component did update")
    }

    componentWillUnmount() {
        clearInterval(this.timer);
        console.log("Child component will unmount");
    }

    render() {
        console.log(this.props.name + "render");
        return (
            <div className="user-card">
                <h2>Name: {this.state.userInfo.name}</h2>
                {/* <h3>Location: {location}</h3> */}
                <h4>Contact: 1234567890</h4>
            </div>
        )
    }
}


export default UserClass;