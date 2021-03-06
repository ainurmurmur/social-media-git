import React from 'react';


class ProfileStatus extends React.Component {

   
    state = {
        editMode:false,
        status: this.props.status
    }

    activateEditMode =() => {
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode =() => {
        this.setState({
            editMode: false
        });
        this.props.updateStatus(this.state.status);
    }
    onStatusChange = (e) => {
        this.setState ({
            status: e.currentTarget.value
        })
    }
    componentDidUpdate( prevProps, prevState) {

        if(prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
        });
    }
}    
        

    render() {
      
   return (<div>
       
            {!this.state.editMode
            ? <div>
                <b>Status: </b><span onDoubleClick ={this.activateEditMode}>{this.props.status || 'Status should be placed here'}</span>
           </div>
           : <div>
                <b>Status: </b><input onChange={this.onStatusChange} autoFocus = {true} onBlur ={this.deactivateEditMode} value={this.state.status}></input>
           </div>}
   </div>)
  }
}

  
  export default ProfileStatus;
  
  //dispatch = {props.dispatch} store={props.store}