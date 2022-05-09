import React from 'react'
import './AnalyticsPage.scss'
import Dropdown from '../../component/dropdown/Dropdown'
import AnalyticsPageAPI from '../../services/service';
import Loader from '../../component/loader/Loader';
import AlgorithmBlock from '../../component/algoritm-block/AlgorithmBlock';

export default class AnalyticsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            algorithmItems: [],
            algorithm: undefined,

            blocks: [],

            isComplete: false
        }    
        
        this.getAlgorithmItems();
    }

    getAlgorithmItems() {
        this.setState({
            isComplete: false
        });
        AnalyticsPageAPI.algorithmItems().then((items) => {
            this.setState({
                algorithm: items[0].key,
                algorithmItems: items,
                isComplete: true
            });

            this.getAlgorithm(items[0].key)
        });
    }

    getAlgorithm(key) {
        this.setState({
            isComplete: false
        });
        AnalyticsPageAPI.algorithm(key).then((blocks) => {
            this.setState({
                blocks: blocks,
                isComplete: true
            });
        });
    }


    render() {
        const items = this.state.algorithmItems

        const value = this.state.algorithm || (items[0] && items[0].key);

        if (!this.state.isComplete) {
            return <Loader> </Loader>
        }

        return <div className="analytics-page">
            <div className='algorithm row'>
                <label>АЛГОРИТМ:</label>
                <Dropdown items={items} value={value}  id='algorithm' handleChange={(val) => {
                    this.setState({
                        algorithm: val
                    });

                    this.getAlgorithm(val);
                }} />
            </div>
            <div className='scrollable row'>
                {this.state.blocks.map(block => 
                    <AlgorithmBlock block={block} />
                )}
            </div>
        </div>
    }
}
