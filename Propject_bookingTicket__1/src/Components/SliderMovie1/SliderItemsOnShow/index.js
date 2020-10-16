import React from 'react';
import { NavLink } from 'react-router-dom';
import Swal from 'sweetalert2'

export default function SliderItemsOnShow(props) {
    const showModal = () => {
        Swal.fire({
            width: 600,
            background: 'transparent',
            showConfirmButton: false,
            html:
                ` <iframe width="500" height="315" src=${props.item.trailer} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
        })
    }
    return (
        <div className="item carousel__detail">

            <div className="newIn__img img-fluid">
                <img src={props.item.hinhAnh} alt="" />
                <div className="overlay" />
                <div className="newIn__play">
                    <a onClick={() => { showModal() }} href="#/">
                        <i className="fa fa-play d-block" />
                    </a>
                </div>

            </div>

            <div className="newIn__text">
                <div className="name"><span>P</span> {props.item.tenPhim}</div>
                <div className="time">120 phút</div>
            </div>
            <div className="newIn__payTicket">
                <div className="detailMovie">
                    <NavLink to={`/detail/${props.item.maPhim}`}>ĐẶT VÉ</NavLink>
                </div>
            </div>



            <div>
                {/* Button trigger modal */}
                {/* <button type="button" className="btn btn-primary btn-lg" data-toggle="modal" data-target="#modelId">
                    Launch
  </button> */}
                {/* Modal */}
                <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Modal title</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="container-fluid">
                                    Add rows here
          </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}
