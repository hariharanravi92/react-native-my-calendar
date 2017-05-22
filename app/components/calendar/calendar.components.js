import React, { Component } from 'react';
import { Text,  View, Image, ListView, TouchableOpacity, Dimensions} from 'react-native';
import Styles from './calendar.styles';
import { UtilitiesService } from '../../services';
const { width, height } = Dimensions.get('window');


class CalendarComponent extends Component {

	selectedDate = 0;
  constructor(props) {
		super(props);
    this.state = {
			localJSON: UtilitiesService.calenderObjects
		}
	}

	onClickPrevious(){
		const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
		if (this.selectedDate > 0) {
			this.selectedDate = this.selectedDate - 1;
			this.setState({
				dataSource: ds.cloneWithRows(this.state.localJSON[this.selectedDate].timeTable),
			});
		}
	}

	timeSplit(time){
		return time.split(" ");
	}

	onClickSelectedTime(timeTable) { 
		const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state.localJSON[this.selectedDate].selected = timeTable;
		this.setState({
				dataSource: ds.cloneWithRows(this.state.localJSON[this.selectedDate].timeTable),
		});
	}

	onClickNext(){
			const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
		if (this.selectedDate < this.state.localJSON.length - 1) {
			this.selectedDate = this.selectedDate + 1;
			this.setState({
				dataSource: ds.cloneWithRows(this.state.localJSON[this.selectedDate].timeTable),
			});
		}
	}

  componentWillMount(){
		this.selectedDate =   UtilitiesService.findCurrentDateObjectIndex();
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
		this.setState({
			loaded: true,
			dataSource: ds.cloneWithRows(this.state.localJSON[this.selectedDate].timeTable)
		});
  }

  render() { 
    return (
      <View style={Styles.container}>
			<View style={[Styles.subHeader]}>
					<TouchableOpacity onPress={ () => this.onClickPrevious() }>
				<View style={{flex: 0.1, alignItems: 'flex-start'}}>
						{this.selectedDate !== 0 ?  
				<Image
					  resizeMode={Image.resizeMode.contain} 
					style={{width:40,height:40,marginTop:20,marginLeft:10,marginBottom:20}} source={require('../../images/left-arrow.png')}/>
				   : <View></View> }
				</View>
					</TouchableOpacity>
				<View style={{flex: 0.4, alignItems: 'flex-start'}}>
					 <Text style={[ UtilitiesService.getDay(this.state.localJSON[this.selectedDate].date)[0] === 'Today' ? {color: '#0dbed5'} : {color: '#757575'},{ marginTop:23,marginBottom:23,marginLeft:10 ,fontSize:23 ,fontWeight: 'bold' } ] }>
						{UtilitiesService.getDay(this.state.localJSON[this.selectedDate].date)[0]}   
					</Text>
				</View>
				<View style={{flex: 0.1}}>
					 <Text style={{ marginTop:30,marginBottom:30 ,color: '#757575', fontWeight: 'bold', fontSize:20 }}>
						{UtilitiesService.getDay(this.state.localJSON[this.selectedDate].date)[1]}th  
					</Text>
				
				</View>
						 <Text style={{ marginTop:25,color: '#757575', fontWeight: 'bold', fontSize:15 }}>
						{UtilitiesService.getDay(this.state.localJSON[this.selectedDate].date)[2]} {"\n"}
							{UtilitiesService.getDay(this.state.localJSON[this.selectedDate].date)[3]} 
					</Text>
					<TouchableOpacity onPress={ () => this.onClickNext()}>
				<View style={{flex: 0.1, alignItems: 'flex-end'}}>
					 	{ this.state.localJSON.length + 1 ==  this.selectedDate  ?  <View></View> :
					<Image resizeMode={Image.resizeMode.contain}  style={{width:40,height:40,marginTop:20,marginRight:10,marginBottom:20}} source={require('../../images/right-arrow.png')}/>
						 }
				</View>
        	</TouchableOpacity>
				</View>
				<View style={{marginTop:80}}>
        	<ListView
							style={[Styles.listView]}
							dataSource={this.state.dataSource}
							renderRow={(data, section, key) =>
								<View style={{
										width: width,
										  borderColor: '#ccc',
    									  borderBottomWidth: 0.5,
										     padding: 15,
											  flexDirection:'row',
										  backgroundColor: this.state.localJSON[this.selectedDate].selected == key ? '#ccc' : '#fff'
									}}
								 >
									 <View style={{flex: 0.1, alignItems: 'center'}}>
										<Text style={ [UtilitiesService.getDay(this.state.localJSON[this.selectedDate].date)[0] === 'Today' &&
										UtilitiesService.validateCurrentTime(this.timeSplit(data.time)[0],this.timeSplit(data.time)[1]) == 'true' ? 
										{color: '#0dbed5'} : {color: '#757575'} ,{fontSize:30, fontWeight: 'bold' }]}>
												{this.timeSplit(data.time)[0]} 
											</Text>
											<Text style={UtilitiesService.getDay(this.state.localJSON[this.selectedDate].date)[0] === 'Today' &&
										UtilitiesService.validateCurrentTime(this.timeSplit(data.time)[0],this.timeSplit(data.time)[1]) == 'true' ? 
										{color: '#0dbed5'} : {color: '#757575'}}>
												{this.timeSplit(data.time)[1]} 
											</Text>
										</View>
										 <View style={{flex: 0.8,marginLeft:15,marginTop:10, alignItems: 'flex-start'}}>
										<Text style={{ color: '#757575', fontWeight: 'bold'}}>
												{data.subject} 
											</Text>
											<Text style={{ color: '#757575'}}>
													{data.lesson} 
											</Text>
										</View>
									</View>
							} />
      	</View>
      </View>
    );
  }
}


export default CalendarComponent;

