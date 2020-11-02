import React, { useEffect, useState } from 'react';
import { Input, InputNumber, Table, Image, Form } from 'antd';
import { movieService, userService } from '../../../Service';
import { useForm } from "react-hook-form";
import '../../../Sass/Components/button_Form.scss';
import { useDispatch, useSelector } from 'react-redux';
import ModalFormAddMovie from './ModalFormAddMovie';
import ModalFormEditUser from './ModalFormEditUser';

import '../../../Layouts/userManager.scss'
import Axios from 'axios';
import swal from 'sweetalert';
import DatePicker from "react-datepicker";



export default function MovieManager() {

    const [DeleteAccount, setDeleteAccount] = useState({});
    const [movie, setmovie] = useState({});
    const [objEdit, setobjEdit] = useState({});

    const credentials = useSelector(state => state.user.credentials)

    useEffect(() => {
        movieService.fetchMovie()
            .then(res => {
                let lstMovie = res.data;
                setmovie(lstMovie);
            })
            .catch(err => {
                console.log(err.reponse.data);
            })
    }, [])

    const handleDelete = (acc, pass) => {
        let account = {
            taiKhoan: acc,
            matKhau: pass
        }


        userService.signIn(account)
            .then(res => {
                setDeleteAccount(res.data)

                Axios({
                    method: "DELETE",
                    url: `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${DeleteAccount.taiKhoan}`,
                    data: DeleteAccount.taiKhoan,
                    headers: {
                        'Authorization': `Bearer ${credentials.accessToken}`
                    }
                })
                    .then(res => {
                        swal({
                            title: res.data,
                            icon: "success",
                            button: "OK",
                        })
                            .then((result) => {
                                if (result) {
                                    window.location.reload()
                                }
                            }
                            )
                    })
                    .catch(err => {
                        console.log(err);
                    })

            })
            .catch(err => {
                console.log(err.reponse.data);
            })
    }

    const handleSearch = (e) => {
        Axios({
            method: 'GET',
            url: `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=GP03&tuKhoa=${e}`
        })
            .then(res => {
                let lstUserUpdate = res.data;

                setmovie(lstUserUpdate)
            })
            .catch(err => {
                console.log(err.reponse.data);
            })
    }

    const handleEdit = (e) => {
        let obj = {
            'taiKhoan': e.taiKhoan,
            'hoTen': e.hoTen,
            'matKhau': e.matKhau,
            'email': e.email,
            'soDT': e.soDT,
            'maLoaiNguoiDung': e.maLoaiNguoiDung,
            'maNhom': 'GP03'
        }
        setobjEdit(obj)
    }

    const columns = [
        {
            title: 'STT',
            width: 40,
            dataIndex: 'stt',
            key: '1',
            fixed: 'left',
        },
        {
            title: 'Mã phim',
            width: 50,
            dataIndex: 'maPhim',
            key: '1',
            fixed: 'left',
        },
        {
            title: 'Tên phim',
            width: 80,
            dataIndex: 'tenPhim',
            key: '2',
            fixed: 'left',
        },
        {
            title: 'Bí danh ',
            dataIndex: 'biDanh',
            key: '3',
            width: 80,
        },
        {
            title: 'Trailer',
            dataIndex: 'trailer',
            key: '4',
            fixed: 'center',
            width: 100
        },
        {
            title: 'Hình ảnh',
            dataIndex: 'hinhAnh',
            key: '5',
            width: 200,
            fixed: 'center',
            render: (_, record) => <Image src={record.hinhAnh} width={200} />
        },
        {
            title: 'Mô tả',
            dataIndex: 'moTa',
            key: '6',
            width: 150,
        },
        {
            title: 'Mã Nhóm ',
            dataIndex: 'maNhom',
            key: '7',
            width: 50,
        },
        {
            title: 'Ngày khởi chiếu ',
            dataIndex: 'ngayKhoiChieu',
            key: '8',
            width: 100,
        },
        {
            title: 'Đánh giá',
            dataIndex: 'danhGia',
            key: '9',
            width: 50,
        },
        {
            title: 'Action',
            key: 'operation',
            fixed: 'center',
            width: 100,
            render: (_, record) =>
                <div>
                    <button
                        className="btn btn-danger mr-2"
                        onClick={() => { handleDelete(record.taiKhoan, record.matKhau) }}>XÓA</button>
                    <button
                        className="btn btn-warning"
                        data-toggle="modal" data-target="#modalEditUser"
                        onClick={() => { handleEdit(record) }}
                    >SỬA</button>
                </div>
            ,
        },
    ];


    const data = [];

    Object.entries(movie).map(([index, item]) => {
        return (data.push({
            key: index.toString(),
            stt: (Number(index) + 1),
            maPhim: item.maPhim,
            tenPhim: item.tenPhim,
            biDanh: item.biDanh,
            trailer: item.trailer,
            hinhAnh: item.hinhAnh,
            moTa: item.moTa,
            ngayKhoiChieu: item.ngayKhoiChieu,
            maNhom: item.maNhom,
            danhGia: item.danhGia


        })
        )
    })

    const { register, errors, handleSubmit } = useForm();

    const onSubmit = (values) => { console.log(values); }



    return (
        <section className="userManager">
            <div className="container-fluid">

                <div className="row mt-4">
                    <div className="col"><h1>Danh sách phim </h1></div>
                    <div className="col-3 text-right">
                        <button type="button" className="btn  button_Form" data-toggle="modal" data-target="#modalAddMovie">THÊM PHIM</button>
                    </div>

                </div>

                <Table
                    columns={columns}
                    dataSource={data}
                    scroll={{ x: 1500, y: 600 }}

                />

                <div>

                    <div className="modal fade" id="modalAddMovie" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">×</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <ModalFormAddMovie />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>


                <div>
                    <div className="modal fade" id="modalEditUser" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">

                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">×</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <ModalFormEditUser objEdit={objEdit} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>





        </section>
    )

}
