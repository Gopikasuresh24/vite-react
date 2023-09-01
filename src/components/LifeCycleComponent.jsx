import React,{Component} from 'react';

export class LifeCycleComponent extends Component {
    constructor(props) {
        super(props);

        this.state={
            name :""
        };
    } 

    static getDerivedStateFromProps(props,state){
        console.log("State is updatedwith props");
        return{
            name :props.name
        };
    }
    shouldComponentUpdate(){
        console.log("component should update");
        return true;
    }
    componentDidMount(){
        console.log("Complete mount");
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log("previous state and props");
        console.log(prevProps,prevState);
    }
    componentDidUpdate(){
        console.log("Component did update");
    }
    ClickEvent(){
        console.log("Click Event")
        this.setState({
            name :"Update LifeCycle"
        });
    }

    render() {
        console.log("Render is updated")
        return (
            <>
            <div>{this.state.name}</div>
            <button onClick={()=>this.ClickEvent}>update</button>
            </>
        );
     }
}
export default LifeCycleComponent; 

