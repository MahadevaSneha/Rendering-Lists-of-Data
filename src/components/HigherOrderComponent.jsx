import React from "react";
class HigherOrderComponent extends React.Component{
constructor() {
    super();
    this.state={
        userData: [
            {id:'1',name:'Joe',user_type:'Developer',age:31,years:11},
            {id:'2',name:'Hill',user_type:'Designer',age:26,years:4},
            {id:'3',name:'John',user_type:'Teacher',age:24,years:2},
            {id:'4',name:'Sam',user_type:'Entreprenuer',age:58,years:25},
            {id:'5',name:'Jack',user_type:'Designer',age:43,years:18}
        ]
    }
}
renderItems = () =>{
    const data=this.state.userData;
    const mapRows=data.map((item) =>(
        <React.Fragment key={item.id}>
            <li className="list-elements">
                <span>Id: {item.id}</span>
                <span>Name: {item.name}</span>
                <span>User Type: {item.user_type}</span>
            </li>
        </React.Fragment>
    ));
    return mapRows;
}
renderUserTypeItems=(userType) =>{
    const data=this.state.userData.filter(item => item.user_type === userType);
    const mapRows=data.map((item) =>(
        <React.Fragment key={item.id}>
            <li className="list-elements">
                <span>Id: {item.id}</span>
                <span>Name: {item.name}</span>
                <span>User Type: {item.user_type}</span>
            </li>
        </React.Fragment>
    ));
    return mapRows;
    
}
renderNamesStartingWithJ=()=>{
    const data=this.state.userData.filter(item => item.name.startsWith('J'));
    const mapRows=data.map((item) =>(
        <React.Fragment key={item.id}>
            <li className="list-elements">
                <span>Id: {item.id}</span>
                <span>Name: {item.name}</span>
                <span>User Type: {item.user_type}</span>
            </li>
        </React.Fragment>
    ));
    return mapRows;
    
}
renderItemsByAge=()=>{
    const data=this.state.userData.filter(item => item.age>28 && item.age<=50);
    const mapRows=data.map((item) =>(
        <React.Fragment key={item.id}>
            <li className="list-elements">
                <span>Id: {item.id}</span>
                <span>Name: {item.name}</span>
                <span>User Type: {item.user_type}</span>
            </li>
        </React.Fragment>
    ));
    return mapRows;
    
}
renderTotalExpOfDesigner=()=>{
    const data=this.state.userData.filter(item =>item.user_type === 'Designer');
    const totalExp=data.reduce((total,item) => total+item.years,0);
    return totalExp;
    
}
render(){
    return(
        <React.Fragment>
            <h2>Display all items</h2>
            <div className="display-box">
                <ul>{this.renderItems()}</ul>
            </div>
            <h2>Display based on user type</h2>
            <div className="display-box">
                <ul>{this.renderUserTypeItems('Designer')}</ul>
            </div>
            <h2>Filter all data starting with J</h2>
            <div className="display-box">
                <ul>{this.renderNamesStartingWithJ()}</ul>
            </div>
            <h2>Filter all data based on age greater than 28 and age ess than or equal to 50</h2>
            <div className="display-box">
                <ul>{this.renderItemsByAge()}</ul>
            </div>
            <h2>Find the total years of the designers</h2>
            <div className="display-box">
                <ul>{this.renderTotalExpOfDesigner()}</ul>
            </div>
        </React.Fragment>
    )
}
}
export default HigherOrderComponent;