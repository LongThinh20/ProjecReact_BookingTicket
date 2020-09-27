import Axios from 'axios';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCinemaAction } from '../../Redux/Actions/movie'
import { FETCH_CINEMA } from '../../Redux/Actions/type';
import demo2 from './demo2';

class Demo extends Component {
    render() {
        return (
            <div>


                <div className="row">
                    <div className="col-4">
                        <div className="list-group" id="list-tab" role="tablist">
                            {
                                this.props.cinemaList.map((item, index) => (
                                    <a className="list-group-item list-group-item-action " id="list-home-list" data-toggle="list" href="#list-home" role="tab" aria-controls="home"
                                 
                                    >{item.maHeThongRap}</a>

                                ))

                            }
                        </div>
                    </div>

                    <demo2 />
                </div >



            </div>

        )
    }
    componentDidMount(){
        this.props.dispatch(fetchCinemaAction())
    }
}
const mapStateToProps = state => ({
    cinemaList: state.movie.cinema
})







export default connect(mapStateToProps,null)(Demo);